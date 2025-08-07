import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Star, Shield, Clock, MapPin, CheckCircle, Car, Bike } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  background_image_url: string;
  cta_text: string;
}

const DynamicHero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const { data, error } = await supabase
          .from('hero_content')
          .select('*')
          .eq('is_active', true)
          .single();

        if (data) {
          setHeroContent(data);
        } else if (error) {
          console.error('Error fetching hero content:', error);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero content:', error);
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  // Use image from Supabase or fallback to image in public folder
  const backgroundImage = heroContent?.background_image_url || '/hero-banner.jpg';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedVehicle, mobileNumber });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Trusted by 2,50,000+ Customers</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {heroContent ? (
                  <>
                    <span className="text-white">{heroContent.title}</span><br />
                    <span className="text-orange-300">{heroContent.subtitle}</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">India's Leading</span><br />
                    <span className="text-orange-300">Auto Service</span>
                    <span className="text-white ml-4">Network</span><br />
                    <span className="text-orange-200 text-2xl lg:text-3xl font-normal">Professional Car & Bike Services</span>
                  </>
                )}
              </h1>
              
              {heroContent?.description && (
                <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                  {heroContent.description}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-orange-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">Free Pickup & Drop</div>
                  <div className="text-sm text-orange-200">At your doorstep</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">Same Day Service</div>
                  <div className="text-sm text-green-200">Quick turnaround</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">Genuine Parts</div>
                  <div className="text-sm text-purple-200">100% authentic</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">500+ Centers</div>
                  <div className="text-sm text-blue-200">Across India</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 text-center pt-6 border-t border-white/20">
              <div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold">4.8/5</span>
                </div>
                <p className="text-sm text-orange-200">Based on 10,000+<br />Reviews</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-300 mb-2">2,50,000+</div>
                <p className="text-sm text-orange-200">Happy<br />Customers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-300 mb-2">500+</div>
                <p className="text-sm text-orange-200">Service<br />Centers</p>
              </div>
            </div>
          </div>

          {/* Right - Service Form */}
          <div className="flex justify-end">
            <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Free Service Quote
                  </h2>
                  <p className="text-gray-600">Book your car or bike service now</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-accent cursor-pointer">
                      <Car className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Car Service</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-accent cursor-pointer">
                      <Bike className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Bike Service</span>
                    </div>
                  </div>

                  <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                    <SelectTrigger className="w-full h-12 border-2 border-gray-200 focus:border-accent">
                      <SelectValue placeholder="Select Your Vehicle Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="tata">Tata</SelectItem>
                      <SelectItem value="mahindra">Mahindra</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input 
                    placeholder="Enter Mobile Number" 
                    className="h-12 border-2 border-gray-200 focus:border-accent"
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />

                  <Button 
                    type="submit"
                    className="w-full h-12 text-white bg-accent hover:bg-accent/90 font-semibold text-lg shadow-lg"
                  >
                    {heroContent?.cta_text || 'GET FREE QUOTE'}
                  </Button>
                </form>

                <div className="flex justify-between text-center pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-sm">4.8/5</span>
                    </div>
                    <p className="text-xs text-gray-500">Based on 10,000+<br />Reviews</p>
                  </div>
                  <div>
                    <div className="font-bold text-accent text-sm">2,50,000+</div>
                    <p className="text-xs text-gray-500">Happy<br />Customers</p>
                  </div>
                  <div>
                    <div className="font-bold text-accent text-sm">500+</div>
                    <p className="text-xs text-gray-500">Service<br />Centers</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    By continuing, you agree to our Terms of Service & Privacy Policy
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;
