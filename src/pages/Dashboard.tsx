import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Car, Clock, FileText, Settings, User } from 'lucide-react';

interface Appointment {
  id: string;
  service: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface Vehicle {
  type: string;
  model: string;
  year: number;
  registrationNumber: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // This is just mock data for demonstration
    setAppointments([
      {
        id: '1',
        service: 'Oil Change',
        date: '2023-06-15T10:00:00',
        status: 'upcoming',
      },
      {
        id: '2',
        service: 'Brake Service',
        date: '2023-05-20T14:30:00',
        status: 'completed',
      },
    ]);

    // Set vehicles if user has any
    if (user?.vehicles) {
      setVehicles(user.vehicles);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Welcome back</CardTitle>
              <CardDescription>{user?.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">{user?.email}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Next Appointment</CardTitle>
              <CardDescription>Upcoming service</CardDescription>
            </CardHeader>
            <CardContent>
              {appointments.filter(a => a.status === 'upcoming').length > 0 ? (
                <div>
                  <div className="flex items-center mb-1">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">
                      {new Date(appointments[0].date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">
                      {new Date(appointments[0].date).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-600">No upcoming appointments</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Vehicles</CardTitle>
              <CardDescription>Your registered vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              {vehicles.length > 0 ? (
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {vehicles.length} vehicle{vehicles.length !== 1 ? 's' : ''} registered
                  </span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">No vehicles registered</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="history">Service History</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>Manage your scheduled services</CardDescription>
              </CardHeader>
              <CardContent>
                {appointments.length > 0 ? (
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex justify-between items-center p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{appointment.service}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(appointment.date).toLocaleDateString()} at{' '}
                            {new Date(appointment.date).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              appointment.status === 'upcoming'
                                ? 'bg-blue-100 text-blue-800'
                                : appointment.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">
                    You don't have any appointments yet.
                  </p>
                )}
                <div className="mt-6">
                  <Button onClick={() => navigate('/booking')} className="w-full">
                    Book New Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Vehicles</CardTitle>
                <CardDescription>Manage your registered vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                {vehicles.length > 0 ? (
                  <div className="space-y-4">
                    {vehicles.map((vehicle, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">
                            {vehicle.year} {vehicle.model}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {vehicle.type} • {vehicle.registrationNumber}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Manage
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">
                    You don't have any vehicles registered yet.
                  </p>
                )}
                <div className="mt-6">
                  <Button className="w-full">Add New Vehicle</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>View your past services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Your service history will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Notification Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;