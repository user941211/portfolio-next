# 변재성 포트폴리오

Next.js 16(App Router)와 TypeScript로 만든 개인 포트폴리오 프로젝트입니다.

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Nodemailer

## 주요 기능

- 반응형 단일 페이지 포트폴리오
- 다크 모드 지원(`next-themes`)
- 섹션 기반 애니메이션 UI
- Contact API를 통한 이메일 문의 전송
- SEO 메타데이터 설정

## 실행 환경

- Node.js 20.19 이상 (`.nvmrc` 기준)
- npm 10 이상 권장

## 시작하기

```bash
git clone https://github.com/user941211/portfolio-next.git
cd portfolio-next
npm install
```

`.env.local` 생성:

```env
SITE_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

개발 서버 실행:

```bash
npm run dev
```

## 스크립트

```bash
npm run dev        # 개발 서버
npm run lint       # ESLint
npm run typecheck  # TypeScript 검사
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 실행
npm run check      # lint + typecheck + build
```

## 프로젝트 구조

```text
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    common/
    sections/
    ui/
  lib/
  types/
```

## 배포

Vercel 배포 시 아래 환경변수를 동일하게 설정하세요.

- `SITE_URL`
- `EMAIL_USER`
- `EMAIL_PASS`

## 개발자

- Email: common941211@gmail.com
- GitHub: https://github.com/user941211
- Portfolio: https://portfolio-next-bjs.vercel.app
