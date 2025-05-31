'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Users, Plus } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              User Manager
            </h1>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === "/dashboard" 
                  ? "bg-primary/10 text-primary dark:bg-primary/20" 
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              )}
            >
              Dashboard
            </Link>
            
            <Link
              href="/dashboard/add"
              className={cn(
                "inline-flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === "/dashboard/add" 
                  ? "bg-primary/10 text-primary dark:bg-primary/20" 
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              )}
            >
              <Plus className="h-4 w-4" />
              <span>Add User</span>
            </Link>
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}