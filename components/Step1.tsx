'use client';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicInfoSchema, BasicInfoValues } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface Step1Props {
  data: Partial<BasicInfoValues>;
  updateData: (data: Partial<BasicInfoValues>) => void;
  onNext: () => void;
}

export function Step1({ data, updateData, onNext }: Step1Props) {
  const form = useForm<BasicInfoValues>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
    },
  });

  // Reset form values when data prop changes
  useEffect(() => {
    form.reset({
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
    });
  }, [data, form]);
  
  const onSubmit = (values: BasicInfoValues) => {
    updateData(values);
    onNext();
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Basic Information</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please enter the user's personal information.
          </p>
        </div>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">
          Continue to Address
        </Button>
      </form>
    </Form>
  );
}