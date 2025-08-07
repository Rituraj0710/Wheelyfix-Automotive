import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jahnvi Kanth",
      review: "WHEELYFIX did a great job servicing my Honda Activa, which involved replacing most of the damaged parts. Really friendly service, I would highly recommend"
    },
    {
      name: "Rohan Kataria", 
      review: "I had the BEST experience with WHEELYFIX: great & professional bike service, super fast and friendly communication, price value is unbeatable. I'll definitely will bring my bike there again and I can only recommend WHEELYFIX to 100%"
    },
    {
      name: "Sarita Dua",
      review: "Outstanding quality of work at a great price, cost free pick up and drop off with the addition of professional finish, what more to ask for. Definetly recommend WHEELYFIX regardless if small or big problem"
    },
    {
      name: "Ravindra Pratap",
      review: "Superb service! Bike collected, serviced & repaired to the highest standards and returned in pristine condition. Will definitely use WHEELYFIX again. Highly recommended"
    },
    {
      name: "Mayank Awasthi", 
      review: "In all terrains and situations I can blindly trust my motorcycle, because it is serviced by Wheelyfix Services. The brand who feels motorcycles."
    },
    {
      name: "Sweta Goel",
      review: "The study of the art of motorcycle maintenance is really a miniature study of the art of rationality itself. Working on a motorcycle, working well, caring, is to become part of a process, to achieve an inner peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">2,50,000+ Happy Customers</h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;