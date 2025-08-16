// Make sure the API base URL matches the proxy configuration in vite.config.ts
const API_BASE_URL = '/api';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status?: number;
}

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};

export const api = {
  async get<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getAuthHeader(),
          ...options.headers,
        },
        credentials: 'include',
      });

      const data = await response.json().catch(() => ({}));
      
      if (!response.ok) {
        return { 
          error: data.message || `HTTP error! status: ${response.status}`,
          status: response.status 
        };
      }

      return { data, status: response.status };
    } catch (error) {
      return { 
        error: error instanceof Error ? error.message : 'Network error',
        status: 500 
      };
    }
  },

  async post<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getAuthHeader(),
          ...options.headers,
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => ({}));
      
      if (!response.ok) {
        return { 
          error: responseData.message || `HTTP error! status: ${response.status}`,
          status: response.status,
          ...(responseData.error && { error: responseData.error })
        };
      }

      return { data: responseData, status: response.status };
    } catch (error) {
      return { 
        error: error instanceof Error ? error.message : 'Network error',
        status: 500 
      };
    }
  },

  async put<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    return api.post<T>(endpoint, data, { ...options, method: 'PUT' });
  },

  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    return api.post<T>(endpoint, undefined, { ...options, method: 'DELETE' });
  },

  async patch<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    return api.post<T>(endpoint, data, { ...options, method: 'PATCH' });
  },
};
