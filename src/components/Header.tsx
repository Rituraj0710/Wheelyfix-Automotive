// import logo from "@/assets/logo.jpg"; // Import the logo file (JPG format)

// import { Button } from "./ui/button";
// import wheelyfixLogo from "../assets/logo.jpg"; // Import the Wheelyfix logo
// import { useAuth } from "../hooks/useAuth";
// import { useUserRole } from "../hooks/useUserRole";
// import { Link, useNavigate } from "react-router-dom";
// import { LogOut, User, Menu, X, Phone, MapPin, Download } from "lucide-react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { useState } from "react";
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// const Header = () => {
//   const { user, signOut } = useAuth();
//   const { isAdmin } = useUserRole();
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleAuthAction = () => {
//     if (user) {
//       signOut();
//     } else {
//       navigate("/login");
//     }
//   };

//   const navigationItems = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Blog", href: "/blogs" },
//   ];

//   const MobileMenu = () => (
//     <div className="lg:hidden">
//       <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//         <SheetTrigger asChild>
//           <Button variant="ghost" size="sm" className="text-gray-700">
//             <Menu className="h-6 w-6" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
//           <div className="flex flex-col h-full">
//             <div className="flex items-center justify-between mb-8">
//               <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
//                 <img src={wheelyfixLogo} alt="Wheelyfix Automotive" className="h-8 w-8" />
//                 <span className="text-xl font-bold text-gray-900">WHEELYFIX</span>
//               </Link>
//               <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="h-5 w-5" />
//               </Button>
//             </div>
            
//             <nav className="flex-1">
//               <div className="space-y-4">
//                 {navigationItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className="block text-lg font-medium text-gray-900 hover:text-accent transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 {isAdmin && (
//                   <Link
//                     to="/admin"
//                     className="block text-lg font-medium text-gray-900 hover:text-accent transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Admin
//                   </Link>
//                 )}
//               </div>
//             </nav>

//             <div className="border-t pt-6">
//               {user ? (
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <User className="h-4 w-4" />
//                     <span>{user.email}</span>
//                   </div>
//                   <Button 
//                     variant="outline" 
//                     className="w-full" 
//                     onClick={() => {
//                       signOut();
//                       setIsMobileMenuOpen(false);
//                     }}
//                   >
//                     <LogOut className="h-4 w-4 mr-2" />
//                     Log Out
//                   </Button>
//                 </div>
//               ) : (
//                 <Button 
//                   variant="default" 
//                   className="w-full bg-accent hover:bg-accent/90" 
//                   onClick={() => {
//                     handleAuthAction();
//                     setIsMobileMenuOpen(false);
//                   }}
//                 >
//                   LOG IN
//                 </Button>
//               )}
//             </div>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       {/* Top bar */}
//       <div className="bg-gray-100 text-gray-700 py-2">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4 text-accent" />
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4 text-accent" />
//                 <span>Find Nearest Service Center</span>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-4">
//               <Button variant="ghost" size="sm" className="text-gray-700 hover:text-accent">
//                 <Download className="h-4 w-4 mr-2" />
//                 Download App
//               </Button>
//               <span>Track Service</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center space-x-3">
//             <img src={wheelyfixLogo} alt="Wheelyfix Automotive" className="h-12 w-12" />
//             <div>
//               <span className="text-2xl font-bold text-gray-900">WHEELYFIX</span>
//               <div className="text-xs text-gray-600">Wheelyfix Automotive</div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <Link key={item.name} to={item.href}>
//                 <Button variant="ghost" className="text-gray-700 hover:text-accent font-medium">
//                   {item.name}
//                 </Button>
//               </Link>
//             ))}
//             {isAdmin && (
//               <Link to="/admin">
//                 <Button variant="ghost" className="text-gray-700 hover:text-accent font-medium">
//                   Admin
//                 </Button>
//               </Link>
//             )}
            
//             {user ? (
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="sm" className="text-gray-700 hover:text-accent">
//                     <User className="h-4 w-4 mr-2" />
//                     {user.email}
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56">
//                   <DropdownMenuItem onClick={() => navigate("/profile")}>
//                     Profile
//                   </DropdownMenuItem>
//                   {isAdmin && (
//                     <DropdownMenuItem onClick={() => navigate("/admin")}>
//                       Admin Panel
//                     </DropdownMenuItem>
//                   )}
//                   <DropdownMenuItem onClick={signOut}>
//                     <LogOut className="h-4 w-4 mr-2" />
//                     Log Out
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             ) : (
//               <Button 
//                 variant="default" 
//                 size="sm" 
//                 className="bg-accent hover:bg-accent/90 text-white font-medium px-6"
//                 onClick={handleAuthAction}
//               >
//                 LOG IN
//               </Button>
//             )}
//           </nav>

//           {/* Mobile Menu */}
//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import logo from "@/assets/logo.jpg"; // Import the logo file (JPG format)

import { Button } from "./ui/button";
import wheelyfixLogo from "../assets/logo.jpg"; // Import the Wheelyfix logo
import { useAuth } from "../hooks/useAuth";
import { useUserRole } from "../hooks/useUserRole";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, Menu, X, Phone, MapPin, Download } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";


const Header = () => {
  const { user, signOut } = useAuth();
  const { isAdmin } = useUserRole();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ New scroll function
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate("/login");
    }
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blogs" },
  ];

  const MobileMenu = () => (
    <div className="lg:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="text-gray-700">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
          <div className="flex flex-col h-full">
            {/* ... existing mobile menu top part */}

            <nav className="flex-1">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-lg font-medium text-gray-900 hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* ✅ Contact Us Button in mobile menu */}
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium"
                  onClick={() => {
                    scrollToFooter();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>

                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block text-lg font-medium text-gray-900 hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
              </div>
            </nav>

            {/* ... existing login/logout part */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* ... existing top bar */}

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={wheelyfixLogo} alt="Wheelyfix Automotive" className="h-12 w-12" />
            <div>
              <span className="text-2xl font-bold text-gray-900">WHEELYFIX</span>
              <div className="text-xs text-gray-600">Wheelyfix Automotive</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <Button variant="ghost" className="text-gray-700 hover:text-accent font-medium">
                  {item.name}
                </Button>
              </Link>
            ))}

            {/* ✅ Contact Us Button in desktop nav */}
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-medium px-6"
              onClick={scrollToFooter}
            >
              Contact Us
            </Button>

            {isAdmin && (
              <Link to="/admin">
                <Button variant="ghost" className="text-gray-700 hover:text-accent font-medium">
                  Admin
                </Button>
              </Link>
            )}

            {/* ... existing login/logout dropdown */}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

