import { api } from '@/lib/api';

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user fields as needed
}

export const authService = {
  async login(email: string, password: string) {
    return api.post<{ user: User; token: string }>('/users/login', { email, password });
  },

  async register(userData: { name: string; email: string; password: string }) {
    return api.post<{ user: User }>('/users', userData);
  },

  async getProfile() {
    return api.get<{ user: User }>('/users/profile');
  },

  async logout() {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Call the logout endpoint to invalidate the token on the server
    return api.post<{ success: boolean }>('/users/logout', {});
  },
};
