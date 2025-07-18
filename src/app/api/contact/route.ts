import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 입력 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Nodemailer 설정 (Gmail 사용 예시)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // 환경변수에서 가져오기
        pass: process.env.EMAIL_PASS, // 앱 비밀번호
      },
    });

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 본인 이메일로 받기
      subject: `[포트폴리오 문의] ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            포트폴리오 문의
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>제목:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">문의 내용</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p>이 메시지는 포트폴리오 웹사이트(${process.env.SITE_URL || 'localhost:3000'})에서 전송되었습니다.</p>
            <p>전송 시간: ${new Date().toLocaleString('ko-KR')}</p>
          </div>
        </div>
      `,
    };

    // 이메일 전송
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

// OPTIONS 메서드 지원 (CORS 관련)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 