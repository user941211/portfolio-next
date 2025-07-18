'use client';

import { motion } from 'framer-motion';
import { Card, Badge, ImagePlaceholder } from '@/components/ui';

const stats = [
  { label: '총 경력', value: '2년 1개월', highlight: true },
  { label: '주요 프로젝트', value: '4개', highlight: false },
  { label: '기술 스택', value: '15+', highlight: false },
  { label: '수상 경력', value: '3건', highlight: true },
];

const strengths = [
  {
    title: '풀스택 개발',
    description: 'React, Next.js 프론트엔드와 Node.js, Python, Dart 백엔드 개발 경험',
    icon: '🚀',
  },
  {
    title: 'IoT 통신',
    description: 'RS485 기반 데이터 수집 및 제어 시스템 구축',
    icon: '📡',
  },
  {
    title: 'AI/영상처리',
    description: 'YOLOv8 + DeepStream 활용 주차장 시스템 엔진 개발 (mAP 95% 이상)',
    icon: '🤖',
  },
  {
    title: '서버 운영',
    description: 'Linux/Windows 서버 구축, 백업 자동화, 모니터링 시스템',
    icon: '⚙️',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* 섹션 제목 */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-gradient mb-4">저에 대해</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              풀스택·모니터링·AI 통합 솔루션 엔지니어로서 2년 1개월의 실무 경험을 바탕으로 
              안정적이고 확장 가능한 시스템을 구축합니다.
            </p>
          </motion.div>

          {/* 메인 콘텐츠 */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 왼쪽: 프로필 정보 */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* 프로필 사진과 기본 정보 */}
              <Card variant="elevated" className="text-center p-8">
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30">
                    <img
                      src="/images/profile/profile.jpg"
                      alt="변재성 프로필 사진"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">변재성</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg">백엔드/서버 개발자</p>
                  <p>신라이앤씨 • 기업부설연구소 연구원</p>
                  <p>영남대학교 컴퓨터공학과 졸업</p>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="primary">재직중</Badge>
                  <Badge variant="secondary">27세</Badge>
                  <Badge variant="outline">대구</Badge>
                </div>
              </Card>

              {/* 통계 */}
              <Card variant="outlined" className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">핵심 지표</h4>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className={`text-2xl font-bold ${
                          stat.highlight ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* 오른쪽: 상세 소개 */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* 소개글 */}
              <Card variant="default" className="p-6">
                <h4 className="text-lg font-semibold mb-4">🎯 개발자로서의 여정</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    기업 내 서버 구축 및 운영을 담당하며, Linux 및 Windows 기반 서버 세팅, 
                    유지보수를 수행해왔습니다. SQLite, PostgreSQL 등의 DB를 운영 및 관리하며, 
                    정기 백업 및 복구 계획 수립을 실행하여 데이터 안전성을 확보했습니다.
                  </p>
                  <p>
                    백업 및 로그 저장 자동화 시스템을 구축하여 프로젝트 정기 백업, 로그 수집 및 
                    이상 징후 모니터링 프로세스를 체계화했습니다. 이를 통해 장애를 사전에 탐지하고 
                    신속하게 대응할 수 있도록 지원했습니다.
                  </p>
                  <p>
                    특히 YOLOv8과 DeepStream을 활용한 AI 영상처리 시스템에서 
                    <strong className="text-primary"> mAP 95% 이상, 오탐률 1% 미만</strong>을 
                    달성하여 주차장 관리 시스템의 정확도를 크게 향상시켰습니다.
                  </p>
                </div>
              </Card>

              {/* 핵심 역량 */}
              <Card variant="default" className="p-6">
                <h4 className="text-lg font-semibold mb-6">💪 핵심 역량</h4>
                <div className="grid gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="text-2xl">{strength.icon}</div>
                      <div>
                        <h5 className="font-semibold mb-1">{strength.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* 연락처 링크 */}
              <Card variant="gradient" className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-4">🔗 더 자세히 알아보기</h4>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/user941211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white underline"
                  >
                    GitHub
                  </a>
                  <span className="text-white/50">•</span>
                  <a 
                    href="https://user941211.github.io/portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white underline"
                  >
                    기존 포트폴리오
                  </a>
                  <span className="text-white/50">•</span>
                  <a 
                    href="mailto:com*********@gmail.com"
                    className="text-white/90 hover:text-white underline"
                  >
                    이메일
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 