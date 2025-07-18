'use client';

import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  ProjectCard,
  SkillCard,
  Badge, 
  Avatar, 
  Progress,
  Skeleton,
  SkeletonCard,
  ImagePlaceholder
} from '@/components/ui';

export default function TestPage() {
  return (
    <div className="container-xl section-padding space-y-12">
      {/* 제목 */}
      <div className="text-center">
        <h1 className="text-gradient mb-4">UI 컴포넌트 테스트</h1>
        <p className="text-muted-foreground">새로 만든 모든 컴포넌트들을 테스트합니다</p>
      </div>

      {/* 버튼 테스트 */}
      <section>
        <h2 className="mb-6">버튼 컴포넌트</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Button variant="default">기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">외곽선</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="gradient">그라디언트</Button>
          <Button variant="glow">글로우</Button>
          <Button variant="success">성공</Button>
          <Button variant="warning">경고</Button>
          <Button variant="info">정보</Button>
          <Button variant="glass">글래스</Button>
          <Button variant="destructive">삭제</Button>
          <Button variant="link">링크</Button>
        </div>
        
        <div className="mt-6 flex gap-4">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">기본</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
          <Button size="icon">🚀</Button>
          <Button size="icon-sm">✨</Button>
          <Button size="icon-lg">🎯</Button>
        </div>
      </section>

      {/* 뱃지 테스트 */}
      <section>
        <h2 className="mb-6">뱃지 컴포넌트</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">프라이머리</Badge>
          <Badge variant="secondary">세컨더리</Badge>
          <Badge variant="success">성공</Badge>
          <Badge variant="warning">경고</Badge>
          <Badge variant="error">에러</Badge>
          <Badge variant="outline">외곽선</Badge>
        </div>
      </section>

      {/* 아바타 테스트 */}
      <section>
        <h2 className="mb-6">아바타 컴포넌트</h2>
        <div className="flex items-center gap-4">
          <Avatar size="sm" fallback="변" />
          <Avatar size="md" fallback="재" />
          <Avatar size="lg" fallback="성" />
          <Avatar size="xl" fallback="JS" />
          <Avatar size="2xl" fallback="개발" />
        </div>
      </section>

      {/* 프로그레스 테스트 */}
      <section>
        <h2 className="mb-6">프로그레스 바</h2>
        <div className="space-y-4">
          <Progress value={20} showPercentage animated />
          <Progress value={60} showPercentage animated />
          <Progress value={85} showPercentage animated />
          <Progress value={100} showPercentage animated />
        </div>
      </section>

      {/* 카드 테스트 */}
      <section>
        <h2 className="mb-6">카드 컴포넌트</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default" hover="lift">
            <CardHeader>
              <CardTitle>기본 카드</CardTitle>
              <CardDescription>기본 스타일의 카드입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <p>카드 내용이 여기에 들어갑니다.</p>
            </CardContent>
          </Card>

          <Card variant="elevated" hover="scale">
            <CardHeader>
              <CardTitle gradient>그라디언트 제목</CardTitle>
              <CardDescription>높이감 있는 카드</CardDescription>
            </CardHeader>
            <CardContent>
              <p>그림자가 더 강한 카드입니다.</p>
            </CardContent>
          </Card>

          <Card variant="glass" hover="glow">
            <CardHeader>
              <CardTitle>글래스 카드</CardTitle>
              <CardDescription>글래스모피즘 효과</CardDescription>
            </CardHeader>
            <CardContent>
              <p>투명한 글래스 효과가 적용된 카드입니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 특별 카드 테스트 */}
      <section>
        <h2 className="mb-6">특별 카드들</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="프로젝트 카드 예시"
            description="프로젝트 설명이 여기에 들어갑니다. 이 카드는 포트폴리오 프로젝트 표시용입니다."
            tags={['React', 'Next.js', 'TypeScript', 'Tailwind']}
            links={[
              { label: '라이브 데모', href: '#' },
              { label: 'GitHub', href: '#' }
            ]}
          />

          <SkillCard
            name="JavaScript"
            level={90}
            description="프론트엔드 및 백엔드 개발에 능숙합니다"
            icon="🚀"
          />
        </div>
      </section>

      {/* 이미지 플레이스홀더 테스트 */}
      <section>
        <h2 className="mb-6">이미지 플레이스홀더</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImagePlaceholder 
            variant="profile" 
            height="200px"
          />
          <ImagePlaceholder 
            variant="project" 
            height="200px"
          />
          <ImagePlaceholder 
            variant="award" 
            height="200px"
          />
          <ImagePlaceholder 
            variant="tech" 
            height="200px"
          />
        </div>
      </section>

      {/* 스켈레톤 테스트 */}
      <section>
        <h2 className="mb-6">스켈레톤 로딩</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SkeletonCard />
          <div className="space-y-4">
            <Skeleton height="40px" />
            <Skeleton height="20px" width="80%" />
            <Skeleton height="20px" width="60%" />
            <div className="flex space-x-2">
              <Skeleton circle width="40px" height="40px" />
              <div className="flex-1 space-y-2">
                <Skeleton height="16px" />
                <Skeleton height="16px" width="70%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 유틸리티 클래스 테스트 */}
      <section>
        <h2 className="mb-6">유틸리티 클래스</h2>
        <div className="space-y-4">
          <div className="glass p-6 rounded-lg">
            <p>글래스모피즘 효과가 적용된 영역입니다.</p>
          </div>
          
          <div className="bg-grid p-6 rounded-lg">
            <p>그리드 배경 패턴이 적용된 영역입니다.</p>
          </div>
          
          <div className="bg-dots p-6 rounded-lg">
            <p>도트 패턴 배경이 적용된 영역입니다.</p>
          </div>
          
          <div className="bg-gradient-primary p-6 rounded-lg text-white">
            <p>프라이머리 그라디언트 배경입니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 