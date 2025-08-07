import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Wrench, Car, Bike, Settings, Droplets, Sparkles, Shield, Clock, MapPin, Star, Zap, Gauge } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  is_active: boolean;
  price?: string;
  duration?: string;
  color?: string;
  link?: string;
}

const DynamicServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: true });

        if (error) throw error;
        setServices(data || []);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Default services based on Wheelyfix website with diverse colors and links
  const defaultServices: Service[] = [
    {
      id: '1',
      name: 'General Service',
      description: 'Complete vehicle maintenance and inspection',
      icon: 'wrench',
      category: 'Car',
      is_active: true,
      price: '₹999',
      duration: '2-3 hours',
      color: 'orange',
      link: '/services/general-service'
    },
    {
      id: '2',
      name: 'Oil Change Service',
      description: 'Engine oil and filter replacement',
      icon: 'oil',
      category: 'Car',
      is_active: true,
      price: '₹599',
      duration: '1 hour',
      color: 'green',
      link: '/services/oil-change'
    },
    {
      id: '3',
      name: 'Brake Service',
      description: 'Brake pad replacement and adjustment',
      icon: 'shield',
      category: 'Car',
      is_active: true,
      price: '₹799',
      duration: '2 hours',
      color: 'red',
      link: '/services/brake-service'
    },
    {
      id: '4',
      name: 'AC Service',
      description: 'Air conditioning system maintenance',
      icon: 'sparkles',
      category: 'Car',
      is_active: true,
      price: '₹1299',
      duration: '3-4 hours',
      color: 'cyan',
      link: '/services/ac-service'
    },
    {
      id: '5',
      name: 'Battery Service',
      description: 'Battery testing and replacement',
      icon: 'zap',
      category: 'Car',
      is_active: true,
      price: '₹399',
      duration: '30 mins',
      color: 'yellow',
      link: '/services/battery-service'
    },
    {
      id: '6',
      name: 'Bike Service',
      description: 'Complete bike maintenance service',
      icon: 'bike',
      category: 'Bike',
      is_active: true,
      price: '₹499',
      duration: '1-2 hours',
      color: 'purple',
      link: '/services/bike-service'
    },
    {
      id: '7',
      name: 'Wheel Alignment',
      description: 'Professional wheel alignment service',
      icon: 'gauge',
      category: 'Car',
      is_active: true,
      price: '₹299',
      duration: '1 hour',
      color: 'blue',
      link: '/services/wheel-alignment'
    },
    {
      id: '8',
      name: 'Car Wash',
      description: 'Professional car washing and detailing',
      icon: 'sparkles',
      category: 'Car',
      is_active: true,
      price: '₹199',
      duration: '45 mins',
      color: 'indigo',
      link: '/services/car-wash'
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse text-lg">Loading services...</div>
        </div>
      </section>
    );
  }

  const categories = ['All', 'Car', 'Bike'];

  const getServiceIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'wrench': <Wrench className="h-8 w-8" />,
      'car': <Car className="h-8 w-8" />,
      'bike': <Bike className="h-8 w-8" />,
      'settings': <Settings className="h-8 w-8" />,
      'oil': <Droplets className="h-8 w-8" />,
      'sparkles': <Sparkles className="h-8 w-8" />,
      'shield': <Shield className="h-8 w-8" />,
      'clock': <Clock className="h-8 w-8" />,
      'zap': <Zap className="h-8 w-8" />,
      'gauge': <Gauge className="h-8 w-8" />,
    };
    return iconMap[iconName.toLowerCase()] || <Wrench className="h-8 w-8" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
      'orange': { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200', border: 'hover:border-orange-300' },
      'green': { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200', border: 'hover:border-green-300' },
      'blue': { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200', border: 'hover:border-blue-300' },
      'purple': { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200', border: 'hover:border-purple-300' },
      'red': { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-200', border: 'hover:border-red-300' },
      'cyan': { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-200', border: 'hover:border-cyan-300' },
      'yellow': { bg: 'bg-yellow-100', text: 'text-yellow-600', hover: 'hover:bg-yellow-200', border: 'hover:border-yellow-300' },
      'indigo': { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-200', border: 'hover:border-indigo-300' },
    };
    return colorMap[color] || colorMap['orange'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Auto Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your car or bike serviced by certified technicians using genuine parts. 
            We offer doorstep pickup and delivery for your convenience.
          </p>
        </div>

        {/* Service Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white shadow-lg border border-gray-200 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="px-8 py-3 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white font-medium"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayServices
                  .filter(service => category === 'All' || service.category === category)
                  .map((service) => {
                    const colorClasses = getColorClasses(service.color || 'orange');
                    const ServiceCard = (
                      <Card 
                        className={`p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 ${colorClasses.border} bg-white relative overflow-hidden ${colorClasses.hover}`}
                      >
                        {/* Background decoration */}
                        <div className={`absolute top-0 right-0 w-20 h-20 ${colorClasses.bg} rounded-full -translate-y-10 translate-x-10`}></div>
                        
                        <div className="relative z-10">
                          <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-full mb-6 group-hover:scale-110 transition-all duration-300`}>
                            <div className={colorClasses.text}>
                              {getServiceIcon(service.icon)}
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors">
                            {service.name}
                          </h3>
                          
                          {service.description && (
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {service.description}
                            </p>
                          )}

                          <div className="flex items-center justify-between mb-6">
                            {service.price && (
                              <div className="text-left">
                                <div className="text-sm text-gray-500">Starting from</div>
                                <div className="text-2xl font-bold text-accent">{service.price}</div>
                              </div>
                            )}
                            {service.duration && (
                              <div className="text-right">
                                <div className="text-sm text-gray-500">Duration</div>
                                <div className="font-semibold text-gray-900">{service.duration}</div>
                              </div>
                            )}
                          </div>

                          <Button 
                            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                            size="lg"
                          >
                            Book Now
                          </Button>
                        </div>
                      </Card>
                    );

                    return service.link ? (
                      <Link key={service.id} to={service.link}>
                        {ServiceCard}
                      </Link>
                    ) : (
                      <div key={service.id}>
                        {ServiceCard}
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Service Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <Shield className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Genuine Parts</h3>
            <p className="text-gray-600 text-sm">100% authentic parts with warranty</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Same Day Service</h3>
            <p className="text-gray-600 text-sm">Quick turnaround time</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Pickup & Drop</h3>
            <p className="text-gray-600 text-sm">At your doorstep</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
            <p className="text-gray-600 text-sm">Certified professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicServices;