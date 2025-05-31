'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUsers, User } from '@/lib/api';
import { Header } from '@/components/Header';
import { UserCard } from '@/components/UserCard';
import { Loader } from '@/components/Loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      setError('Failed to load users. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
    
    // Refresh users when the page becomes visible (e.g., when returning from add user page)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchUsers();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredUsers(users);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(
      user => 
        user.name.toLowerCase().includes(query) || 
        user.address.city.toLowerCase().includes(query)
    );
    
    setFilteredUsers(filtered);
  }, [searchQuery, users]);
  
  const handleAddUser = () => {
    router.push('/dashboard/add');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            User Dashboard
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search by name or city"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            
            <Button onClick={handleAddUser} className="whitespace-nowrap">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <Loader size="large" />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-destructive/10 text-destructive p-4 rounded-lg flex items-center justify-center"
            >
              <AlertCircle className="h-5 w-5 mr-2" />
              <p>{error}</p>
            </motion.div>
          ) : (
            <motion.div
              key="users"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredUsers.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 dark:text-gray-400">No users found matching your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredUsers.map((user, index) => (
                    <UserCard key={user.id} user={user} index={index} />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}