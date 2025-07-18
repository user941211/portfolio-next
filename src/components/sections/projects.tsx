'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Badge, Button } from '@/components/ui';

const projects = [
  {
    id: 1,
    title: 'PBOS 스마트 파킹 관리 시스템',
    category: 'IoT',
    period: '2024.04 ~ 2024.09',
    team: '3명',
    role: '백엔드 담당',
    description: 'Dart 기반 주차장 관리자 프로그램 백엔드 제작 및 RS485 통신을 통한 IoT 장비 연결 구현',
    longDescription: `
      주차장 관리를 위한 스마트 파킹 시스템의 백엔드를 담당하여 개발했습니다. 
      Dart와 SQLite, ws4sqlite를 활용하여 관리자 웹 서버를 제작하고, 
      RS485 시리얼 통신을 통해 IoT 장비와의 안정적인 연결을 구현했습니다.
    `,
    technologies: ['Dart', 'SQLite', 'ws4sqlite', 'RS485', 'IoT'],
    achievements: [
      '세종시청, 창업진흥원 등 공공기관 납품',
      '실시간 주차 현황 모니터링 시스템 구축',
      '안정적인 IoT 장비 통신 프로토콜 구현',
    ],
    challenges: [
      'RS485 통신의 안정성 확보',
      '실시간 데이터 처리 최적화',
      '다양한 주차장 환경에 대한 호환성',
    ],
    results: [
      '공공기관 다수 납품 성공',
      '24시간 무중단 서비스 운영',
      '장애율 1% 이하 달성',
    ],
    mainImage: '/images/projects/pbos/main.png',
    images: [
      { src: '/images/projects/pbos/main.png', alt: 'PBOS 메인 대시보드' },
      { src: '/images/projects/pbos/monitoring.png', alt: '실시간 모니터링 화면' },
    ],
  },
  {
    id: 2,
    title: '주차장 영상 처리 AI 시스템',
    category: 'AI',
    period: '2024.04 ~ 2024.09',
    team: '3명',
    role: '영상 처리 AI 튜닝 담당',
    description: 'YOLOv8과 DeepStream을 활용한 주차장 영상 분석 AI 모델 개발 및 최적화',
    longDescription: `
      YOLOv8을 기반으로 주차 현황을 실시간으로 파악하는 AI 모델을 개발하고 유지보수했습니다. 
      DeepStream 파이프라인을 통해 실시간 영상 분석을 구현하고, 
      각 주차장별 특성에 맞는 파인튜닝을 통해 높은 정확도를 달성했습니다.
    `,
    technologies: ['YOLOv8', 'DeepStream', 'OpenCV', 'Python', 'NVIDIA GPU'],
    achievements: [
      'mAP 95% 이상의 높은 정확도 달성',
      '오탐률 1% 미만으로 감소',
      '40~230개 구역까지 확장 가능한 모델',
    ],
    challenges: [
      '다양한 조명 환경에서의 정확도 유지',
      '실시간 처리 성능 최적화',
      '주차장별 특성에 맞는 모델 튜닝',
    ],
    results: [
      'Base 모델 + 개별 파인튜닝 방식 확립',
      '실시간 영상 분석 파이프라인 구축',
      '높은 정확도로 상용 서비스 적용',
    ],
    mainImage: '/images/projects/ai-parking/detection.png',
    images: [
      { src: '/images/projects/ai-parking/detection.png', alt: 'YOLO 객체 탐지 결과' },
      { src: '/images/projects/ai-parking/training.png', alt: '모델 학습 결과 그래프' },
    ],
  },
  {
    id: 3,
    title: '모니터링 및 자동화 시스템',
    category: 'DevOps',
    period: '2024.09 ~ 현재',
    team: '1명',
    role: '기획, 개발, 운영 전담',
    description: '서버 및 네트워크 모니터링과 백업 자동화를 위한 통합 관리 시스템',
    longDescription: `
      사내 프로젝트의 안정적인 운영을 위한 종합 모니터링 시스템을 개발했습니다. 
      Flutter와 Dart를 활용하여 비개발자도 쉽게 운영할 수 있는 모듈화된 시스템을 구축하고, 
      Linux 기반 자동화 및 백업 시스템을 통해 장애 대응 시간을 40% 단축했습니다.
    `,
    technologies: ['Flutter', 'Dart', 'Linux', 'systemd', 'crontab', 'PostgreSQL'],
    achievements: [
      '장애 대응 시간 40% 단축',
      '24시간 실시간 모니터링 시스템',
      '비개발자 운영 가능한 UI 구축',
    ],
    challenges: [
      '다양한 시스템 통합 모니터링',
      '자동화 스크립트 안정성 확보',
      '사용자 친화적 인터페이스 설계',
    ],
    results: [
      '무중단 모니터링 서비스 구축',
      '자동 백업 시스템으로 데이터 안전성 확보',
      '모듈화된 구조로 확장성 제공',
    ],
    mainImage: '/images/projects/monitoring/dashboard.png',
    images: [
      { src: '/images/projects/monitoring/dashboard.png', alt: '시스템 모니터링 대시보드' },
    ],
  }
];

const categories = ['전체', 'IoT', 'AI', 'DevOps'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === '전체' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-secondary/10">
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
            <h2 className="text-gradient mb-4">프로젝트</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              IoT, AI, 모니터링 시스템 등 다양한 분야에서 실무 프로젝트를 수행하며 
              안정적이고 확장 가능한 솔루션을 구축했습니다.
            </p>
          </motion.div>

          {/* 카테고리 필터 */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex gap-2 p-1 bg-secondary/30 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* 프로젝트 그리드 */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  variant="elevated" 
                  hover="lift" 
                  interactive
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* 프로젝트 이미지 */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.mainImage}
                      alt={`${project.title} 스크린샷`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    {/* 카테고리와 기간 */}
                    <div className="flex justify-between items-start">
                      <Badge variant="primary">{project.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {project.period}
                      </span>
                    </div>

                    {/* 제목과 역할 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {project.role}
                      </p>
                    </div>

                    {/* 설명 */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    {/* 기술 스택 */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="badge-base badge-secondary text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="badge-base badge-outline text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* 주요 성과 */}
                    <div className="pt-2 border-t">
                      <h5 className="text-sm font-semibold mb-2">주요 성과</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 프로젝트 상세 모달 (간단한 버전) */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background border rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>기간: {project.period}</span>
                            <span>팀: {project.team}</span>
                            <span>역할: {project.role}</span>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => setSelectedProject(null)}
                        >
                          ✕
                        </Button>
                      </div>

                      <div className="space-y-6">
                        {/* 프로젝트 이미지들 */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>

                        {/* 상세 설명 */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">프로젝트 개요</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {project.longDescription}
                          </p>
                        </div>

                        {/* 기술 스택 */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">사용 기술</h4>
                          <div className="flex flex-wrap gap-2">
                                                  {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* 성과 및 도전과제 */}
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-success">
                              주요 성과
                            </h4>
                            <ul className="space-y-2">
                              {project.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-success mt-1">✓</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-warning">
                              도전과제
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-warning mt-1">⚡</span>
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-primary">
                              결과 및 영향
                            </h4>
                            <ul className="space-y-2">
                              {project.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">🎯</span>
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}

          {/* 추가 프로젝트 안내 */}
          <motion.div variants={itemVariants}>
            <Card variant="glass" className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">🚀 더 많은 프로젝트</h3>
              <p className="text-muted-foreground mb-6">
                지속적으로 새로운 프로젝트를 진행하고 있습니다. 
                더 자세한 내용은 GitHub에서 확인하실 수 있습니다.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/user941211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub 보기
                  </a>
                </Button>
                <Button variant="default" asChild>
                  <a 
                    href="https://user941211.github.io/portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    기존 포트폴리오
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 