'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { saveFormData, getFormData, clearFormData, saveUser } from '@/lib/localStorage';
import { UserFormValues } from '@/lib/validation';
import { Step1 } from '@/components/Step1';
import { Step2 } from '@/components/Step2';
import { Step3 } from '@/components/Step3';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserFormValues>>({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = getFormData();
    if (savedData) {
      setFormData(savedData);
    }
    setIsLoading(false);
  }, []);
  
  const updateFormData = (data: Partial<UserFormValues>) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    saveFormData(updatedData);
  };
  
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const handleSubmit = () => {
    try {
      // Validate that we have all required data
      if (!formData.name || !formData.email || !formData.phone || 
          !formData.street || !formData.city || !formData.zipcode) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Save the user to localStorage
      const savedUser = saveUser(formData as UserFormValues);
      console.log('User saved:', savedUser);
      
      toast.success('User successfully added!');
      
      // Clear form data
      setFormData({});
      clearFormData();
      
      // Redirect to dashboard after 0.1 seconds
      setTimeout(() => {
        router.push('/dashboard');
      }, 100);
    } catch (error) {
      console.error('Error saving user:', error);
      toast.error('Failed to save user. Please try again.');
    }
  };
  
  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-medium ${
                      currentStep >= step 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300 bg-transparent'
                    }`}
                  >
                    {step}
                  </div>
                  <span 
                    className={`mt-2 text-xs font-medium ${
                      currentStep >= step 
                        ? 'text-primary' 
                        : 'text-gray-500'
                    }`}
                  >
                    {step === 1 ? 'Basic Info' : step === 2 ? 'Address' : 'Review'}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded dark:bg-gray-700"></div>
              <motion.div 
                className="absolute top-0 left-0 h-2 bg-primary rounded"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-950 dark:border dark:border-gray-800"
            >
              {currentStep === 1 && (
                <Step1 
                  data={formData} 
                  updateData={updateFormData} 
                  onNext={nextStep} 
                />
              )}
              
              {currentStep === 2 && (
                <Step2 
                  data={formData} 
                  updateData={updateFormData} 
                  onNext={nextStep} 
                  onPrev={prevStep}
                />
              )}
              
              {currentStep === 3 && (
                <Step3 
                  data={formData} 
                  onSubmit={handleSubmit} 
                  onPrev={prevStep}
                />
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => router.push('/dashboard')}
              className="w-full"
            >
              Back to Dashboard
            </Button>
          </div>
        </>
      )}
    </div>
  );
}