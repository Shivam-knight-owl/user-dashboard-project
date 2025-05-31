import * as z from 'zod';

// Basic info validation schema
export const basicInfoSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

// Address validation schema
export const addressSchema = z.object({
  street: z.string().min(3, { message: 'Street must be at least 3 characters' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters' }),
  zipcode: z.string().min(5, { message: 'Please enter a valid zip code' }),
});

// Combined schema for the entire form
export const userFormSchema = z.object({
  ...basicInfoSchema.shape,
  ...addressSchema.shape,
});

export type BasicInfoValues = z.infer<typeof basicInfoSchema>;
export type AddressValues = z.infer<typeof addressSchema>;
export type UserFormValues = z.infer<typeof userFormSchema>;