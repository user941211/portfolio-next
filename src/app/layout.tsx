import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '@/components/common/navigation';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
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
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.vercel.app',
    title: '변재성 - 풀스택 개발자 & AI 엔지니어',
    description: '스마트 파킹 시스템과 영상처리 AI를 개발하는 풀스택 개발자 변재성의 포트폴리오입니다.',
    siteName: '변재성 포트폴리오',
  },
  twitter: {
    card: 'summary_large_image',
    title: '변재성 - 풀스택 개발자 & AI 엔지니어',
    description: '스마트 파킹 시스템과 영상처리 AI를 개발하는 풀스택 개발자 변재성의 포트폴리오입니다.',
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
  verification: {
    google: 'your-google-verification-code',
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
