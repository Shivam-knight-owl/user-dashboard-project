import { UserFormValues } from './validation';

const FORM_STORAGE_KEY = 'user-form-data';

/**
 * Saves form data to localStorage
 */
export function saveFormData(data: Partial<UserFormValues>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existingData = getFormData() || {};
    const updatedData = { ...existingData, ...data };
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error saving form data to localStorage:', error);
  }
}

/**
 * Gets form data from localStorage
 */
export function getFormData(): Partial<UserFormValues> | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const data = localStorage.getItem(FORM_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting form data from localStorage:', error);
    return null;
  }
}

/**
 * Clears form data from localStorage
 */
export function clearFormData(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(FORM_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing form data from localStorage:', error);
  }
}