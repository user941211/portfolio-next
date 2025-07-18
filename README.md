# 변재성 포트폴리오

Next.js 14와 TypeScript로 구축된 모던 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- **모던 디자인**: TailwindCSS를 사용한 반응형 디자인
- **다크모드**: 시스템 테마에 따른 자동 다크모드 지원
- **애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- **SEO 최적화**: Next.js의 메타데이터 API 활용
- **접근성**: WCAG 가이드라인 준수
- **Contact 폼**: Nodemailer를 통한 이메일 전송 기능

## 🛠 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **애니메이션**: Framer Motion
- **이메일**: Nodemailer
- **테마**: next-themes
- **배포**: Vercel

## 📁 프로젝트 구조

```
portfolio-next/
├── src/
│   ├── app/                # App Router 페이지
│   │   ├── api/           # API Routes
│   │   ├── globals.css    # 글로벌 스타일
│   │   ├── layout.tsx     # 루트 레이아웃
│   │   └── page.tsx       # 홈페이지
│   ├── components/        # React 컴포넌트
│   │   ├── ui/           # 재사용 가능한 UI 컴포넌트
│   │   ├── sections/     # 페이지 섹션 컴포넌트
│   │   └── common/       # 공통 컴포넌트
│   ├── lib/              # 유틸리티 함수
│   └── types/            # TypeScript 타입 정의
├── public/               # 정적 파일
│   └── images/          # 이미지 자산
└── ...
```

## 🎨 주요 섹션

1. **Hero**: 인트로 및 주요 CTA
2. **About**: 자기소개 및 핵심 역량
3. **Skills**: 기술 스택 및 숙련도
4. **Projects**: 주요 프로젝트 소개
5. **Awards**: 수상 경력 및 자격증
6. **Contact**: 연락처 및 문의 폼

## ⚡ 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/user941211/portfolio-next.git
cd portfolio-next
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 3. 환경변수 설정

`.env.local` 파일을 생성하고 다음 환경변수를 설정하세요:

```env
# 이메일 설정 (Gmail 사용 시)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# 사이트 URL
SITE_URL=http://localhost:3000
```

### 4. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📧 Contact 폼 설정

Contact 폼을 사용하려면 Gmail App Password를 설정해야 합니다:

1. Google 계정의 2단계 인증을 활성화
2. [Google App Passwords](https://myaccount.google.com/apppasswords)에서 앱 비밀번호 생성
3. `.env.local`에 이메일과 앱 비밀번호 추가

## 🚀 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 환경변수 설정
3. 자동 배포 완료

### 수동 배포

```bash
npm run build
npm run start
```

## 🎯 성능

- **Lighthouse 점수**: 95+ (모든 메트릭)
- **Core Web Vitals**: 모든 임계값 통과
- **번들 크기**: 최적화된 코드 스플리팅

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 👨‍💻 개발자

**변재성**
- Email: common941211@gmail.com
- GitHub: [@user941211](https://github.com/user941211)
- 포트폴리오: [https://portfolio-next-bjs.vercel.app](https://portfolio-next-bjs.vercel.app)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
