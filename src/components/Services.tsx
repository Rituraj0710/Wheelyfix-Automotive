import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    { name: "Suspension", icon: "🔧" },
    { name: "Body Finish", icon: "🎨" },
    { name: "Light Parts", icon: "💡" },
    { name: "Tyre Service", icon: "🛞" },
    { name: "Electrical Services", icon: "⚡" },
    { name: "Body Parts", icon: "🔧" },
    { name: "Engines & Carburetor", icon: "⚙️" },
    { name: "Service & Repair", icon: "🔧" },
    { name: "Transmission", icon: "⚙️" },
    { name: "EV Battery", icon: "🔋" },
    { name: "Brake & Wheel", icon: "🛞" },
    { name: "Chassis", icon: "🔧" },
    { name: "Handle Bar", icon: "🚲" },
    { name: "Motor", icon: "⚙️" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-4">
            SERVICES
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering superior detailing and repairing solutions
          </p>
        </div>

        {/* Vehicle Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg p-2 shadow-md">
            <Button variant="ghost" className="px-8 py-3 bg-accent text-white rounded-md">
              Two Wheeler
            </Button>
            <Button variant="ghost" className="px-8 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              Four Wheeler
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;