import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wrench, 
  Link as LinkIcon, 
  Zap, 
  Shield, 
  Car, 
  Lightbulb, 
  Gauge, 
  Cog, 
  Microchip,
  Star,
  Clock,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Package,
  Settings,
  Droplets,
  Sparkles,
  Calendar,
  Thermometer,
  Battery,
  Circle,
  SprayCan,
  ClipboardList,
  Sun
} from "lucide-react";
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PartCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  price: string;
  duration: string;
  color: string;
  isPopular?: boolean;
}

const VehicleServicesParts = () => {
  const [activeTab, setActiveTab] = useState<'two-wheeler' | 'four-wheeler'>('two-wheeler');

  const twoWheelerParts: PartCategory[] = [
    {
      id: '1',
      name: 'Service Parts',
      icon: <Wrench className="h-8 w-8" />,
      description: 'Essential maintenance and repair parts for optimal two-wheeler performance',
      services: ['Oil Change', 'Filter Replacement', 'Chain Lubrication', 'Brake Adjustment', 'Tire Inspection'],
      price: '₹299 - ₹1,499',
      duration: '1-3 hours',
      color: 'emerald',
      isPopular: true
    },
    {
      id: '2',
      name: 'Belt & Chain Sprocket',
      icon: <LinkIcon className="h-8 w-8" />,
      description: 'High-quality belts, chains, and sprocket systems for smooth operation',
      services: ['Chain Cleaning', 'Sprocket Inspection', 'Belt Replacement', 'Tension Adjustment', 'Wear Analysis'],
      price: '₹199 - ₹899',
      duration: '1-2 hours',
      color: 'red'
    },
    {
      id: '3',
      name: 'Cables',
      icon: <Zap className="h-8 w-8" />,
      description: 'Durable control and electrical cables for various two-wheeler systems',
      services: ['Cable Inspection', 'Lubrication', 'Replacement', 'Adjustment', 'Performance Testing'],
      price: '₹99 - ₹399',
      duration: '30 mins - 1 hour',
      color: 'orange'
    },
    {
      id: '4',
      name: 'Brake Systems',
      icon: <Shield className="h-8 w-8" />,
      description: 'Complete braking system components for safety and performance',
      services: ['Brake Pad Replacement', 'Disc Inspection', 'Fluid Change', 'Cable Adjustment', 'Performance Test'],
      price: '₹399 - ₹1,299',
      duration: '1-2 hours',
      color: 'crimson'
    },
    {
      id: '5',
      name: 'Plastic & Body Parts',
      icon: <Car className="h-8 w-8" />,
      description: 'Body panels and exterior components for perfect fit and finish',
      services: ['Panel Replacement', 'Paint Matching', 'Scratch Repair', 'Fitment Check', 'Quality Assurance'],
      price: '₹299 - ₹2,499',
      duration: '2-4 hours',
      color: 'gray'
    },
    {
      id: '6',
      name: 'Lighting Parts',
      icon: <Lightbulb className="h-8 w-8" />,
      description: 'Advanced lighting solutions for enhanced visibility and safety',
      services: ['Bulb Replacement', 'Lens Cleaning', 'Wiring Check', 'Alignment', 'Brightness Test'],
      price: '₹99 - ₹599',
      duration: '30 mins - 1 hour',
      color: 'amber'
    },
    {
      id: '7',
      name: 'Engine Parts',
      icon: <Gauge className="h-8 w-8" />,
      description: 'Complete engine and powertrain components for maximum performance',
      services: ['Piston Inspection', 'Valve Adjustment', 'Carburetor Cleaning', 'Compression Test', 'Performance Tuning'],
      price: '₹599 - ₹3,999',
      duration: '2-6 hours',
      color: 'teal'
    },
    {
      id: '8',
      name: 'Clutch Systems',
      icon: <Cog className="h-8 w-8" />,
      description: 'Clutch assemblies and transmission components for smooth operation',
      services: ['Clutch Plate Replacement', 'Cable Adjustment', 'Performance Test', 'Wear Analysis', 'Smoothness Check'],
      price: '₹499 - ₹2,999',
      duration: '2-4 hours',
      color: 'green'
    },
    {
      id: '9',
      name: 'Electronics Parts',
      icon: <Microchip className="h-8 w-8" />,
      description: 'Electronic control units and advanced sensor systems',
      services: ['ECU Diagnostics', 'Sensor Testing', 'Wiring Check', 'Performance Calibration', 'Error Code Analysis'],
      price: '₹299 - ₹1,999',
      duration: '1-3 hours',
      color: 'purple'
    }
  ];

  const fourWheelerParts: PartCategory[] = [
    {
      id: '1',
      name: 'Service Parts',
      icon: <Wrench className="h-8 w-8" />,
      description: 'Essential maintenance and repair parts for optimal four-wheeler performance',
      services: ['Oil Change', 'Filter Replacement', 'Fluid Top-up', 'Battery Check', 'Tire Rotation'],
      price: '₹599 - ₹2,999',
      duration: '2-4 hours',
      color: 'emerald',
      isPopular: true
    },
    {
      id: '2',
      name: 'Belt & Chain Sprocket',
      icon: <LinkIcon className="h-8 w-8" />,
      description: 'High-quality belts, chains, and sprocket systems for smooth operation',
      services: ['Timing Belt Replacement', 'Serpentine Belt Check', 'Chain Inspection', 'Tension Adjustment', 'Wear Analysis'],
      price: '₹399 - ₹1,999',
      duration: '2-4 hours',
      color: 'red'
    },
    {
      id: '3',
      name: 'Cables',
      icon: <Zap className="h-8 w-8" />,
      description: 'Durable control and electrical cables for various four-wheeler systems',
      services: ['Cable Inspection', 'Lubrication', 'Replacement', 'Adjustment', 'Performance Testing'],
      price: '₹199 - ₹799',
      duration: '1-2 hours',
      color: 'orange'
    },
    {
      id: '4',
      name: 'Brake Systems',
      icon: <Shield className="h-8 w-8" />,
      description: 'Complete braking system components for safety and performance',
      services: ['Brake Pad Replacement', 'Disc Inspection', 'Fluid Change', 'ABS Testing', 'Performance Test'],
      price: '₹799 - ₹3,999',
      duration: '2-4 hours',
      color: 'crimson'
    },
    {
      id: '5',
      name: 'Plastic & Body Parts',
      icon: <Car className="h-8 w-8" />,
      description: 'Body panels and exterior components for perfect fit and finish',
      services: ['Panel Replacement', 'Paint Matching', 'Dent Repair', 'Fitment Check', 'Quality Assurance'],
      price: '₹599 - ₹4,999',
      duration: '3-6 hours',
      color: 'gray'
    },
    {
      id: '6',
      name: 'Lighting Parts',
      icon: <Lightbulb className="h-8 w-8" />,
      description: 'Advanced lighting solutions for enhanced visibility and safety',
      services: ['Bulb Replacement', 'Lens Cleaning', 'Wiring Check', 'Alignment', 'Brightness Test'],
      price: '₹199 - ₹1,299',
      duration: '1-2 hours',
      color: 'amber'
    },
    {
      id: '7',
      name: 'Engine Parts',
      icon: <Gauge className="h-8 w-8" />,
      description: 'Complete engine and powertrain components for maximum performance',
      services: ['Piston Inspection', 'Valve Adjustment', 'Fuel Injection Check', 'Compression Test', 'Performance Tuning'],
      price: '₹999 - ₹6,999',
      duration: '4-8 hours',
      color: 'teal'
    },
    {
      id: '8',
      name: 'Clutch Systems',
      icon: <Cog className="h-8 w-8" />,
      description: 'Clutch assemblies and transmission components for smooth operation',
      services: ['Clutch Plate Replacement', 'Flywheel Inspection', 'Performance Test', 'Wear Analysis', 'Smoothness Check'],
      price: '₹799 - ₹4,999',
      duration: '3-6 hours',
      color: 'green'
    },
    {
      id: '9',
      name: 'Electronics Parts',
      icon: <Microchip className="h-8 w-8" />,
      description: 'Electronic control units and advanced sensor systems',
      services: ['ECU Diagnostics', 'Sensor Testing', 'Wiring Check', 'Performance Calibration', 'Error Code Analysis'],
      price: '₹499 - ₹3,999',
      duration: '2-4 hours',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; border: string; text: string } } = {
      'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
      'red': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
      'orange': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
      'crimson': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
      'gray': { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700' },
      'amber': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
      'teal': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700' },
      'green': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
      'purple': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' }
    };
    return colorMap[color] || colorMap['emerald'];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 px-4 py-2 rounded-full mb-4">
              <Package className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Vehicle Services & Parts</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Complete Vehicle Parts
              <br />
              <span className="text-orange-400">& Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive automotive parts and professional services for both two-wheelers and four-wheelers. 
              Quality components with expert installation and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'two-wheeler' | 'four-wheeler')} className="w-full">
        {/* Vehicle Type Tabs */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 bg-white p-1 shadow-lg">
                <TabsTrigger 
                  value="two-wheeler" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  🏍️ Two Wheeler
                </TabsTrigger>
                <TabsTrigger 
                  value="four-wheeler" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  🚗 Four Wheeler
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </section>

        {/* Parts & Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <TabsContent value="two-wheeler" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Two Wheeler Parts & Services</h2>
              <p className="text-lg text-gray-600">Professional maintenance and repair services for motorcycles and scooters</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {twoWheelerParts.map((part) => {
                const colorClasses = getColorClasses(part.color);
                return (
                  <Card key={part.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.border} rounded-xl flex items-center justify-center`}>
                          <div className={colorClasses.text}>
                            {part.icon}
                          </div>
                        </div>
                        {part.isPopular && (
                          <Badge className="bg-orange-500 text-white">Popular</Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2">{part.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{part.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Services Include:</h4>
                          <ul className="space-y-1">
                            {part.services.map((service, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="text-sm">
                            <div className="font-semibold text-gray-900">{part.price}</div>
                            <div className="text-gray-500">Starting from</div>
                          </div>
                          <div className="text-sm text-right">
                            <div className="font-semibold text-gray-900">{part.duration}</div>
                            <div className="text-gray-500">Duration</div>
                          </div>
                        </div>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                          Book Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="four-wheeler" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Four Wheeler Parts & Services</h2>
              <p className="text-lg text-gray-600">Comprehensive automotive care for cars, SUVs, and commercial vehicles</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fourWheelerParts.map((part) => {
                const colorClasses = getColorClasses(part.color);
                return (
                  <Card key={part.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.border} rounded-xl flex items-center justify-center`}>
                          <div className={colorClasses.text}>
                            {part.icon}
                          </div>
                        </div>
                        {part.isPopular && (
                          <Badge className="bg-orange-500 text-white">Popular</Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2">{part.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{part.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Services Include:</h4>
                          <ul className="space-y-1">
                            {part.services.map((service, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="text-sm">
                            <div className="font-semibold text-gray-900">{part.price}</div>
                            <div className="text-gray-500">Starting from</div>
                          </div>
                          <div className="text-sm text-right">
                            <div className="font-semibold text-gray-900">{part.duration}</div>
                            <div className="text-gray-500">Duration</div>
                          </div>
                        </div>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                          Book Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </div>
      </section>
      </Tabs>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Parts & Services?</h2>
            <p className="text-lg text-gray-600">Professional expertise with quality assurance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600 text-sm">100% authentic OEM and aftermarket parts with warranty</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600 text-sm">Most services completed within 2-6 hours</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Pickup & Drop</h3>
              <p className="text-gray-600 text-sm">Convenient service at your doorstep</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8">
              Book your vehicle service now and experience professional automotive care with genuine parts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Book Service Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleServicesParts;
