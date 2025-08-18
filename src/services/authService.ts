import { api } from '@/lib/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    this.setTokens(response.token, response.refreshToken);
    return response;
  },

  async register(userData: { name: string; email: string; password: string }): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    this.setTokens(response.token, response.refreshToken);
    return response;
  },

  async getProfile(): Promise<User> {
    return api.get<User>('/auth/profile');
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout', {});
    } finally {
      this.clearTokens();
    }
  },

  async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    const response = await api.post<{ token: string; refreshToken: string }>('/auth/refresh-token', { refreshToken });
    this.setTokens(response.token, response.refreshToken);
    return response;
  },

  setTokens(token: string, refreshToken: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  },

  clearTokens(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },

  getStoredToken(): string | null {
    return localStorage.getItem('token');
  },

  getStoredRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  },
};
