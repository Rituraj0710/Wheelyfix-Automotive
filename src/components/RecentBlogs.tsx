import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecentBlogs = () => {
  const blogs = [
    {
      title: "Advanced Driving Assistance System (ADAS) is Revolution Road Safety",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "🚗"
    },
    {
      title: "Which is best between Ceramic Coating and PPF (Paint Protection Film)",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "✨"
    },
    {
      title: "Best Car Service Center for Quick Maintenance and Smooth Ride",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "🔧"
    },
    {
      title: "Multi-Brand Car Service Center at Your Nearest Location in Faridabad",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "🏢"
    },
    {
      title: "My Business Vision: Turning Dreams into Reality",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "💭"
    },
    {
      title: "Top 5 BMW Bike Models With Price in India",
      description: "Discover insights and perspectives on this topic in our latest article.",
      image: "🏍️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Blogs</h2>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {blog.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {blog.description}
                </p>
                
                <Button variant="link" className="text-accent p-0 h-auto text-sm hover:text-accent/80">
                  Read Article →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;