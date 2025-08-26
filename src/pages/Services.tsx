import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageBanner from "@/components/PageBanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Bike, Clock, Shield, Zap, Users } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

const Services = () => {
  const services = [
    {
      category: "Car Services",
      icon: <Car className="h-8 w-8" />,
      items: [
        { name: "Basic Service", price: "₹999", duration: "2 hours", description: "Engine oil change, filter replacement, basic inspection", popular: false },
        { name: "Comprehensive Service", price: "₹2499", duration: "4 hours", description: "Complete vehicle inspection and maintenance", popular: true },
        { name: "AC Service", price: "₹1299", duration: "3 hours", description: "AC gas refill, filter cleaning, cooling check", popular: false },
        { name: "Battery Service", price: "₹599", duration: "1 hour", description: "Battery testing, terminal cleaning, replacement if needed", popular: false },
        { name: "Brake Service", price: "₹1899", duration: "3 hours", description: "Brake pad replacement, fluid change, inspection", popular: false },
        { name: "Suspension Service", price: "₹2199", duration: "4 hours", description: "Shock absorber check, spring inspection, alignment", popular: false }
      ]
    },
    {
      category: "Bike Services",
      icon: <Bike className="h-8 w-8" />,
      items: [
        { name: "Basic Service", price: "₹499", duration: "1 hour", description: "Engine oil change, chain lubrication, basic check", popular: false },
        { name: "Comprehensive Service", price: "₹1299", duration: "2 hours", description: "Complete bike inspection and maintenance", popular: true },
        { name: "Chain & Sprocket", price: "₹899", duration: "2 hours", description: "Chain cleaning, sprocket inspection, replacement", popular: false },
        { name: "Brake Service", price: "₹699", duration: "1.5 hours", description: "Brake pad replacement, cable adjustment", popular: false },
        { name: "Engine Tuning", price: "₹1599", duration: "3 hours", description: "Carburetor cleaning, spark plug replacement", popular: false }
      ]
    }
  ]

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Genuine Parts",
      description: "100% authentic OEM and aftermarket parts"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Service",
      description: "Most services completed within 2-4 hours"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ]

  const navigate = useNavigate()
  const location = useLocation()
  const qs = new URLSearchParams(location.search)
  const selectedType = qs.get('type') // 'car' | 'bike'
  const { user } = useAuth()

  const handleBookNow = (serviceName: string) => {
    if (!user) {
      // Store intended path for post-login redirection
      localStorage.setItem('redirectAfterLoginPath', '/booking')
      navigate('/login', { state: { from: '/booking', serviceType: serviceName } })
      return
    }
    navigate('/booking', { state: { serviceType: serviceName } })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner
        title="Expert Vehicle Maintenance"
        subtitle="Comprehensive car and bike services with genuine parts and certified technicians"
        imageUrl="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1920&auto=format&fit=crop"
      >
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">Book Service Now</Button>
        <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg">View All Services</Button>
      </PageBanner>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of automotive services designed to keep your vehicle in top condition
            </p>
          </div>

          <div className="space-y-16">
            {services
              .filter(category => !selectedType || (selectedType === 'car' ? category.category.includes('Car') : category.category.includes('Bike')))
              .map((category) => (
              <div key={category.category}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm mb-4">
                    <div className="text-accent">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service) => (
                    <Card key={service.name} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          {service.popular && (
                            <Badge className="bg-accent text-white">Most Popular</Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-3xl font-bold text-accent">{service.price}</div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <div className="space-y-3">
                          <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => handleBookNow(service.name)}>
                            Book Now
                          </Button>
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Need Custom Service?</h3>
            <p className="text-xl text-white/90 mb-8">
              Contact us for specialized vehicle maintenance needs. Our expert team is ready to help with any automotive challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent px-8 py-3 text-lg">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services