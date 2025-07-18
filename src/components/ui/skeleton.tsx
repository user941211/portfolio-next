import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, circle, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'skeleton',
          circle && 'rounded-full',
          className
        )}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// 미리 정의된 스켈레톤 패턴들
const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        height="16px"
        width={i === lines - 1 ? '60%' : '100%'}
      />
    ))}
  </div>
);

const SkeletonCard = () => (
  <div className="card-base p-6">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton circle width="40px" height="40px" />
      <div className="space-y-2 flex-1">
        <Skeleton height="16px" width="40%" />
        <Skeleton height="14px" width="60%" />
      </div>
    </div>
    <SkeletonText lines={3} />
  </div>
);

const SkeletonAvatar = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) => {
  const sizeMap = {
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '64px',
    '2xl': '80px',
  };

  return <Skeleton circle width={sizeMap[size]} height={sizeMap[size]} />;
};

export { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar }; 