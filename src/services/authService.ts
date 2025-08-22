import { api } from '@/lib/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt?: string;
  updatedAt?: string;
  phoneNumber?: string;
  address?: any;
  avatarUrl?: string;
  vehicles?: Array<{
    type?: string;
    model?: string;
    year?: number;
    registrationNumber?: string;
  }>;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const data = await api.post<{
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token: string;
    }>('/users/login', { email, password }).catch((err) => {
      // Normalize error message surfaced to UI
      const message = err?.response?.data?.message || err?.message || 'Login failed';
      throw new Error(message);
    });
    const user: User = {
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.isAdmin ? 'admin' : 'user',
    };

    this.setTokens(data.token, '');
    return { user, token: data.token, refreshToken: '' };
  },

  async register(userData: { name: string; email: string; password: string }): Promise<AuthResponse> {
    const data = await api.post<{
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token: string;
      vehicles?: User['vehicles'];
    }>('/users', userData).catch((err) => {
      const message = err?.response?.data?.message || err?.message || 'Registration failed';
      throw new Error(message);
    });
    const user: User = {
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.isAdmin ? 'admin' : 'user',
      vehicles: data.vehicles,
    };

    this.setTokens(data.token, '');
    return { user, token: data.token, refreshToken: '' };
  },

  async registerFull(userData: {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: { street: string; city: string; state: string; pincode: string };
    vehicles?: User['vehicles'];
  }): Promise<AuthResponse> {
    const data = await api
      .post<{
        _id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        token: string;
        vehicles?: User['vehicles'];
      }>(
        '/users',
        userData
      )
      .catch((err) => {
        const status = err?.response?.status;
        const srv = err?.response?.data?.message || err?.message;
        const message = status === 503
          ? 'Service temporarily unavailable. Please try again shortly.'
          : srv || 'Registration failed';
        throw new Error(message);
      });

    const user: User = {
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.isAdmin ? 'admin' : 'user',
      vehicles: data.vehicles,
    };

    this.setTokens(data.token, '');
    return { user, token: data.token, refreshToken: '' };
  },

  async getProfile(): Promise<User> {
    const data = await api.get<{
      _id: string;
      name: string;
      email: string;
      avatarUrl?: string;
      phoneNumber?: string;
      address?: any;
      vehicles?: User['vehicles'];
      isAdmin: boolean;
    }>('/users/profile');
    return {
      id: data._id,
      name: data.name,
      email: data.email,
      avatarUrl: (data as any).avatarUrl,
      role: data.isAdmin ? 'admin' : 'user',
      vehicles: data.vehicles,
      ...('phoneNumber' in data ? { phoneNumber: (data as any).phoneNumber } : {}),
      ...('address' in data ? { address: (data as any).address } : {}),
    };
  },

  async updateProfile(payload: { name?: string; phoneNumber?: string; address?: any }): Promise<User> {
    const data = await api.put<{
      _id: string;
      name: string;
      email: string;
      avatarUrl?: string;
      phoneNumber?: string;
      address?: any;
      vehicles?: User['vehicles'];
      isAdmin: boolean;
    }>('/users/profile', payload);
    return {
      id: data._id,
      name: data.name,
      email: data.email,
      avatarUrl: (data as any).avatarUrl,
      role: data.isAdmin ? 'admin' : 'user',
      vehicles: data.vehicles,
      ...('phoneNumber' in data ? { phoneNumber: (data as any).phoneNumber } : {}),
      ...('address' in data ? { address: (data as any).address } : {}),
    };
  },

  async uploadAvatar(file: File): Promise<{ avatarUrl: string }> {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await fetch('/api/users/avatar', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.getStoredToken() || ''}`,
      },
      body: formData,
      credentials: 'include',
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.message || 'Upload failed');
    }
    return data;
  },

  async logout(): Promise<void> {
    try {
      await api.post('/users/logout', {});
    } finally {
      this.clearTokens();
    }
  },

  async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    // Not implemented on backend; return existing tokens to satisfy types
    return { token: this.getStoredToken() || '', refreshToken };
  },

  setTokens(token: string, refreshToken: string): void {
    localStorage.setItem('token', token);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
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
