import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCategory = () => {
  const categories = [
    { name: "Service Parts", icon: "🛠️" },
    { name: "Belt & Chain Sprocket", icon: "🔗" },
    { name: "Cables", icon: "🔌" },
    { name: "Brake Systems", icon: "🛑" },
    { name: "Plastic & Body Parts", icon: "🧩" },
    { name: "Electrical Parts", icon: "⚡" },
    { name: "Lighting Parts", icon: "💡" },
    { name: "Engine Parts", icon: "⚙️" },
    { name: "Clutch Systems", icon: "🔧" },
    { name: "Electronics Parts", icon: "📱" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Product Category</h2>
          <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-white">
            View All
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border hover:border-accent/50">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">{category.name}</h3>
            </Card>
          ))}
        </div>

        {/* Browse More Link */}
        <div className="text-center mt-12">
          <Button variant="link" className="text-accent text-lg hover:text-accent/80">
            Browse More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;