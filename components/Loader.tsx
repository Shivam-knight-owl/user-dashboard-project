'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LoaderProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Loader({ className, size = 'medium' }: LoaderProps) {
  const sizes = {
    small: 'h-4 w-4 border-2',
    medium: 'h-8 w-8 border-3',
    large: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        className={cn(
          "rounded-full border-t-transparent border-primary animate-spin",
          sizes[size],
          className
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export function LoaderOverlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <Loader size="large" />
    </div>
  );
}