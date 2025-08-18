import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Thermometer, Battery, Circle, SprayCan, Car, Sparkles, ClipboardList, Shield, Wrench, Droplets, Sun, CheckCircle, Star, Zap, Gauge, MapPin, Clock, Settings } from "lucide-react";

import { Link } from 'react-router-dom';

import appMockup from '@/assets/app-mockup.png';
import logoImg from '@/assets/logo.jpg';
// All Pikpart references removed. Use only icons, appMockup, and logoImg for images. No Pikpart name or icon used anywhere.

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
  const [vehicleTab, setVehicleTab] = useState<'Two Wheeler' | 'Four Wheeler'>('Two Wheeler');

  // Service data for demo (add more as needed)
  const twoWheelerServices = [
    { name: 'Suspension', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=200&h=200&fit=crop&crop=center', color: 'blue' },
    { name: 'Clutch', image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=200&h=200&fit=crop&crop=center', color: 'green' },
    { name: 'Tyre Service', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', color: 'orange' },
    { name: 'Electricals Services', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop&crop=center', color: 'yellow' },
    { name: 'Body Parts', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center', color: 'purple' },
    { name: 'Engines & Carburetor', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop&crop=center', color: 'red' },
    { name: 'Service & Repair', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&crop=center', color: 'indigo' },
    { name: 'Transmission', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&h=200&fit=crop&crop=center', color: 'teal' },
    { name: 'Fitments', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=200&h=200&fit=crop&crop=center', color: 'pink' },
  ];
  const fourWheelerServices = [
    { name: 'Car Services', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=200&h=200&fit=crop&crop=center', color: 'blue' },
    { name: 'AC Service & Repair', image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=200&h=200&fit=crop&crop=center', color: 'cyan' },
    { name: 'Batteries', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', color: 'yellow' },
    { name: 'Tyres & Wheel Care', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop&crop=center', color: 'orange' },
    { name: 'Denting & Painting', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center', color: 'red' },
    { name: 'Detailing Services', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop&crop=center', color: 'purple' },
    { name: 'Car Spa & Cleaning', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&crop=center', color: 'green' },
    { name: 'Car Inspections', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&h=200&fit=crop&crop=center', color: 'indigo' },
    { name: 'Windshields & Lights', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=200&h=200&fit=crop&crop=center', color: 'amber' },
    { name: 'Suspension & Fitments', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=200&h=200&fit=crop&crop=center', color: 'teal' },
    { name: 'Insurance Claims', image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=200&h=200&fit=crop&crop=center', color: 'emerald' },
  ];

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
    const colorMap: { [key: string]: { bg: string; border: string; hover: string } } = {
      'blue': { bg: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
      'green': { bg: 'bg-green-50', border: 'border-green-200', hover: 'hover:bg-green-100' },
      'orange': { bg: 'bg-orange-50', border: 'border-orange-200', hover: 'hover:bg-orange-100' },
      'yellow': { bg: 'bg-yellow-50', border: 'border-yellow-200', hover: 'hover:bg-yellow-100' },
      'purple': { bg: 'bg-purple-50', border: 'border-purple-200', hover: 'hover:bg-purple-100' },
      'red': { bg: 'bg-red-50', border: 'border-red-200', hover: 'hover:bg-red-100' },
      'indigo': { bg: 'bg-indigo-50', border: 'border-indigo-200', hover: 'hover:bg-indigo-100' },
      'teal': { bg: 'bg-teal-50', border: 'border-teal-200', hover: 'hover:bg-teal-100' },
      'cyan': { bg: 'bg-cyan-50', border: 'border-cyan-200', hover: 'hover:bg-cyan-100' },
      'pink': { bg: 'bg-pink-50', border: 'border-pink-200', hover: 'hover:bg-pink-100' },
      'amber': { bg: 'bg-amber-50', border: 'border-amber-200', hover: 'hover:bg-amber-100' },
      'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-200', hover: 'hover:bg-emerald-100' },
    };
    return colorMap[color] || colorMap['blue'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Delivering superior detailing and repairing solutions
          </p>
          <div className="flex justify-center mb-8">
            <button
              className={`px-8 py-3 rounded-full font-semibold mr-2 transition-all duration-200 ${vehicleTab === 'Two Wheeler' ? 'bg-orange-500 text-white shadow' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setVehicleTab('Two Wheeler')}
            >
              Two Wheeler
            </button>
            <button
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${vehicleTab === 'Four Wheeler' ? 'bg-orange-500 text-white shadow' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setVehicleTab('Four Wheeler')}
            >
              Four Wheeler
            </button>
          </div>
        </div>
        {/* Horizontal Scrollable Service Cards */}
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 min-w-max">
            {(vehicleTab === 'Two Wheeler' ? twoWheelerServices : fourWheelerServices).map((service, idx) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div key={idx} className={`flex flex-col items-center bg-white rounded-lg border-2 ${colorClasses.border} p-6 min-w-[160px] max-w-[180px] mx-2 shadow-sm hover:shadow-md transition-all duration-200 ${colorClasses.hover}`}>
                  <div className={`w-16 h-16 flex items-center justify-center mb-4 ${colorClasses.bg} rounded-lg overflow-hidden`}>
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center leading-tight">
                    {service.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

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