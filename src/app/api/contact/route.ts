import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function normalizeOrigin(url?: string | null) {
  if (!url) return null;

  try {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return new URL(url).origin;
    }

    return new URL(`https://${url}`).origin;
  } catch {
    return null;
  }
}

function getAllowedOrigins() {
  const candidates = [
    process.env.SITE_URL,
    process.env.VERCEL_URL,
    'http://localhost:3000',
  ];

  return new Set(
    candidates
      .map((candidate) => normalizeOrigin(candidate))
      .filter((value): value is string => Boolean(value))
  );
}

function isAllowedOrigin(requestOrigin: string | null) {
  if (!requestOrigin) return true;
  const allowedOrigins = getAllowedOrigins();
  return allowedOrigins.size === 0 || allowedOrigins.has(requestOrigin);
}

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(clientId);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  rateLimitStore.set(clientId, existing);
  return false;
}

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSiteUrl() {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export async function POST(request: NextRequest) {
  const requestOrigin = request.headers.get('origin');
  if (!isAllowedOrigin(requestOrigin)) {
    return NextResponse.json(
      { error: '허용되지 않은 요청입니다.' },
      { status: 403 }
    );
  }

  const clientId = getClientIdentifier(request);
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
      { status: 429 }
    );
  }

  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = sanitizeText(body.name, 80);
    const email = sanitizeText(body.email, 254).toLowerCase();
    const subject = sanitizeText(body.subject, 120);
    const message = sanitizeText(body.message, 3000);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('EMAIL_USER/EMAIL_PASS 환경변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { error: '서버 설정 오류로 메시지를 전송할 수 없습니다.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
    const siteUrl = escapeHtml(getSiteUrl());

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `[포트폴리오 문의] ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            포트폴리오 문의
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${safeName}</p>
            <p><strong>이메일:</strong> ${safeEmail}</p>
            <p><strong>제목:</strong> ${safeSubject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">문의 내용</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p>이 메시지는 포트폴리오 웹사이트(${siteUrl})에서 전송되었습니다.</p>
            <p>전송 시간: ${new Date().toLocaleString('ko-KR')}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    
    return NextResponse.json(
      { error: '메시지 전송 중 오류가 발생했습니다. 나중에 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  const requestOrigin = request.headers.get('origin');
  if (!isAllowedOrigin(requestOrigin)) {
    return new NextResponse(null, { status: 403 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  });
}
