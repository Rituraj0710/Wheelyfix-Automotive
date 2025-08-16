// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card } from "@/components/ui/card";
// import {
//   Star,
//   Shield,
//   Clock,
//   MapPin,
//   CheckCircle,
//   Car,
//   Bike,
// } from "lucide-react";
// // import { supabase } from "@/integrations/supabase/client";

// interface HeroContent {
//   title: string;
//   subtitle: string;
//   description: string;
//   background_image_url: string;
//   cta_text: string;
// }

// const DynamicHero = () => {
//   const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [selectedVehicle, setSelectedVehicle] = useState<string>("");
//   const [mobileNumber, setMobileNumber] = useState<string>("");

//   useEffect(() => {
//     const fetchHeroContent = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("hero_content")
//           .select("*")
//           .eq("is_active", true)
//           .single();

//         if (data) {
//           setHeroContent(data);
//         } else if (error) {
//           console.error("Error fetching hero content:", error);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching hero content:", error);
//         setLoading(false);
//       }
//     };

//     fetchHeroContent();
//   }, []);

//   // Use image from Supabase or fallback to image in public folder
//   const backgroundImage =
//     heroContent?.background_image_url || "/hero-banner.jpg";

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", { selectedVehicle, mobileNumber });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 flex items-center justify-center">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <section
//       className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Light overlay for text readability */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-8">
//             <div className="space-y-6">
//               <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <Shield className="h-5 w-5 text-orange-300" />
//                 <span className="text-sm font-medium">
//                   Trusted by 2,50,000+ Customers
//                 </span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 {heroContent ? (
//                   <>
//                     <span className="text-white">{heroContent.title}</span>
//                     <br />
//                     <span className="text-orange-300">
//                       {heroContent.subtitle}
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     <span className="text-white">India's Leading</span>
//                     <br />
//                     <span className="text-orange-300">Auto Service</span>
//                     <span className="text-white ml-4">Network</span>
//                     <br />
//                     <span className="text-orange-200 text-2xl lg:text-3xl font-normal">
//                       Professional Car & Bike Services
//                     </span>
//                   </>
//                 )}
//               </h1>

//               {heroContent?.description && (
//                 <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
//                   {heroContent.description}
//                 </p>
//               )}
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500/20 p-2 rounded-lg">
//                   <CheckCircle className="h-5 w-5 text-orange-300" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">
//                     Free Pickup & Drop
//                   </div>
//                   <div className="text-sm text-orange-200">
//                     At your doorstep
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="bg-green-500/20 p-2 rounded-lg">
//                   <Clock className="h-5 w-5 text-green-300" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">
//                     Same Day Service
//                   </div>
//                   <div className="text-sm text-green-200">Quick turnaround</div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="bg-purple-500/20 p-2 rounded-lg">
//                   <Shield className="h-5 w-5 text-purple-300" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">Genuine Parts</div>
//                   <div className="text-sm text-purple-200">100% authentic</div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-500/20 p-2 rounded-lg">
//                   <MapPin className="h-5 w-5 text-blue-300" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">500+ Centers</div>
//                   <div className="text-sm text-blue-200">Across India</div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="flex space-x-8 text-center pt-6 border-t border-white/20">
//               <div>
//                 <div className="flex items-center justify-center space-x-1 mb-2">
//                   <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                   <span className="text-2xl font-bold">4.8/5</span>
//                 </div>
//                 <p className="text-sm text-orange-200">
//                   Based on 10,000+
//                   <br />
//                   Reviews
//                 </p>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-orange-300 mb-2">
//                   2,50,000+
//                 </div>
//                 <p className="text-sm text-orange-200">
//                   Happy
//                   <br />
//                   Customers
//                 </p>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-orange-300 mb-2">
//                   500+
//                 </div>
//                 <p className="text-sm text-orange-200">
//                   Service
//                   <br />
//                   Centers
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Service Form */}
//           <div className="flex justify-end">
//             <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
//               <div className="space-y-6">
//                 <div className="text-center">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                     Get Free Service Quote
//                   </h2>
//                   <p className="text-gray-600">
//                     Book your car or bike service now
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-accent cursor-pointer">
//                       <Car className="h-5 w-5 text-gray-600" />
//                       <span className="font-medium">Car Service</span>
//                     </div>
//                     <div className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-accent cursor-pointer">
//                       <Bike className="h-5 w-5 text-gray-600" />
//                       <span className="font-medium">Bike Service</span>
//                     </div>
//                   </div>

//                   <Select
//                     value={selectedVehicle}
//                     onValueChange={setSelectedVehicle}
//                   >
//                     <SelectTrigger className="w-full h-12 border-2 border-gray-200 focus:border-accent">
//                       <SelectValue placeholder="Select Your Vehicle Brand" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="maruti">Maruti Suzuki</SelectItem>
//                       <SelectItem value="hyundai">Hyundai</SelectItem>
//                       <SelectItem value="honda">Honda</SelectItem>
//                       <SelectItem value="tata">Tata</SelectItem>
//                       <SelectItem value="mahindra">Mahindra</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>

//                   <Input
//                     placeholder="Enter Mobile Number"
//                     className="h-12 border-2 border-gray-200 focus:border-accent"
//                     type="tel"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     required
//                   />

//                   <Button
//                     type="submit"
//                     className="w-full h-12 text-white bg-accent hover:bg-accent/90 font-semibold text-lg shadow-lg"
//                   >
//                     {heroContent?.cta_text || "GET FREE QUOTE"}
//                   </Button>
//                 </form>

//                 <div className="flex justify-between text-center pt-4 border-t border-gray-200">
//                   <div>
//                     <div className="flex items-center justify-center space-x-1 mb-1">
//                       <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                       <span className="font-bold text-sm">4.8/5</span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Based on 10,000+
//                       <br />
//                       Reviews
//                     </p>
//                   </div>
//                   <div>
//                     <div className="font-bold text-accent text-sm">
//                       2,50,000+
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Happy
//                       <br />
//                       Customers
//                     </p>
//                   </div>
//                   <div>
//                     <div className="font-bold text-accent text-sm">500+</div>
//                     <p className="text-xs text-gray-500">
//                       Service
//                       <br />
//                       Centers
//                     </p>
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-xs text-gray-500">
//                     By continuing, you agree to our Terms of Service & Privacy
//                     Policy
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DynamicHero;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  Car,
  Bike,
  ArrowLeft,
  Search,
  Fuel,
  Zap,
  X,
} from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  background_image_url: string;
  cta_text: string;
}

// Vehicle data structure
const vehicleData = {
  car: {
    brands: {
      maruti: {
        name: "Maruti Suzuki",
        logo: "🚗",
        models: {
          petrol: [
            "Swift",
            "Baleno",
            "WagonR",
            "Alto",
            "Dzire",
            "Vitara Brezza",
          ],
          diesel: ["Swift", "Baleno", "Dzire", "Vitara Brezza", "S-Cross"],
          cng: ["WagonR", "Alto", "Swift", "Dzire"],
        },
      },
      hyundai: {
        name: "Hyundai",
        logo: "🚙",
        models: {
          petrol: ["i20", "Creta", "Verna", "Grand i10", "Santro"],
          diesel: ["i20", "Creta", "Verna", "Venue"],
          cng: ["Grand i10", "Santro", "Aura"],
        },
      },
      tata: {
        name: "Tata",
        logo: "🚘",
        models: {
          petrol: ["Nexon", "Harrier", "Safari", "Altroz", "Tiago"],
          diesel: ["Nexon", "Harrier", "Safari", "Altroz"],
          cng: ["Tiago", "Tigor", "Altroz"],
        },
      },
      honda: {
        name: "Honda",
        logo: "🚗",
        models: {
          petrol: ["City", "Jazz", "WR-V", "Amaze", "Civic"],
          diesel: ["City", "WR-V", "Amaze"],
          cng: ["Amaze", "City"],
        },
      },
      mahindra: {
        name: "Mahindra",
        logo: "🚙",
        models: {
          petrol: ["XUV300", "Bolero", "Scorpio", "XUV700"],
          diesel: ["XUV300", "Bolero", "Scorpio", "XUV700", "Thar"],
          cng: [],
        },
      },
      toyota: {
        name: "Toyota",
        logo: "🚗",
        models: {
          petrol: ["Innova Crysta", "Fortuner", "Glanza", "Urban Cruiser"],
          diesel: ["Innova Crysta", "Fortuner"],
          cng: ["Glanza"],
        },
      },
    },
  },
  bike: {
    brands: {
      hero: {
        name: "Hero MotoCorp",
        logo: "🏍️",
        models: {
          petrol: [
            "Splendor Plus",
            "HF Deluxe",
            "Passion Pro",
            "Glamour",
            "Xtreme 160R",
            "Destini 125",
          ],
        },
      },
      honda_bike: {
        name: "Honda",
        logo: "🏍️",
        models: {
          petrol: [
            "Activa 6G",
            "CB Shine",
            "Unicorn",
            "Hornet 2.0",
            "CBR150R",
            "X-Blade",
          ],
        },
      },
      bajaj: {
        name: "Bajaj",
        logo: "🏍️",
        models: {
          petrol: [
            "Pulsar 150",
            "Pulsar 220F",
            "Avenger",
            "CT 100",
            "Platina",
            "Dominar 400",
          ],
        },
      },
      tvs: {
        name: "TVS",
        logo: "🏍️",
        models: {
          petrol: [
            "Apache RTR 160",
            "Apache RTR 200",
            "Jupiter",
            "NTorq",
            "Radeon",
            "Sport",
          ],
        },
      },
      yamaha: {
        name: "Yamaha",
        logo: "🏍️",
        models: {
          petrol: ["FZ-S", "MT-15", "R15 V4", "Fascino", "Ray ZR", "Aerox 155"],
        },
      },
      suzuki: {
        name: "Suzuki",
        logo: "🏍️",
        models: {
          petrol: [
            "Gixxer",
            "Access 125",
            "Avenis",
            "Burgman Street",
            "Intruder",
          ],
        },
      },
    },
  },
};

const DynamicHero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");

  // Vehicle selection states
  const [showVehicleSelection, setShowVehicleSelection] = useState(false);
  const [selectionStep, setSelectionStep] = useState("vehicle-type");
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const { data, error } = await supabase
          .from("hero_content")
          .select("*")
          .eq("is_active", true)
          .single();

        if (data) {
          setHeroContent(data);
        } else if (error) {
          console.error("Error fetching hero content:", error);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hero content:", error);
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  const backgroundImage =
    heroContent?.background_image_url || "/hero-banner.jpg";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedVehicle, mobileNumber });
  };

  // Vehicle selection functions
  const resetVehicleSelection = () => {
    setSelectionStep("vehicle-type");
    setSelectedVehicleType("");
    setSelectedFuelType("");
    setSelectedBrand("");
    setSelectedModel("");
    setSearchTerm("");
  };

  const closeVehicleSelection = () => {
    setShowVehicleSelection(false);
    resetVehicleSelection();
  };

  const goBack = () => {
    switch (selectionStep) {
      case "fuel-type":
        setSelectionStep("vehicle-type");
        setSelectedVehicleType("");
        break;
      case "brand":
        setSelectionStep("fuel-type");
        setSelectedFuelType("");
        break;
      case "model":
        setSelectionStep("brand");
        setSelectedBrand("");
        break;
      default:
        break;
    }
  };

  const handleVehicleTypeSelect = (type) => {
    setSelectedVehicleType(type);
    setSelectionStep("fuel-type");
  };

  const handleFuelTypeSelect = (fuelType) => {
    setSelectedFuelType(fuelType);
    setSelectionStep("brand");
  };

  const handleBrandSelect = (brandKey) => {
    setSelectedBrand(brandKey);
    setSelectionStep("model");
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    const brandName =
      vehicleData[selectedVehicleType].brands[selectedBrand].name;
    setSelectedVehicle(`${brandName} ${model}`);
    setShowVehicleSelection(false);
    resetVehicleSelection();
  };

  const getAvailableBrands = () => {
    const brands = vehicleData[selectedVehicleType]?.brands || {};
    return Object.entries(brands).filter(([key, brand]) => {
      if (selectedVehicleType === "bike") return true;
      return brand.models[selectedFuelType]?.length > 0;
    });
  };

  const getAvailableModels = () => {
    const brand = vehicleData[selectedVehicleType]?.brands[selectedBrand];
    if (!brand) return [];

    if (selectedVehicleType === "bike") {
      return brand.models.petrol || [];
    }
    return brand.models[selectedFuelType] || [];
  };

  const filteredBrands = getAvailableBrands().filter(([key, brand]) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModels = getAvailableModels().filter((model) =>
    model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
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
                  <span className="text-sm font-medium">
                    Trusted by 2,50,000+ Customers
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {heroContent ? (
                    <>
                      <span className="text-white">{heroContent.title}</span>
                      <br />
                      <span className="text-orange-300">
                        {heroContent.subtitle}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">India's Leading</span>
                      <br />
                      <span className="text-orange-300">Auto Service</span>
                      <span className="text-white ml-4">Network</span>
                      <br />
                      <span className="text-orange-200 text-2xl lg:text-3xl font-normal">
                        Professional Car & Bike Services
                      </span>
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
                    <div className="font-semibold text-white">
                      Free Pickup & Drop
                    </div>
                    <div className="text-sm text-orange-200">
                      At your doorstep
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-green-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Same Day Service
                    </div>
                    <div className="text-sm text-green-200">
                      Quick turnaround
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Genuine Parts
                    </div>
                    <div className="text-sm text-purple-200">
                      100% authentic
                    </div>
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
                  <p className="text-sm text-orange-200">
                    Based on 10,000+
                    <br />
                    Reviews
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300 mb-2">
                    2,50,000+
                  </div>
                  <p className="text-sm text-orange-200">
                    Happy
                    <br />
                    Customers
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300 mb-2">
                    500+
                  </div>
                  <p className="text-sm text-orange-200">
                    Service
                    <br />
                    Centers
                  </p>
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
                    <p className="text-gray-600">
                      Book your car or bike service now
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-orange-500 cursor-pointer transition-colors"
                        onClick={() => setShowVehicleSelection(true)}
                      >
                        <Car className="h-5 w-5 text-gray-600" />
                        <span className="font-medium">Car Service</span>
                      </div>
                      <div
                        className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-orange-500 cursor-pointer transition-colors"
                        onClick={() => setShowVehicleSelection(true)}
                      >
                        <Bike className="h-5 w-5 text-gray-600" />
                        <span className="font-medium">Bike Service</span>
                      </div>
                    </div>

                    <div
                      className="w-full h-12 border-2 border-gray-200 rounded-md flex items-center px-3 bg-gray-50 cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setShowVehicleSelection(true)}
                    >
                      <span
                        className={
                          selectedVehicle ? "text-gray-900" : "text-gray-500"
                        }
                      >
                        {selectedVehicle || "Select Your Vehicle Brand"}
                      </span>
                    </div>

                    <Input
                      placeholder="Enter Mobile Number"
                      className="h-12 border-2 border-gray-200 focus:border-orange-500"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />

                    <Button
                      type="submit"
                      className="w-full h-12 text-white bg-orange-600 hover:bg-orange-700 font-semibold text-lg shadow-lg"
                    >
                      {heroContent?.cta_text || "GET FREE QUOTE"}
                    </Button>
                  </form>

                  <div className="flex justify-between text-center pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-bold text-sm">4.8/5</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Based on 10,000+
                        <br />
                        Reviews
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-orange-600 text-sm">
                        2,50,000+
                      </div>
                      <p className="text-xs text-gray-500">
                        Happy
                        <br />
                        Customers
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-orange-600 text-sm">
                        500+
                      </div>
                      <p className="text-xs text-gray-500">
                        Service
                        <br />
                        Centers
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      By continuing, you agree to our Terms of Service & Privacy
                      Policy
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Overlay */}
      {showVehicleSelection && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              {selectionStep !== "vehicle-type" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="mr-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <h2 className="text-lg font-semibold flex-1">
                {selectionStep === "vehicle-type" && "Select Vehicle Type"}
                {selectionStep === "fuel-type" && "Select Fuel Type"}
                {selectionStep === "brand" && "Select Brand"}
                {selectionStep === "model" && "Select Model"}
              </h2>
              <Button variant="ghost" size="sm" onClick={closeVehicleSelection}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Step 1: Vehicle Type Selection */}
              {selectionStep === "vehicle-type" && (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-medium">Choose Your Vehicle</h3>
                    <p className="text-gray-600 text-sm">
                      Select the type of vehicle you want to service
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500"
                      onClick={() => handleVehicleTypeSelect("bike")}
                    >
                      <CardContent className="p-4 text-center space-y-3">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                          <Bike className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Bike</h4>
                          <p className="text-xs text-gray-500">Two Wheeler</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-green-500"
                      onClick={() => handleVehicleTypeSelect("car")}
                    >
                      <CardContent className="p-4 text-center space-y-3">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                          <Car className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Car</h4>
                          <p className="text-xs text-gray-500">Four Wheeler</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Step 2: Fuel Type Selection */}
              {selectionStep === "fuel-type" && (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      {selectedVehicleType === "bike" ? (
                        <Bike className="h-5 w-5" />
                      ) : (
                        <Car className="h-5 w-5" />
                      )}
                      <span className="font-medium capitalize">
                        {selectedVehicleType}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedVehicleType === "bike" ? (
                      <Card
                        className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-500"
                        onClick={() => handleFuelTypeSelect("petrol")}
                      >
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                            <Fuel className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Petrol</h4>
                            <p className="text-xs text-gray-500">
                              Gasoline Engine
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <>
                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-500"
                          onClick={() => handleFuelTypeSelect("petrol")}
                        >
                          <CardContent className="p-4 text-center space-y-3">
                            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                              <Fuel className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Petrol</h4>
                              <p className="text-xs text-gray-500">
                                Gasoline Engine
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-gray-700"
                          onClick={() => handleFuelTypeSelect("diesel")}
                        >
                          <CardContent className="p-4 text-center space-y-3">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                              <Fuel className="h-6 w-6 text-gray-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Diesel</h4>
                              <p className="text-xs text-gray-500">
                                Diesel Engine
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card
                          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-green-500"
                          onClick={() => handleFuelTypeSelect("cng")}
                        >
                          <CardContent className="p-4 text-center space-y-3">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                              <Zap className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">CNG</h4>
                              <p className="text-xs text-gray-500">
                                Compressed Natural Gas
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Brand Selection */}
              {selectionStep === "brand" && (
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search Brand"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {filteredBrands.map(([key, brand]) => (
                      <Card
                        key={key}
                        className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500"
                        onClick={() => handleBrandSelect(key)}
                      >
                        <CardContent className="p-3 text-center space-y-2">
                          <div className="text-2xl">{brand.logo}</div>
                          <div className="text-xs font-medium">
                            {brand.name}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Model Selection */}
              {selectionStep === "model" && (
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search Model"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {filteredModels.map((model) => (
                      <Card
                        key={model}
                        className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500"
                        onClick={() => handleModelSelect(model)}
                      >
                        <CardContent className="p-3 text-center space-y-2">
                          <div className="text-xl">
                            {selectedVehicleType === "bike" ? "🏍️" : "🚗"}
                          </div>
                          <div className="text-sm font-medium">{model}</div>
                          <div className="text-xs text-gray-500">
                            {
                              vehicleData[selectedVehicleType].brands[
                                selectedBrand
                              ].name
                            }
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicHero;