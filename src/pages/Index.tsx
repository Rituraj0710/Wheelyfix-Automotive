import Header from "@/components/Header";
import DynamicHero from "@/components/DynamicHero";
import DynamicServices from "@/components/DynamicServices";
import DynamicProductCategory from "@/components/DynamicProductCategory";
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
      <DynamicHero />
      <DynamicServices />
      <DynamicProductCategory />
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