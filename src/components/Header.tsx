import { Button } from "@/components/ui/button";
import pikpartLogo from "@/assets/pikpart-logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={pikpartLogo} alt="PikPart Smart Garage" className="h-10 w-10" />
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold">PIKPART</span>
              <div className="hidden md:flex space-x-6 ml-8">
                <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                  Car Service
                </Button>
                <Button variant="ghost" className="text-accent hover:text-accent/90">
                  Bike Service
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="text-primary-foreground hover:text-accent">
              Home
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:text-accent">
              Services
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:text-accent">
              Blogs
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:text-accent">
              Cart
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:text-accent">
              Booking
            </Button>
            <Button variant="orange" size="sm">
              LOG IN
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="lg:hidden text-primary-foreground">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;