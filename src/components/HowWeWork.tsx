import { Card } from "@/components/ui/card";

const HowWeWork = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Select required service for vehicle",
      description: "Provide details about the issue, such as the type of service needed, the make and model of the vehicle, and their location",
      icon: "🔍"
    },
    {
      step: "Step 2", 
      title: "Schedule pick up and drop",
      description: "We provide pick up and drop facilities for all service booked",
      icon: "📅"
    },
    {
      step: "Step 3",
      title: "Track your vehicle repair", 
      description: "We ensure transparent repair of your vehicle, we provide facilities of live streaming of your vehicle",
      icon: "📱"
    },
    {
      step: "Step 4",
      title: "Drop your vehicle",
      description: "After the service completed, we drop your vehicle at your doorstep.",
      icon: "🚗"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">HOW WE WORK</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-accent font-bold text-lg mb-2">{step.step}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;