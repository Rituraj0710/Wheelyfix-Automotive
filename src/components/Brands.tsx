// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Star } from 'lucide-react';

// // Brand data with logo URLs from a CDN
// const brands = [
//   {
//     name: 'Maruti Suzuki',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Maruti_Suzuki_logo.svg',
//     link: '/brands/maruti-suzuki'
//   },
//   {
//     name: 'Hyundai',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hyundai_Motor_Company_logo_2019.svg/1280px-Hyundai_Motor_Company_logo_2019.svg.png',
//     link: '/brands/hyundai'
//   },
//   {
//     name: 'Tata Motors',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tata_logo_icon.svg/2048px-Tata_logo_icon.svg.png',
//     link: '/brands/tata'
//   },
//   {
//     name: 'Mahindra',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Mahindra_Rise_logo.png',
//     link: '/brands/mahindra'
//   },
//   {
//     name: 'Honda',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png',
//     link: '/brands/honda'
//   },
//   {
//     name: 'Toyota',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1024px-Toyota_carlogo.svg.png',
//     link: '/brands/toyota'
//   },
//   {
//     name: 'Kia',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Kia_logo2.png/1200px-Kia_logo2.png',
//     link: '/brands/kia'
//   },
//   {
//     name: 'Volkswagen',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png',
//     link: '/brands/volkswagen'
//   },
//   {
//     name: 'Hero',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hero_MotoCorp_logo.svg/2560px-Hero_MotoCorp_logo.svg.png',
//     link: '/brands/hero'
//   },
//   {
//     name: 'Bajaj',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bajaj_logo.svg/2560px-Bajaj_logo.svg.png',
//     link: '/brands/bajaj'
//   },
//   {
//     name: 'TVS',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TVS_Motor_Company_Logo.svg/2560px-TVS_Motor_Company_Logo.svg.png',
//     link: '/brands/tvs'
//   },
//   {
//     name: 'Royal Enfield',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Royal_Enfield_Logo.svg/2560px-Royal_Enfield_Logo.svg.png',
//     link: '/brands/royal-enfield'
//   },
//   {
//     name: 'Yamaha',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Yamaha_Motor_Logo.svg/2560px-Yamaha_Motor_Logo.svg.png',
//     link: '/brands/yamaha'
//   },
//   {
//     name: 'KTM',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/KTM_logo_%282022%29.svg/2560px-KTM_logo_%282022%29.svg.png',
//     link: '/brands/ktm'
//   },
//   {
//     name: 'Suzuki',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Suzuki_logo_2.svg/1024px-Suzuki_logo_2.svg.png',
//     link: '/brands/suzuki'
//   },
//   {
//     name: 'Ather',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ather_Energy_Logo.svg/1280px-Ather_Energy_Logo.svg.png',
//     link: '/brands/ather'
//   },
//   {
//     name: 'Ola Electric',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ola_Electric_logo.svg/1280px-Ola_Electric_logo.svg.png',
//     link: '/brands/ola-electric'
//   },
//   {
//     name: 'Revolt',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Revolt_Motors_Logo.svg/1280px-Revolt_Motors_Logo.svg.png',
//     link: '/brands/revolt'
//   },
//   {
//     name: 'Jawa',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jawa_Motors_Logo.svg/1280px-Jawa_Motors_Logo.svg.png',
//     link: '/brands/jawa'
//   }
// ];

// const Brands = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const scrollSpeed = 1; // Pixels to move per frame
//   let animationFrameId: number;
//   let isPaused = false;
//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     // Duplicate the brands for infinite scrolling effect
//     const sliderContent = slider.firstChild as HTMLElement;
//     const sliderWidth = sliderContent.offsetWidth;
//     slider.scrollLeft = 0;

//     const animate = () => {
//       if (!isPaused && slider) {
//         if (slider.scrollLeft >= sliderWidth / 2) {
//           slider.scrollLeft = 0;
//         } else {
//           slider.scrollLeft += scrollSpeed;
//         }
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     // Pause animation on hover
//     const handleMouseEnter = () => { isPaused = true; };
//     const handleMouseLeave = () => { isPaused = false; };

//     slider.addEventListener('mouseenter', handleMouseEnter);
//     slider.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       slider.removeEventListener('mouseenter', handleMouseEnter);
//       slider.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
//             <Star className="h-4 w-4 text-accent" />
//             <span className="text-sm font-medium text-accent">Trusted Partners</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Brands We Serve
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We provide professional service for all major automotive brands in India.
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div 
//           ref={sliderRef}
//           className="relative w-full overflow-hidden py-4"
//         >
//           <div className="flex items-center space-x-8 w-max">
//             {/* First set of brands */}
//             {brands.map((brand, index) => (
//               <Link 
//                 key={index} 
//                 to={brand.link}
//                 className="flex-shrink-0 w-40 h-32 flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="w-16 h-16 flex items-center justify-center mb-2">
//                   <img 
//                     src={brand.logo} 
//                     alt={brand.name}
//                     className="h-full w-auto object-contain"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement;
//                       target.style.display = 'none';
//                       const fallback = document.createElement('div');
//                       fallback.className = 'text-2xl';
//                       target.after(fallback);
//                     }}
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-gray-700 text-center">
//                   {brand.name}
//                 </span>
//               </Link>
//             ))}
            
//             {/* Duplicate for infinite loop effect */}
//             {brands.map((brand, index) => (
//               <Link 
//                 key={`duplicate-${index}`}
//                 to={brand.link}
//                 className="flex-shrink-0 w-40 h-32 flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//                 aria-hidden="true"
//               >
//                 <div className="w-16 h-16 flex items-center justify-center mb-2">
//                   <img 
//                     src={brand.logo} 
//                     alt=""
//                     className="h-full w-auto object-contain"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement;
//                       target.style.display = 'none';
//                     }}
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-gray-700 text-center">
//                   {brand.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Don't See Your Brand?
//           </h3>
//           <p className="text-gray-600 mb-6">
//             We service all major automotive brands. Contact us to learn more about our comprehensive service offerings.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               to="/contact"
//               className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
//             >
//               Contact Us
//             </Link>
//             <Link 
//               to="/services"
//               className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-colors"
//             >
//               View All Services
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// //           </div>
// //           <div className="text-center">
// //             <div className="text-3xl font-bold text-accent mb-2">100%</div>
// //             <div className="text-gray-600">Genuine Parts</div>
// export default Brands;

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
};

const Brands: React.FC = () => {
  const brands: Brand[] = [
    { name: "Maruti Suzuki", logo: "/logos/maruti-suzuki.svg", fallback: "🚗", color: "bg-blue-50", textColor: "text-blue-600" },
    { name: "Hyundai", logo: "/logos/hyundai.svg", fallback: "🚗", color: "bg-slate-50", textColor: "text-slate-600" },
    { name: "Honda", logo: "/logos/honda.svg", fallback: "🏍️", color: "bg-red-50", textColor: "text-red-600" },
    // ... keep rest of your brands
  ];

  const loop = [...brands, ...brands];

  const BrandCard: React.FC<Brand> = (brand) => (
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
            <img
              src={brand.logo}
              alt={`A ${brand.name} logo.`}
              className="h-12 w-auto object-contain group-hover:scale-110 transition-transform"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <div className="text-3xl hidden" style={{ display: "none" }}>
              {brand.fallback || "🚗"}
            </div>
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Partners</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Brands We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide professional service for all major automotive brands in India. From cars to bikes, we ensure quality maintenance for every vehicle.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
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
              <Link to="/blogs">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3" size="lg">
                  View All Guides
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
