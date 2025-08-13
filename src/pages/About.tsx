import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Clock, Shield, Wrench, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Wheelyfix</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted automotive service partner, dedicated to keeping your wheels rolling smoothly since day one.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wheelyfix was born from a simple belief: every vehicle owner deserves reliable, 
                transparent, and convenient automotive services. Founded by a team of automotive 
                enthusiasts and technology experts, we set out to revolutionize how people 
                maintain and repair their vehicles.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a small garage with big dreams has grown into a comprehensive 
                automotive service platform, serving thousands of satisfied customers across 
                the region. We combine traditional automotive expertise with modern technology 
                to deliver services that exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Wheelyfix stands as a testament to quality service, innovation, and 
                customer satisfaction in the automotive industry.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Wheelyfix garage and team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional automotive services that ensure safety, reliability, 
                and peace of mind for every customer. We strive to make vehicle maintenance 
                and repair accessible, transparent, and convenient through innovative 
                solutions and expert craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted automotive service platform, setting new 
                standards in quality, innovation, and customer experience. We envision 
                a future where every vehicle owner has access to reliable, professional 
                automotive care at their fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape the way we serve our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Trust & Integrity</h4>
              <p className="text-gray-600">
                We build lasting relationships through honest communication and transparent practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h4>
              <p className="text-gray-600">
                Our skilled technicians deliver quality workmanship with attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h4>
              <p className="text-gray-600">
                We're here when you need us, providing consistent and dependable service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h4>
              <p className="text-gray-600">
                Your satisfaction and safety are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are passionate about automotive excellence and customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Kumar</h4>
              <p className="text-accent font-medium mb-2">Lead Technician</p>
              <p className="text-gray-600 text-sm">
                15+ years of experience in automotive repair and maintenance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h4>
              <p className="text-accent font-medium mb-2">Service Manager</p>
              <p className="text-gray-600 text-sm">
                Expert in customer service and automotive diagnostics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h4>
              <p className="text-accent font-medium mb-2">Quality Assurance</p>
              <p className="text-gray-600 text-sm">
                Ensures every service meets our high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Technicians</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Service Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Wheelyfix Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Wheelyfix for their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Book a Service
            </button>
            <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
