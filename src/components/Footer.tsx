import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Download } from "lucide-react";
import wheelyfixLogo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact and Franchise Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <img src={wheelyfixLogo} alt="Wheelyfix Automotive" className="h-12 w-12" />
                <div>
                  <span className="text-2xl font-bold">WHEELYFIX</span>
                  <div className="text-sm text-gray-400">Wheelyfix Automotive</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-accent">GET IN TOUCH</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        Ratnashil Online Services Pvt Ltd<br />
                        Plot No-967, Sec-9, Bypass Road, Badauli<br />
                        Faridabad, Haryana, 121004
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xl font-semibold text-accent">1800 212 9922</p>
                      <p className="text-sm text-gray-400">Toll Free Number</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <p className="text-gray-300">info@wheelyfix.com</p>
                  </div>
                </div>
              </div>

              {/* Download App */}
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Download Our App</h4>
                <div className="flex space-x-3">
                  <Button className="bg-black hover:bg-gray-800 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    App Store
                  </Button>
                  <Button className="bg-black hover:bg-gray-800 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Play Store
                  </Button>
                </div>
              </div>
            </div>

            {/* Franchise Form */}
            <div>
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center text-accent">
                  BECOME A FRANCHISE PARTNER
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  Join our network and start your own PikPart Smart Garage franchise
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Input placeholder="Full Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent" />
                  <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent" />
                  <Input placeholder="Phone Number" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent" />
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-accent">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-accent">
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2wheeler">2 Wheeler</SelectItem>
                      <SelectItem value="4wheeler">4 Wheeler</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-accent">
                      <SelectValue placeholder="Investment Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="75000">₹75,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="100000">₹1,00,000 - ₹1,50,000</SelectItem>
                      <SelectItem value="150000">₹1,50,000 - ₹2,00,000</SelectItem>
                      <SelectItem value="200000">₹2,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Send Application
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={wheelyfixLogo} alt="Wheelyfix Automotive" className="h-8 w-8" />
                <span className="text-xl font-bold">WHEELYFIX</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                India's leading automotive service network with 500+ centers across the country. 
                We provide professional car and bike services with genuine parts.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-accent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-accent">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-accent">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-accent">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-accent">Services</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Car Service</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Bike Service</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">AC Service</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Battery Service</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Brake Service</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-accent">Company</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">About Us</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Careers</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Franchise</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Contact Us</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Blog</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-accent">Support</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Help Center</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Track Service</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">FAQ</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Privacy Policy</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-accent justify-start">Terms of Service</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Wheelyfix Automotive. All Rights Reserved by Ratnashil Online Services Private Limited
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>GST No: 06AADCR1234Z1Z5</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
