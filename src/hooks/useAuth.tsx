import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import type { ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';
import { authService } from '@/services/authService';
import type { User } from '@/services/authService';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: { name: string; email: string; password: string }) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkAuth = useCallback(async () => {
    const token = authService.getStoredToken();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const user = await authService.getProfile();
      setUser(user);
    } catch (err) {
      console.error('Auth check failed:', err);
      authService.clearTokens();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    setError(null);
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });
      return { success: true };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Login failed';
      setError(errorMsg);
      toast({
        title: 'Login failed',
        description: errorMsg,
        variant: 'destructive',
      });
      return { success: false, error: errorMsg };
    }
  };

  const register = async (userData: { name: string; email: string; password: string }) => {
    setError(null);
    try {
      const response = await authService.register(userData);
      setUser(response.user);
      toast({
        title: 'Welcome!',
        description: 'Your account has been created successfully.',
      });
      return { success: true };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMsg);
      toast({
        title: 'Registration failed',
        description: errorMsg,
        variant: 'destructive',
      });
      return { success: false, error: errorMsg };
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      toast({
        title: 'Logged out',
        description: 'You have been logged out successfully.',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to log out',
        variant: 'destructive',
      });
    }
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
