import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bike, Truck, Wrench, Droplets, Sparkles, Shield, Star, Link as LinkIcon } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  is_active: boolean;
  sort_order: number;
  count?: number;
  color?: string;
  link?: string;
}

const DynamicProductCategory = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('product_categories')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Default categories with diverse colors and links
  const defaultCategories: ProductCategory[] = [
    {
      id: '1',
      name: 'Car Service',
      icon: 'car',
      description: 'Complete car maintenance and repair services',
      is_active: true,
      sort_order: 1,
      count: 15,
      color: 'orange',
      link: '/services?category=car'
    },
    {
      id: '2',
      name: 'Bike Service',
      icon: 'bike',
      description: 'Professional bike servicing and maintenance',
      is_active: true,
      sort_order: 2,
      count: 12,
      color: 'green',
      link: '/services?category=bike'
    },
    {
      id: '3',
      name: 'Engine Parts',
      icon: 'wrench',
      description: 'Genuine engine components and accessories',
      is_active: true,
      sort_order: 3,
      count: 25,
      color: 'blue',
      link: '/services?category=engine'
    },
    {
      id: '4',
      name: 'Oil & Lubricants',
      icon: 'oil',
      description: 'High-quality oils and lubricants',
      is_active: true,
      sort_order: 4,
      count: 8,
      color: 'purple',
      link: '/services?category=oil'
    },
    {
      id: '5',
      name: 'Brake System',
      icon: 'shield',
      description: 'Brake pads, discs, and hydraulic systems',
      is_active: true,
      sort_order: 5,
      count: 18,
      color: 'red',
      link: '/services?category=brake'
    },
    {
      id: '6',
      name: 'AC Service',
      icon: 'sparkles',
      description: 'Air conditioning maintenance and repair',
      is_active: true,
      sort_order: 6,
      count: 10,
      color: 'cyan',
      link: '/services?category=ac'
    },
    {
      id: '7',
      name: 'Battery Service',
      icon: 'shield',
      description: 'Battery testing, charging, and replacement',
      is_active: true,
      sort_order: 7,
      count: 6,
      color: 'yellow',
      link: '/services?category=battery'
    },
    {
      id: '8',
      name: 'Truck Service',
      icon: 'truck',
      description: 'Heavy vehicle maintenance and repair',
      is_active: true,
      sort_order: 8,
      count: 9,
      color: 'indigo',
      link: '/services?category=truck'
    }
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse text-lg">Loading categories...</div>
        </div>
      </section>
    );
  }

  const getCategoryIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'car': <Car className="h-10 w-10" />,
      'bike': <Bike className="h-10 w-10" />,
      'truck': <Truck className="h-10 w-10" />,
      'motorcycle': <Bike className="h-10 w-10" />,
      'wrench': <Wrench className="h-10 w-10" />,
      'oil': <Droplets className="h-10 w-10" />,
      'sparkles': <Sparkles className="h-10 w-10" />,
      'shield': <Shield className="h-10 w-10" />,
    };
    return iconMap[iconName.toLowerCase()] || <Wrench className="h-10 w-10" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      'orange': { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200' },
      'green': { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200' },
      'blue': { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200' },
      'purple': { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200' },
      'red': { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-200' },
      'cyan': { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-200' },
      'yellow': { bg: 'bg-yellow-100', text: 'text-yellow-600', hover: 'hover:bg-yellow-200' },
      'indigo': { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-200' },
    };
    return colorMap[color] || colorMap['orange'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Categories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vehicle Services & Parts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of automotive services and genuine parts. 
            We serve all types of vehicles with professional expertise.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayCategories.map((category) => {
            const colorClasses = getColorClasses(category.color || 'orange');
            const CategoryCard = (
              <Card 
                className={`p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-accent/30 bg-white relative overflow-hidden ${colorClasses.hover}`}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${colorClasses.bg} rounded-full -translate-y-8 translate-x-8`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${colorClasses.bg} rounded-full mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <div className={colorClasses.text}>
                      {getCategoryIcon(category.icon)}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  
                  {category.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {category.description}
                    </p>
                  )}

                  {category.count && (
                    <div className="inline-flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">{category.count}</span>
                      <span className="text-xs text-gray-500">Services</span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-center space-x-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <LinkIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">View Services</span>
                  </div>
                </div>
              </Card>
            );

            return category.link ? (
              <Link key={category.id} to={category.link}>
                {CategoryCard}
              </Link>
            ) : (
              <div key={category.id}>
                {CategoryCard}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact our experts for custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  Contact Expert
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-600">Service Centers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-600">Service Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-gray-600">Parts Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicProductCategory;