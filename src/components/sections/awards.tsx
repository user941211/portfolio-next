'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components/ui';

const awards = [
  {
    id: 1,
    title: '공기업 대학생 스타트업 챌린지',
    rank: '대상',
    organization: '한국가스공사',
    date: '2023.09',
    prize: '600만원',
    description: '대구경북지방중소벤처기업청장상을 수상하며 스타트업 아이디어의 우수성을 인정받았습니다.',
    details: [
      '대구경북 스타트업 페스티벌에서 최고 등급 수상',
      '혁신적인 스타트업 아이디어로 심사위원 만장일치',
      '상금 600만원과 함께 사업화 지원 혜택 제공',
    ],
    skills: ['기획', '발표', '팀워크', '혁신'],
    image: '/images/awards/startup-challenge.jpg',
    category: 'competition',
  },
  {
    id: 2,
    title: '한국디지털콘텐츠학회 추계 학술대회',
    rank: '은상',
    organization: '한국디지털콘텐츠학회',
    date: '2023.11.10',
    prize: '학술상',
    description: 'AI 기반 IoT 웨어러블 기기 연구로 학술적 우수성을 인정받았습니다.',
    details: [
      '논문 제목: "BlueCore: 창작장애인을 위한 AI 기반 위험 소리 감지 IoT 웨어러블 기기"',
      '창작장애인을 위한 혁신적인 기술 솔루션 제안',
      '학회장 김영철 회장으로부터 직접 시상',
    ],
    skills: ['연구', '논문작성', 'AI', 'IoT'],
    image: '/images/awards/digital-contents.jpg',
    category: 'academic',
  },
];

const certifications = [
  {
    id: 1,
    name: '정보처리기사',
    organization: '한국산업인력공단',
    date: '2024.06',
    status: '최종합격',
    description: '소프트웨어 개발 및 데이터베이스 구축에 관한 전문 지식 보유',
    category: 'technical',
  },
  {
    id: 2,
    name: 'OPIC',
    organization: 'ACTFL',
    date: '2025.02',
    status: 'Advanced Low급',
    description: '일본어 구사 능력 인증',
    category: 'language',
  },
  {
    id: 3,
    name: '1종보통운전면허',
    organization: '경찰청(운전면허시험관리단)',
    date: '2016.11',
    status: '최종합격',
    description: '안전운전 능력 보유',
    category: 'etc',
  },
];

const experiences = [
  {
    id: 1,
    title: 'Tohoku University 국제 워크샵',
    event: 'The 20th International Workshop on Emerging ICT',
    location: '일본 토호쿠 대학교',
    date: '2023.11',
    role: '대표 발표자',
    description: '졸업작품이 학교 대표로 선정되어 한중일 3개국 국제 워크샵에서 발표',
    presentation: 'Development of a Data-Driven Web Platform for Novice Investors: Enabling Informed Stock Investment Decisions',
    skills: ['영어발표', '국제협력', '연구발표'],
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

export default function AwardsSection() {
  return (
    <section id="awards" className="section-padding bg-secondary/20">
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
            <h2 className="text-gradient mb-4">수상 및 자격</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              다양한 분야에서의 성과와 전문성을 인정받은 수상 이력과 
              보유한 자격증을 소개합니다.
            </p>
          </motion.div>

          {/* 주요 수상 */}
          <div className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center">
              🏆 주요 수상 이력
            </motion.h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {awards.map((award) => (
                <motion.div
                  key={award.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card variant="elevated" hover="lift" className="overflow-hidden h-full">
                    {/* 수상 사진 */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={award.image}
                        alt={`${award.title} 수상 사진`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      {/* 수상 정보 헤더 */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={award.rank === '대상' ? 'success' : 'warning'}
                              className="font-semibold"
                            >
                              {award.rank}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {award.date}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold">{award.title}</h4>
                          <p className="text-sm text-primary font-medium">
                            {award.organization}
                          </p>
                        </div>
                        {award.prize && (
                          <div className="text-right">
                            <div className="text-lg font-bold text-success">
                              {award.prize}
                            </div>
                            <div className="text-xs text-muted-foreground">상금</div>
                          </div>
                        )}
                      </div>

                      {/* 설명 */}
                      <p className="text-sm text-muted-foreground">
                        {award.description}
                      </p>

                      {/* 상세 내용 */}
                      <div>
                        <h5 className="text-sm font-semibold mb-2">상세 내용</h5>
                        <ul className="space-y-1">
                          {award.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 관련 스킬 */}
                      <div className="flex flex-wrap gap-1 pt-2 border-t">
                        {award.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="badge-base badge-secondary text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 국제 경험 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              🌏 국제 경험
            </h3>
            
            {experiences.map((experience) => (
              <Card key={experience.id} variant="gradient" className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-white">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{experience.title}</h4>
                    <p className="text-white/90 text-sm mb-2">{experience.event}</p>
                    <div className="space-y-1 text-sm text-white/80">
                      <p>📍 {experience.location}</p>
                      <p>📅 {experience.date}</p>
                      <p>👤 {experience.role}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-white/90 mb-4">{experience.description}</p>
                    
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold mb-2">발표 주제</h5>
                      <p className="text-sm text-white/90 italic">
                        &ldquo;{experience.presentation}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="badge-base bg-white/20 text-white text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* 자격증 및 면허 */}
          <div className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center">
              📜 자격증 및 면허
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={itemVariants}>
                  <Card variant="outlined" hover="lift" className="p-6 h-full">
                    <div className="space-y-4">
                      {/* 자격증 헤더 */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.organization}
                          </p>
                        </div>
                        <Badge 
                          variant={cert.category === 'technical' ? 'primary' : 
                                  cert.category === 'language' ? 'success' : 'secondary'}
                        >
                          {cert.status}
                        </Badge>
                      </div>

                      {/* 취득일 */}
                      <div className="text-sm text-muted-foreground">
                        📅 취득일: {cert.date}
                      </div>

                      {/* 설명 */}
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>

                      {/* 카테고리 표시 */}
                      <div className="pt-2 border-t">
                        <span className={`text-xs font-medium ${
                          cert.category === 'technical' ? 'text-primary' :
                          cert.category === 'language' ? 'text-success' : 'text-secondary'
                        }`}>
                          {cert.category === 'technical' ? '🔧 기술 자격증' :
                           cert.category === 'language' ? '🌐 어학 능력' : '📋 기타'}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 추가 성과 통계 */}
          <motion.div variants={itemVariants}>
            <Card variant="filled" className="p-8">
              <h3 className="text-xl font-semibold text-center mb-6">
                📊 성과 요약
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">수상 횟수</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">600만원</div>
                  <div className="text-sm text-muted-foreground">총 상금</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">3</div>
                  <div className="text-sm text-muted-foreground">보유 자격증</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-2">1</div>
                  <div className="text-sm text-muted-foreground">국제 발표</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
