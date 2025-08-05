const Brands = () => {
  const brands = [
    { name: "TVS", logo: "🏍️" },
    { name: "Suzuki", logo: "🏍️" },
    { name: "Hero", logo: "🏍️" },
    { name: "Bajaj", logo: "🏍️" },
    { name: "Honda", logo: "🏍️" },
    { name: "Royal Enfield", logo: "🏍️" },
    { name: "Mahindra", logo: "🚗" },
    { name: "KTM", logo: "🏍️" },
    { name: "Jawa", logo: "🏍️" },
    { name: "Yamaha", logo: "🏍️" },
    { name: "Kawasaki", logo: "🏍️" },
    { name: "Aprilia", logo: "🏍️" },
    { name: "Okaya", logo: "⚡" },
    { name: "Okinawa", logo: "⚡" },
    { name: "Ather", logo: "⚡" },
    { name: "Ola", logo: "⚡" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Brands We Serve</h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group text-center"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <div className="text-xs font-medium text-gray-700">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;