import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact and Franchise Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Ratnashil Online Services Pvt Ltd<br />
                    Plot No-967, Sec-9, Bypass Road, Badauli<br />
                    Faridabad, Haryana, 121004
                  </p>
                  <p className="text-xl font-semibold text-accent">18002129922</p>
                  <p>info@pikpart.com</p>
                </div>
              </div>
            </div>

            {/* Franchise Form */}
            <div>
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  BECOME A FRANCHISE PARTNER
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Input placeholder="Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  <Input placeholder="Phone" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2wheeler">2Wheeler</SelectItem>
                      <SelectItem value="4wheeler">4Wheeler</SelectItem>
                      <SelectItem value="spare">Spare Parts</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Investment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="75000">75,000</SelectItem>
                      <SelectItem value="100000">1,00,000</SelectItem>
                      <SelectItem value="150000">1,50,000</SelectItem>
                      <SelectItem value="200000">2,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="orange" className="w-full">
                  Send Message
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Home</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">About Us</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Contact Us</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Products</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Privacy Policy</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Terms and Conditions</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Refund Terms</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">FAQ</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Career</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Values</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Franchise</Button>
                <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Gallery</Button>
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
              © 2018, All Rights Reserved by Ratnashil Online Services Private Limited
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm">Visit here</span>
              <div className="text-xs text-gray-400">
                Ratnashil Online Services Pvt Ltd. Plot no-967, Sec-9, Bypass Road,<br />
                Badauli, Faridabad, Haryana 121004
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;