import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Services = () => {
  const services = [
    {
      category: "Car Services",
      items: [
        { name: "Basic Service", price: "₹999", duration: "2 hours", description: "Engine oil change, filter replacement, basic inspection" },
        { name: "Comprehensive Service", price: "₹2499", duration: "4 hours", description: "Complete vehicle inspection and maintenance" },
        { name: "AC Service", price: "₹1299", duration: "3 hours", description: "AC gas refill, filter cleaning, cooling check" },
        { name: "Battery Service", price: "₹599", duration: "1 hour", description: "Battery testing, terminal cleaning, replacement if needed" },
        { name: "Brake Service", price: "₹1899", duration: "3 hours", description: "Brake pad replacement, fluid change, inspection" },
        { name: "Suspension Service", price: "₹2199", duration: "4 hours", description: "Shock absorber check, spring inspection, alignment" }
      ]
    },
    {
      category: "Bike Services",
      items: [
        { name: "Basic Service", price: "₹499", duration: "1 hour", description: "Engine oil change, chain lubrication, basic check" },
        { name: "Comprehensive Service", price: "₹1299", duration: "2 hours", description: "Complete bike inspection and maintenance" },
        { name: "Chain & Sprocket", price: "₹899", duration: "2 hours", description: "Chain cleaning, sprocket inspection, replacement" },
        { name: "Brake Service", price: "₹699", duration: "1.5 hours", description: "Brake pad replacement, cable adjustment" },
        { name: "Engine Tuning", price: "₹1599", duration: "3 hours", description: "Carburetor cleaning, spark plug replacement" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional vehicle maintenance and repair services for cars and bikes
          </p>
        </div>

        <div className="space-y-12">
          {services.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => (
                  <Card key={service.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button className="w-full">Book Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Need Custom Service?</h3>
              <p className="mb-6">Contact us for specialized vehicle maintenance needs</p>
              <Button variant="secondary" size="lg">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services