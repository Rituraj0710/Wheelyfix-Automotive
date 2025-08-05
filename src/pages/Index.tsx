import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductCategory from "@/components/ProductCategory";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import Brands from "@/components/Brands";
import RecentBlogs from "@/components/RecentBlogs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ProductCategory />
      <HowWeWork />
      <Testimonials />
      <AppDownload />
      <Brands />
      <RecentBlogs />
      <Footer />
    </div>
  );
};

export default Index;