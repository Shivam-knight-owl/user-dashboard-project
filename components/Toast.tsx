'use client';

import { useEffect } from 'react';
import { Toaster } from 'sonner';

export function Toast() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        className: "!bg-white !text-gray-900 dark:!bg-gray-900 dark:!text-gray-100",
        style: {
          border: '1px solid hsl(var(--border))',
          borderRadius: 'var(--radius)',
        },
      }}
    />
  );
}