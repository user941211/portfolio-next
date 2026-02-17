import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '@/components/common/navigation';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const DEFAULT_SITE_URL = 'https://portfolio-next-bjs.vercel.app';

function resolveSiteUrl(rawUrl?: string) {
  if (!rawUrl) return DEFAULT_SITE_URL;
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    return rawUrl;
  }
  return `https://${rawUrl}`;
}

const siteUrl = resolveSiteUrl(process.env.SITE_URL);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '변재성 - 풀스택 개발자 & AI 엔지니어',
  description: '스마트 파킹 시스템과 영상처리 AI를 개발하는 풀스택 개발자 변재성의 포트폴리오입니다. React, Next.js, Python, YOLOv8, IoT 전문.',
  keywords: [
    '변재성',
    '풀스택 개발자',
    'AI 엔지니어',
    'React',
    'Next.js',
    'Python',
    'YOLOv8',
    'DeepStream',
    '스마트 파킹',
    'IoT',
    'RS485',
    '영상처리',
    '포트폴리오'
  ],
  authors: [{ name: '변재성' }],
  creator: '변재성',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    title: '변재성 - 풀스택 개발자 & AI 엔지니어',
    description: '스마트 파킹 시스템과 영상처리 AI를 개발하는 풀스택 개발자 변재성의 포트폴리오입니다.',
    siteName: '변재성 포트폴리오',
    images: [
      {
        url: '/images/profile/profile.jpg',
        width: 1200,
        height: 630,
        alt: '변재성 포트폴리오 프로필',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '변재성 - 풀스택 개발자 & AI 엔지니어',
    description: '스마트 파킹 시스템과 영상처리 AI를 개발하는 풀스택 개발자 변재성의 포트폴리오입니다.',
    images: ['/images/profile/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
