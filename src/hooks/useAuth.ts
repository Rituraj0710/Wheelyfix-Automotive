import { useState, useEffect } from 'react';
import { authService } from '@/services/authService';

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user fields as needed
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.getProfile();
        if (response.data) {
          setUser(response.data.user);
        }
      } catch (err) {
        setError('Not authenticated');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      if (response.data) {
        setUser(response.data.user);
        // Store token in localStorage or httpOnly cookie
        localStorage.setItem('token', response.data.token);
        return { success: true };
      } else {
        throw new Error(response.error || 'Login failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      return { success: false, error: err instanceof Error ? err.message : 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: { name: string; email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.register(userData);
      if (response.data) {
        return { success: true };
      } else {
        throw new Error(response.error || 'Registration failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      return { success: false, error: err instanceof Error ? err.message : 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await authService.logout();
      setUser(null);
      localStorage.removeItem('token');
      return { success: true };
    } catch (err) {
      setError('Failed to sign out');
      return { success: false, error: 'Failed to sign out' };
    }
  };

  return { user, loading, error, login, register, signOut };
}