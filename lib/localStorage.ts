import { UserFormValues } from './validation';

const FORM_STORAGE_KEY = 'user-form-data';
const USERS_STORAGE_KEY = 'local-users';

// User type definition for stored users
export interface StoredUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  createdAt: string;
}

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

/**
 * Saves a new user to local storage
 */
export function saveUser(userData: UserFormValues): StoredUser {
  if (typeof window === 'undefined') throw new Error('localStorage not available');
  
  try {
    const existingUsers = getLocalUsers();
    const newUser: StoredUser = {
      id: Date.now(), // Simple ID generation using timestamp
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: {
        street: userData.street,
        city: userData.city,
        zipcode: userData.zipcode,
      },
      createdAt: new Date().toISOString(),
    };
    
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    
    return newUser;
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
    throw error;
  }
}

/**
 * Gets all locally stored users
 */
export function getLocalUsers(): StoredUser[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting local users from localStorage:', error);
    return [];
  }
}

/**
 * Deletes a locally stored user by ID
 */
export function deleteLocalUser(userId: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existingUsers = getLocalUsers();
    const updatedUsers = existingUsers.filter(user => user.id !== userId);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
  } catch (error) {
    console.error('Error deleting user from localStorage:', error);
  }
}