import { useState } from 'react';
import { testBackendConnection } from '@/utils/testConnection';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TestResult {
  success?: boolean;
  message?: string;
  timestamp?: string;
  error?: string;
  status?: number;
}

const TestConnection = () => {
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTestConnection = async () => {
    setLoading(true);
    try {
      const result = await testBackendConnection();
      setTestResult(result.data || { error: result.error, status: result.status });
    } catch (error) {
      setTestResult({ 
        error: error instanceof Error ? error.message : 'Unknown error', 
        success: false 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Backend Connection Test</h2>
      
      <Button 
        onClick={handleTestConnection} 
        disabled={loading}
        className="mb-4"
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </Button>

      {testResult && (
        <Alert variant={testResult.success ? "default" : "destructive"}>
          <AlertTitle>
            {testResult.success ? 'Connection Successful' : 'Connection Failed'}
          </AlertTitle>
          <AlertDescription>
            <div className="mt-2">
              {testResult.message && (
                <p><strong>Message:</strong> {testResult.message}</p>
              )}
              {testResult.timestamp && (
                <p><strong>Timestamp:</strong> {testResult.timestamp}</p>
              )}
              {testResult.error && (
                <p><strong>Error:</strong> {testResult.error}</p>
              )}
              {testResult.status && (
                <p><strong>Status:</strong> {testResult.status}</p>
              )}
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TestConnection;