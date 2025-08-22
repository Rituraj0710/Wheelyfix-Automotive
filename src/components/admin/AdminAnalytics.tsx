import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface UserItem { _id: string }
interface BookingItem { _id: string; serviceType: string; createdAt: string }
interface PaymentItem { _id: string; status: 'created' | 'paid' | 'failed'; amount: number; currency: string; createdAt: string }
interface ServiceItem { _id: string; isActive: boolean }

const AdminAnalytics = () => {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [payments, setPayments] = useState<PaymentItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchAll = async () => {
    try {
      const [u, b, p, s] = await Promise.all([
        api.get<UserItem[]>('/users'),
        api.get<BookingItem[]>('/bookings'),
        api.get<PaymentItem[]>('/payments'),
        api.get<ServiceItem[]>('/services'),
      ]);
      if (u.error || b.error || p.error || s.error) throw new Error('Failed to load analytics data');
      setUsers(u.data || []);
      setBookings(b.data || []);
      setPayments(p.data || []);
      setServices(s.data || []);
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Failed to load analytics', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totals = useMemo(() => {
    const totalUsers = users.length;
    const totalBookings = bookings.length;
    const totalPayments = payments.length;
    const totalPaidAmount = payments
      .filter(p => p.status === 'paid')
      .reduce((sum, p) => sum + (p.amount || 0), 0);
    return { totalUsers, totalBookings, totalPayments, totalPaidAmount };
  }, [users, bookings, payments]);

  const activeServices = useMemo(() => services.filter(s => (s as any).isActive !== false).length, [services]);

  const revenueSeries = useMemo(() => {
    // last 14 days series
    const days = 14;
    const map: Record<string, number> = {};
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      map[key] = 0;
    }
    payments.filter(p => p.status === 'paid').forEach(p => {
      const key = new Date(p.createdAt).toISOString().slice(0, 10);
      if (map[key] !== undefined) {
        map[key] += (p.amount || 0) / 100;
      }
    });
    return Object.entries(map).map(([date, revenue]) => ({ date: date.slice(5), revenue }));
  }, [payments]);

  const topServices = useMemo(() => {
    const counts: Record<string, number> = {};
    bookings.forEach(b => {
      counts[b.serviceType] = (counts[b.serviceType] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([service, count]) => ({ service, count }));
  }, [bookings]);

  if (loading) {
    return <div className="flex items-center justify-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.totalUsers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.totalBookings}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.totalPayments}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Revenue (INR)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totals.totalPaidAmount / 100)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeServices}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Revenue last 14 days</CardTitle>
          <Button variant="outline" size="sm" onClick={fetchAll}>Refresh</Button>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueSeries} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top services by bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {topServices.length === 0 ? (
            <div className="text-muted-foreground">No data yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {topServices.map((t) => (
                <div key={t.service} className="flex items-center justify-between rounded-md border p-3">
                  <div className="font-medium">{t.service}</div>
                  <Badge variant="secondary">{t.count}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;


