import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type Brand = {
  name: string;
  logo: string;
  fallback?: string;
  color?: string;
  textColor?: string;
  logoUrls?: string[]; // Multiple logo URLs for fallback
};

const Brands: React.FC = () => {
  const brands: Brand[] = [
    { 
      name: "Maruti Suzuki", 
      logo: "/logos/maruti-suzuki.svg", 
      logoUrls: [
        "/logos/maruti-suzuki-real.svg",
        "/logos/maruti-suzuki.svg"
      ],
      fallback: "🚗", 
      color: "bg-blue-50", 
      textColor: "text-blue-600" 
    },
    { 
      name: "Hyundai", 
      logo: "/logos/hyundai.svg", 
      logoUrls: [
        "/logos/hyundai-real.png",
        "/logos/hyundai.svg"
      ],
      fallback: "🚗", 
      color: "bg-slate-50", 
      textColor: "text-slate-600" 
    },
    { 
      name: "Tata Motors", 
      logo: "/logos/tata.svg", 
      logoUrls: [
        "/logos/tata-real.png",
        "/logos/tata.svg"
      ],
      fallback: "🚗", 
      color: "bg-indigo-50", 
      textColor: "text-indigo-600" 
    },
    { 
      name: "Mahindra", 
      logo: "/logos/mahindra.svg", 
      logoUrls: [
        "/logos/mahindra-real.png",
        "/logos/mahindra.svg"
      ],
      fallback: "🚗", 
      color: "bg-red-50", 
      textColor: "text-red-600" 
    },
    { 
      name: "Honda", 
      logo: "/logos/honda.svg", 
      logoUrls: [
        "/logos/honda-real.png",
        "/logos/honda-real.svg",
        "/logos/honda.svg"
      ],
      fallback: "🏍️", 
      color: "bg-red-50", 
      textColor: "text-red-600" 
    },
    { 
      name: "Toyota", 
      logo: "/logos/toyota.svg", 
      logoUrls: [
        "/logos/toyota-real.png",
        "/logos/toyota-real.svg",
        "/logos/toyota.svg"
      ],
      fallback: "🚗", 
      color: "bg-gray-50", 
      textColor: "text-gray-600" 
    },
    { 
      name: "Kia", 
      logo: "/logos/kia.svg", 
      logoUrls: [
        "/logos/kia-real.png",
        "/logos/kia.svg"
      ],
      fallback: "🚗", 
      color: "bg-orange-50", 
      textColor: "text-orange-600" 
    },
    { 
      name: "Volkswagen", 
      logo: "/logos/volkswagen.svg", 
      logoUrls: [
        "/logos/volkswagen-real.png",
        "/logos/volkswagen-real.svg",
        "/logos/volkswagen.svg"
      ],
      fallback: "🚗", 
      color: "bg-blue-50", 
      textColor: "text-blue-600" 
    },
    { 
      name: "Hero", 
      logo: "/logos/hero.svg", 
      logoUrls: [
        "/logos/hero-real.png",
        "/logos/hero.svg"
      ],
      fallback: "🏍️", 
      color: "bg-green-50", 
      textColor: "text-green-600" 
    },
    { 
      name: "Bajaj", 
      logo: "/logos/bajaj.svg", 
      logoUrls: [
        "/logos/bajaj-real.png",
        "/logos/bajaj.svg"
      ],
      fallback: "🏍️", 
      color: "bg-yellow-50", 
      textColor: "text-yellow-600" 
    },
    { 
      name: "TVS", 
      logo: "/logos/tvs.svg", 
      logoUrls: [
        "/logos/tvs-real.png",
        "/logos/tvs.svg"
      ],
      fallback: "🏍️", 
      color: "bg-purple-50", 
      textColor: "text-purple-600" 
    },
    { 
      name: "Royal Enfield", 
      logo: "/logos/royal-enfield.svg", 
      logoUrls: [
        "/logos/royal-enfield-real.png",
        "/logos/royal-enfield.svg"
      ],
      fallback: "🏍️", 
      color: "bg-gray-50", 
      textColor: "text-gray-600" 
    },
    { 
      name: "Yamaha", 
      logo: "/logos/yamaha.svg", 
      logoUrls: [
        "/logos/yamaha-real.png",
        "/logos/yamaha.svg"
      ],
      fallback: "🏍️", 
      color: "bg-red-50", 
      textColor: "text-red-600" 
    },
    { 
      name: "KTM", 
      logo: "/logos/ktm.svg", 
      logoUrls: [
        "/logos/ktm-real.png",
        "/logos/ktm.svg"
      ],
      fallback: "🏍️", 
      color: "bg-orange-50", 
      textColor: "text-orange-600" 
    },
    { 
      name: "Suzuki", 
      logo: "/logos/suzuki.svg", 
      logoUrls: [
        "/logos/suzuki-real.png",
        "/logos/suzuki.svg"
      ],
      fallback: "🏍️", 
      color: "bg-blue-50", 
      textColor: "text-blue-600" 
    },
    { 
      name: "Ather", 
      logo: "/logos/ather.svg", 
      logoUrls: [
        "/logos/ather-real.png",
        "/logos/ather.svg"
      ],
      fallback: "⚡", 
      color: "bg-green-50", 
      textColor: "text-green-600" 
    },
    { 
      name: "Ola Electric", 
      logo: "/logos/ola-electric.svg", 
      logoUrls: [
        "/logos/ola-electric-real.png",
        "/logos/ola-electric.svg"
      ],
      fallback: "⚡", 
      color: "bg-blue-50", 
      textColor: "text-blue-600" 
    },
    { 
      name: "Revolt", 
      logo: "/logos/revolt.svg", 
      logoUrls: [
        "/logos/revolt-real.png",
        "/logos/revolt.svg"
      ],
      fallback: "⚡", 
      color: "bg-purple-50", 
      textColor: "text-purple-600" 
    },
    { 
      name: "Jawa", 
      logo: "/logos/jawa.svg", 
      logoUrls: [
        "/logos/jawa-real.png",
        "/logos/jawa.svg"
      ],
      fallback: "🏍️", 
      color: "bg-red-50", 
      textColor: "text-red-600" 
    }
  ];

  const loop = [...brands, ...brands];

  const BrandCard: React.FC<Brand> = (brand) => {
    const [currentLogoIndex, setCurrentLogoIndex] = React.useState(0);
    const [logoError, setLogoError] = React.useState(false);

    const handleLogoError = () => {
      if (currentLogoIndex < (brand.logoUrls?.length || 1) - 1) {
        setCurrentLogoIndex(currentLogoIndex + 1);
      } else {
        setLogoError(true);
      }
    };

    const getCurrentLogo = () => {
      if (logoError) return "";
      if (brand.logoUrls && brand.logoUrls.length > currentLogoIndex) {
        return brand.logoUrls[currentLogoIndex];
      }
      return brand.logo;
    };

    return (
      <div className="shrink-0 group">
        <Card
          className={[
            "w-56 h-36 p-6 text-center bg-white relative overflow-hidden",
            "rounded-2xl border-2 transition-all duration-300 cursor-pointer",
            "hover:shadow-xl hover:border-accent/30 hover:scale-105",
            brand.color || "bg-gray-50",
          ].join(" ")}
        >
          <div
            className={`absolute top-0 right-0 w-12 h-12 ${brand.color || "bg-gray-50"} rounded-full -translate-y-6 translate-x-6 opacity-50`}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center h-16 mb-3">
              {!logoError ? (
                <img
                  src={getCurrentLogo()}
                  alt={`${brand.name} logo`}
                  className="h-12 w-auto object-contain group-hover:scale-110 transition-transform"
                  onError={handleLogoError}
                />
              ) : (
                <div className="text-3xl">
                  {brand.fallback || "🚗"}
                </div>
              )}
            </div>
            <h3 className={`font-semibold text-sm ${brand.textColor || "text-gray-700"} mb-1 group-hover:text-accent transition-colors`}>
              {brand.name}
            </h3>
            <div className="flex items-center justify-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-3 w-3" />
              <span className="text-xs font-medium">View Guide</span>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Partners</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">The Brands We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide professional service for all major automotive brands in India. From cars to bikes, we ensure quality maintenance for every vehicle.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="group">
            <div className="flex w-[200%] gap-6 animate-marquee hover:[animation-play-state:paused]">
              {loop.map((b, i) => (
                <BrandCard key={`${b.name}-${i}`} {...b} />
              ))}
            </div>
          </div>
          <style>
            {`@media (prefers-reduced-motion: reduce){
                .animate-marquee{animation:none !important; transform:translateX(0)!important;}
              }`}
          </style>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't See Your Brand?</h3>
            <p className="text-gray-600 mb-6">
              We service all major automotive brands. Contact us to know more about our comprehensive service offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
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
