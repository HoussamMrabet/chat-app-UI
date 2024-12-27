import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ 
  size = 'md', 
  className,
  alt = '',
  ...props 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <img
      className={cn(
        'rounded-full object-cover',
        sizeClasses[size],
        className
      )}
      alt={alt}
      {...props}
    />
  );
}