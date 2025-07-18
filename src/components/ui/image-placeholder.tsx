import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  text?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'profile' | 'project' | 'award' | 'tech';
}

const ImagePlaceholder = React.forwardRef<HTMLDivElement, ImagePlaceholderProps>(
  ({ 
    className, 
    width = '100%', 
    height = '200px', 
    text,
    icon,
    variant = 'default',
    style,
    ...props 
  }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'profile':
          return 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-dashed border-primary/30';
        case 'project':
          return 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-dashed border-blue-500/30';
        case 'award':
          return 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-dashed border-yellow-500/30';
        case 'tech':
          return 'bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-dashed border-green-500/30';
        default:
          return 'bg-gradient-to-br from-gray-500/20 to-gray-600/20 border-2 border-dashed border-gray-500/30';
      }
    };

    const getDefaultText = () => {
      switch (variant) {
        case 'profile':
          return '프로필 사진';
        case 'project':
          return '프로젝트 이미지';
        case 'award':
          return '수상 이미지';
        case 'tech':
          return '기술 아이콘';
        default:
          return '이미지';
      }
    };

    const getDefaultIcon = () => {
      if (icon) return icon;
      
      switch (variant) {
        case 'profile':
          return (
            <svg className="w-8 h-8 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          );
        case 'project':
          return (
            <svg className="w-8 h-8 text-blue-500/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          );
        case 'award':
          return (
            <svg className="w-8 h-8 text-yellow-500/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          );
        case 'tech':
          return (
            <svg className="w-8 h-8 text-green-500/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          );
        default:
          return (
            <svg className="w-8 h-8 text-gray-500/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          );
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex-center flex-col rounded-lg transition-all duration-200 hover:opacity-80',
          getVariantStyles(),
          className
        )}
        style={{
          width,
          height,
          minHeight: '120px',
          ...style,
        }}
        {...props}
      >
        {getDefaultIcon()}
        <span className="mt-2 text-sm font-medium text-muted-foreground">
          {text || getDefaultText()}
        </span>
        <span className="mt-1 text-xs text-muted-foreground/70">
          {variant === 'profile' && '고화질 프로필 사진 필요'}
          {variant === 'project' && '프로젝트 스크린샷 필요'}
          {variant === 'award' && '수상 사진 필요'}
          {variant === 'tech' && '기술 아이콘 필요'}
          {variant === 'default' && '이미지 필요'}
        </span>
      </div>
    );
  }
);

ImagePlaceholder.displayName = 'ImagePlaceholder';

export { ImagePlaceholder }; 