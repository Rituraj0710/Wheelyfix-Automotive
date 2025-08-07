import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    { 
      name: "Maruti Suzuki", 
      logo: "/brands/maruti-suzuki.png",
      fallback: "🚗",
      color: "bg-blue-50",
      textColor: "text-blue-600",
      link: "/blogs/maruti-suzuki-service-guide"
    },
    { 
      name: "Hyundai", 
      logo: "/brands/hyundai.png",
      fallback: "🚗",
      color: "bg-slate-50",
      textColor: "text-slate-600",
      link: "/blogs/hyundai-maintenance-tips"
    },
    { 
      name: "Honda", 
      logo: "/brands/honda.png",
      fallback: "🏍️",
      color: "bg-red-50",
      textColor: "text-red-600",
      link: "/blogs/honda-service-guide"
    },
    { 
      name: "Tata", 
      logo: "/brands/tata.png",
      fallback: "🚗",
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      link: "/blogs/tata-vehicle-care"
    },
    { 
      name: "Mahindra", 
      logo: "/brands/mahindra.png",
      fallback: "🚗",
      color: "bg-green-50",
      textColor: "text-green-600",
      link: "/blogs/mahindra-service-tips"
    },
    { 
      name: "Hero", 
      logo: "/brands/hero.png",
      fallback: "🏍️",
      color: "bg-orange-50",
      textColor: "text-orange-600",
      link: "/blogs/hero-bike-maintenance"
    },
    { 
      name: "Bajaj", 
      logo: "/brands/bajaj.png",
      fallback: "🏍️",
      color: "bg-yellow-50",
      textColor: "text-yellow-600",
      link: "/blogs/bajaj-service-guide"
    },
    { 
      name: "TVS", 
      logo: "/brands/tvs.png",
      fallback: "🏍️",
      color: "bg-purple-50",
      textColor: "text-purple-600",
      link: "/blogs/tvs-bike-care"
    },
    { 
      name: "Royal Enfield", 
      logo: "/brands/royal-enfield.png",
      fallback: "🏍️",
      color: "bg-cyan-50",
      textColor: "text-cyan-600",
      link: "/blogs/royal-enfield-maintenance"
    },
    { 
      name: "KTM", 
      logo: "/brands/ktm.png",
      fallback: "🏍️",
      color: "bg-pink-50",
      textColor: "text-pink-600",
      link: "/blogs/ktm-performance-tips"
    },
    { 
      name: "Yamaha", 
      logo: "/brands/yamaha.png",
      fallback: "🏍️",
      color: "bg-emerald-50",
      textColor: "text-emerald-600",
      link: "/blogs/yamaha-service-guide"
    },
    { 
      name: "Ather", 
      logo: "/brands/ather.png",
      fallback: "⚡",
      color: "bg-teal-50",
      textColor: "text-teal-600",
      link: "/blogs/ather-ev-maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Partners</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Brands We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide professional service for all major automotive brands in India. 
            From cars to bikes, we ensure quality maintenance for every vehicle.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Link key={index} to={brand.link}>
              <Card className={`p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-accent/30 bg-white relative overflow-hidden ${brand.color} hover:scale-105`}>
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-12 h-12 ${brand.color} rounded-full -translate-y-6 translate-x-6 opacity-50`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-12 w-auto object-contain group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div 
                      className="text-3xl hidden"
                      style={{ display: 'none' }}
                    >
                      {brand.fallback}
                    </div>
                  </div>
                  
                  <h3 className={`font-semibold text-sm ${brand.textColor} mb-2 group-hover:text-accent transition-colors`}>
                    {brand.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-3 w-3" />
                    <span className="text-xs font-medium">View Guide</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              We service all major automotive brands. Contact us to know more about our comprehensive service offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/blogs">
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  View All Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-600">Brands Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-gray-600">Service Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-600">Genuine Parts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;