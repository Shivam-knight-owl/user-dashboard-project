import { getLocalUsers } from './localStorage';

// User type definition based on JSONPlaceholder API
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

/**
 * Fetches users from the JSONPlaceholder API and combines with locally stored users
 */
export async function getUsers(): Promise<User[]> {
  try {
    // Fetch external users from API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const externalUsers: User[] = await response.json();
    
    // Get locally stored users
    const localUsers = getLocalUsers();
    
    // Convert local users to the same format as external users
    const formattedLocalUsers: User[] = localUsers.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: {
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));
    
    // Combine external and local users (local users first to show them at the top)
    return [...formattedLocalUsers, ...externalUsers];
  } catch (error) {
    console.error('Error fetching users:', error);
    
    // If external API fails, at least return local users
    const localUsers = getLocalUsers();
    return localUsers.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: {
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));
  }
}