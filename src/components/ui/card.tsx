import * as React from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva('card-base', {
  variants: {
    variant: {
      default: '',
      elevated: 'shadow-medium',
      outlined: 'border-2',
      filled: 'bg-secondary/50',
      gradient: 'bg-gradient-primary text-white border-none',
      glass: 'glass',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      default: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
    hover: {
      none: '',
      lift: 'card-hover',
      scale: 'hover-scale-sm',
      glow: 'hover-glow',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'default',
    hover: 'none',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, padding, hover }),
        interactive && 'card-interactive cursor-pointer',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    padding?: 'none' | 'sm' | 'default' | 'lg';
  }
>(({ className, padding = 'default', ...props }, ref) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'p-4 pb-2',
    default: 'p-6 pb-4',
    lg: 'p-8 pb-6',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-1.5',
        paddingMap[padding],
        className
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    size?: 'sm' | 'default' | 'lg' | 'xl';
    gradient?: boolean;
  }
>(({ className, size = 'default', gradient = false, ...props }, ref) => {
  const sizeMap = {
    sm: 'text-lg',
    default: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <h3
      ref={ref}
      className={cn(
        'font-semibold leading-none tracking-tight',
        sizeMap[size],
        gradient && 'text-gradient',
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    size?: 'xs' | 'sm' | 'default';
  }
>(({ className, size = 'default', ...props }, ref) => {
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    default: 'text-base',
  };

  return (
    <p
      ref={ref}
      className={cn(
        'text-muted-foreground',
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    padding?: 'none' | 'sm' | 'default' | 'lg';
  }
>(({ className, padding = 'default', ...props }, ref) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'px-4 pb-4',
    default: 'px-6 pb-6',
    lg: 'px-8 pb-8',
  };

  return (
    <div
      ref={ref}
      className={cn(paddingMap[padding], className)}
      {...props}
    />
  );
});
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    padding?: 'none' | 'sm' | 'default' | 'lg';
    justify?: 'start' | 'center' | 'end' | 'between';
  }
>(({ className, padding = 'default', justify = 'start', ...props }, ref) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'px-4 pb-4',
    default: 'px-6 pb-6',
    lg: 'px-8 pb-8',
  };

  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center',
        paddingMap[padding],
        justifyMap[justify],
        className
      )}
      {...props}
    />
  );
});
CardFooter.displayName = 'CardFooter';

// 특별한 카드 타입들
const ProjectCard = React.forwardRef<
  HTMLDivElement,
  CardProps & {
    image?: string;
    title?: string;
    description?: string;
    tags?: string[];
    links?: { label: string; href: string }[];
  }
>(({ className, image, title, description, tags, links, ...props }, ref) => (
  <Card
    ref={ref}
    variant="elevated"
    hover="lift"
    interactive
    className={cn('overflow-hidden', className)}
    {...props}
  >
    {image && (
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title || 'Project image'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    )}
    <CardContent>
      {title && <CardTitle size="lg">{title}</CardTitle>}
      {description && (
        <CardDescription className="mt-2">{description}</CardDescription>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge-base badge-secondary text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="mt-4 flex gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-primary hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
));
ProjectCard.displayName = 'ProjectCard';

const SkillCard = React.forwardRef<
  HTMLDivElement,
  CardProps & {
    icon?: React.ReactNode;
    name?: string;
    level?: number;
    description?: string;
  }
>(({ className, icon, name, level, description, ...props }, ref) => (
  <Card
    ref={ref}
    variant="outlined"
    hover="lift"
    className={cn('text-center', className)}
    {...props}
  >
    <CardContent>
      {icon && (
        <div className="mb-4 flex justify-center text-4xl text-primary">
          {icon}
        </div>
      )}
      {name && <CardTitle size="default">{name}</CardTitle>}
      {level && (
        <div className="mt-2">
          <div className="progress-base h-2">
            <div
              className="progress-indicator h-full bg-primary"
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="mt-1 text-xs text-muted-foreground">
            {level}%
          </span>
        </div>
      )}
      {description && (
        <CardDescription className="mt-2 text-xs">
          {description}
        </CardDescription>
      )}
    </CardContent>
  </Card>
));
SkillCard.displayName = 'SkillCard';

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  ProjectCard,
  SkillCard,
  cardVariants
}; 
