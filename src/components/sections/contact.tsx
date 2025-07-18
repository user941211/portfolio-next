'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Input } from '@/components/ui';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const contactInfo = [
    {
      icon: '📧',
      label: '이메일',
      value: 'common941211@gmail.com',
      link: 'mailto:common941211@gmail.com',
    },
    {
      icon: '📱',
      label: '연락처',
      value: '010-0000-0000',
      link: 'tel:010-0000-0000',
    },
    {
      icon: '🏢',
      label: '소속',
      value: '신라이앤씨 연구소',
      link: null,
    },
    {
      icon: '📍',
      label: '위치',
      value: '대구, 대한민국',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: '🔗',
      label: 'GitHub',
      url: 'https://github.com/user941211',
    },

    {
      icon: '📝',
      label: '블로그',
      url: '#',
    },
    {
      icon: '📄',
      label: '이력서',
      url: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* 헤더 */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="heading-2 mb-4">
                <span className="text-gradient">연락하기</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                새로운 기회나 협업에 대해 언제든 연락주세요. 
                48시간 내에 답변드리겠습니다.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">연락처 정보</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 소셜 링크 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">소셜 링크</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-card border hover:border-primary/50 transition-all duration-200 hover:shadow-md group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <h4 className="font-semibold mb-2">📅 응답 시간</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  보통 24시간 내에 답변드리며, 늦어도 48시간 내에는 연락드립니다.
                </p>
                <h4 className="font-semibold mb-2">💬 선호하는 연락 방법</h4>
                <p className="text-sm text-muted-foreground">
                  이메일을 통한 연락을 선호하며, 급한 경우 전화도 가능합니다.
                </p>
              </div>
            </motion.div>

            {/* 문의 폼 */}
            <motion.div variants={itemVariants}>
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-semibold mb-6">문의하기</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                    ✅ 메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                    ❌ 메시지 전송에 실패했습니다. 이메일로 직접 연락해주세요.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        이름 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="홍길동"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        이메일 *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      제목 *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="문의 제목을 입력해주세요"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="문의 내용을 자세히 작성해주세요..."
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  >
                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 