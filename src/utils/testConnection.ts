import { api } from '@/lib/api';

/**
 * Test function to check if the frontend can connect to the backend
 */
export const testBackendConnection = async () => {
  try {
    // Make a simple request to the backend
    const response = await api.get('/users/test-connection');
    
    console.log('Backend connection test result:', response);
    return response;
  } catch (error) {
    console.error('Backend connection test failed:', error);
    throw error;
  }
};