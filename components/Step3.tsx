'use client';

import { UserFormValues } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Step3Props {
  data: Partial<UserFormValues>;
  onSubmit: () => void;
  onPrev: () => void;
}

export function Step3({ data, onSubmit, onPrev }: Step3Props) {
  const reviewItems = [
    { label: 'Full Name', value: data.name || '' },
    { label: 'Email Address', value: data.email || '' },
    { label: 'Phone Number', value: data.phone || '' },
    { label: 'Street Address', value: data.street || '' },
    { label: 'City', value: data.city || '' },
    { label: 'Zip Code', value: data.zipcode || '' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Review Information</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please review the user information before submitting.
        </p>
      </div>
      
      <div className="space-y-4 py-2">
        {reviewItems.map((item, index) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800"
          >
            <span className="font-medium text-gray-500 dark:text-gray-400">
              {item.label}
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onPrev} 
          className="flex-1"
        >
          Back
        </Button>
        <Button 
          type="button" 
          onClick={onSubmit} 
          className="flex-1"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}