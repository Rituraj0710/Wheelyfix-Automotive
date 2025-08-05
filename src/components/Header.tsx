import { Button } from "@/components/ui/button";
import pikpartLogo from "@/assets/pikpart-logo.png";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src={pikpartLogo} alt="PikPart Smart Garage" className="h-10 w-10" />
              <span className="text-xl font-bold">PIKPART</span>
            </Link>
            <div className="flex items-center space-x-4">
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
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                Home
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                Services
              </Button>
            </Link>
            <Link to="/blogs">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                Blogs
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                Cart
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                Booking
              </Button>
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary-foreground">
                    <User className="h-4 w-4 mr-2" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="orange" size="sm" onClick={handleAuthAction}>
                LOG IN
              </Button>
            )}
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