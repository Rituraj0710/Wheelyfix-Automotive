import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

// Pages
import Index from './pages/Index';
import Login from './pages/Login';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Blogs from './pages/Blogs';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

// Service Pages
import GeneralService from './pages/services/GeneralService';
import OilChangeService from './pages/services/OilChangeService';
import BrakeService from './pages/services/BrakeService';
import ACService from './pages/services/ACService';
import BatteryService from './pages/services/BatteryService';
import BikeService from './pages/services/BikeService';
import WheelAlignmentService from './pages/services/WheelAlignmentService';
import CarWashService from './pages/services/CarWashService';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Service Routes */}
            <Route path="/services/general-service" element={<GeneralService />} />
            <Route path="/services/oil-change" element={<OilChangeService />} />
            <Route path="/services/brake-service" element={<BrakeService />} />
            <Route path="/services/ac-service" element={<ACService />} />
            <Route path="/services/battery-service" element={<BatteryService />} />
            <Route path="/services/bike-service" element={<BikeService />} />
            <Route path="/services/wheel-alignment" element={<WheelAlignmentService />} />
            <Route path="/services/car-wash" element={<CarWashService />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
