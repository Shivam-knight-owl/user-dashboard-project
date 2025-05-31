'use client';

import { Header } from '@/components/Header';
import { StepForm } from '@/components/StepForm';

export default function AddUserPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Add New User
        </h1>
        
        <StepForm />
      </main>
    </div>
  );
}