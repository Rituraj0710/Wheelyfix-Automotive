import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';

interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  is_active: boolean;
  sort_order: number;
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

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading categories...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Product Category</h2>
          <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-white">
            View All
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border hover:border-accent/50"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-xs text-gray-600 line-clamp-2">
                  {category.description}
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Browse More Link */}
        <div className="text-center mt-12">
          <Button variant="link" className="text-accent text-lg hover:text-accent/80">
            Browse More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DynamicProductCategory;