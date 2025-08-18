// Updated vehicle types
type CarBrand = {
  name: string;
  logo: string;
  models: {
    petrol: string[];
    diesel: string[];
    cng: string[];
  };
};

type BikeBrand = {
  name: string;
  logo: string;
  models: {
    petrol: string[];
  };
};

type VehicleData = {
  car: {
    brands: {
      [key: string]: CarBrand;
    };
  };
  bike: {
    brands: {
      [key: string]: BikeBrand;
    };
  };
};

// Vehicle data with proper typing
const vehicleData: VehicleData = {
  car: {
    brands: {
      maruti: {
        name: "Maruti Suzuki",
        logo: "🚗",
        models: {
          petrol: ["Swift", "Baleno", "WagonR", "Alto", "Dzire", "Vitara Brezza"],
          diesel: ["Swift", "Baleno", "Dzire", "Vitara Brezza", "S-Cross"],
          cng: ["WagonR", "Alto", "Swift", "Dzire"],
        },
      },
      // ... other brands
    }
  },
  bike: {
    brands: {
      hero: {
        name: "Hero MotoCorp",
        logo: "🏍️",
        models: {
          petrol: ["Splendor Plus", "HF Deluxe", "Passion Pro", "Glamour", "Xtreme 160R"],
        },
      },
      // ... other brands
    }
  }
};

// Helper functions for vehicle data access
const getBrandsForVehicleType = (type: 'car' | 'bike') => {
  return vehicleData[type].brands || {};
};

const getModelsForBrand = (type: 'car' | 'bike', brandKey: string, fuelType?: 'petrol' | 'diesel' | 'cng') => {
  const brand = vehicleData[type].brands[brandKey];
  if (!brand) return [];

  if (type === 'bike') {
    return brand.models.petrol || [];
  }

  return fuelType ? (brand as CarBrand).models[fuelType] || [] : [];
};

// Add the helper functions and export types
export type { VehicleData, CarBrand, BikeBrand };
export { vehicleData, getBrandsForVehicleType, getModelsForBrand };
