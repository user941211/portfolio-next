'use client';

import { motion } from 'framer-motion';
import { Card, Progress, ImagePlaceholder } from '@/components/ui';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90, description: '컴포넌트 기반 UI 개발에 능숙' },
      { name: 'Next.js', level: 85, description: 'SSR, SSG 및 최적화 경험' },
      { name: 'TypeScript', level: 80, description: '타입 안전성을 고려한 개발' },
      { name: 'Tailwind CSS', level: 85, description: '효율적인 스타일링 구현' },
      { name: 'JavaScript', level: 90, description: 'ES6+ 문법 및 모던 JS 활용' },
      { name: 'Vue.js', level: 70, description: '기본적인 Vue 프로젝트 구현' },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, description: 'RESTful API 및 서버 개발' },
      { name: 'Python', level: 88, description: '데이터 처리 및 자동화 스크립트' },
      { name: 'Dart', level: 82, description: 'Flutter 및 서버 사이드 개발' },
      { name: 'Java', level: 75, description: '객체지향 프로그래밍 및 웹 개발' },
    ]
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 85, description: '고급 쿼리 및 최적화' },
      { name: 'SQLite', level: 90, description: '임베디드 DB 설계 및 관리' },
      { name: 'MySQL', level: 80, description: '관계형 DB 설계 및 운영' },
      { name: 'MongoDB', level: 70, description: 'NoSQL 기본 구조 이해' },
    ]
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    skills: [
      { name: 'YOLOv8', level: 85, description: '객체 탐지 모델 학습 및 튜닝' },
      { name: 'OpenCV', level: 80, description: '영상 처리 및 컴퓨터 비전' },
      { name: 'DeepStream', level: 82, description: '실시간 영상 분석 파이프라인' },
      { name: 'Linux', level: 88, description: '서버 구축 및 시스템 관리' },
      { name: 'Docker', level: 75, description: '컨테이너화 및 배포' },
      { name: 'Git/GitHub', level: 90, description: '버전 관리 및 협업' },
    ]
  }
];

const achievements = [
  {
    title: 'AI 모델 성능',
    value: '95%+',
    description: 'mAP 정확도',
    icon: '🎯',
  },
  {
    title: '오탐률',
    value: '<1%',
    description: '오탐 감소율',
    icon: '✅',
  },
  {
    title: '장애 대응',
    value: '40%↓',
    description: '대응 시간 단축',
    icon: '⚡',
  },
  {
    title: '프로젝트 완성도',
    value: '100%',
    description: '납기 준수율',
    icon: '🚀',
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

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
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
            <h2 className="text-gradient mb-4">기술 스택</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              풀스택 개발부터 AI/IoT 시스템까지, 다양한 기술을 활용하여 
              최적화된 솔루션을 제공합니다.
            </p>
          </motion.div>

          {/* 성과 지표 */}
          <motion.div variants={itemVariants}>
            <Card variant="gradient" className="p-8 mb-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                🏆 주요 성과 지표
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center text-white"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-bold mb-1">{achievement.value}</div>
                    <div className="text-sm text-white/80">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* 기술 스택 카테고리 */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <div className="h-px bg-border flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card variant="outlined" hover="lift" className="p-6 h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 flex-center rounded-lg bg-primary/10">
                            <ImagePlaceholder
                              variant="tech"
                              width="32px"
                              height="32px"
                              text=""
                              className="rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{skill.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Progress 
                                value={skill.level} 
                                className="flex-1 h-2" 
                                animated 
                              />
                              <span className="text-sm font-medium text-primary">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 추가 기술 및 도구 */}
          <motion.div variants={itemVariants}>
            <Card variant="filled" className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                🛠️ 사용 가능한 도구 및 기술
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">개발 도구</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• VSCode, Eclipse</p>
                    <p>• Git, GitHub Actions</p>
                    <p>• npm, yarn, pip</p>
                    <p>• Postman, curl</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">시스템 & 배포</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Ubuntu, CentOS</p>
                    <p>• systemd, crontab</p>
                    <p>• nginx, Apache</p>
                    <p>• Docker, Docker Compose</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">통신 & 프로토콜</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• RS485 시리얼 통신</p>
                    <p>• RESTful API</p>
                    <p>• WebSocket</p>
                    <p>• MQTT (기본)</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 학습 중인 기술 */}
          <motion.div variants={itemVariants}>
            <Card variant="outlined" className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">📚 현재 학습 중</h3>
              <p className="text-muted-foreground mb-4">
                지속적인 성장을 위해 새로운 기술을 학습하고 있습니다
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="badge-base bg-warning/20 text-warning-foreground">
                  Kubernetes
                </span>
                <span className="badge-base bg-info/20 text-info-foreground">
                  AWS/Cloud
                </span>
                <span className="badge-base bg-success/20 text-success-foreground">
                  GraphQL
                </span>
                <span className="badge-base bg-primary/20 text-primary-foreground">
                  Microservices
                </span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 