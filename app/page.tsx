import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-5xl px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-primary/10 text-primary">
          <Users className="h-10 w-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          User Management Dashboard
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          A modern dashboard for managing users with an intuitive multi-step form process
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              <span>View Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          
          <Link href="/dashboard/add">
            <Button size="lg" variant="outline" className="gap-2">
              <span>Add New User</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}