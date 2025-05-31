'use client';

import { User } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserCardProps {
  user: User;
  index: number;
}

export function UserCard({ user, index }: UserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-slate-900">
        <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-700 pb-4 pt-6">
          <CardTitle className="text-xl font-bold text-white">{user.name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-3">
          <div className="flex items-center text-sm">
            <AtSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-gray-700 dark:text-gray-300">{user.phone}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-gray-700 dark:text-gray-300">{user.address.city}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}