import { ReactNode } from "react";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  children?: ReactNode;
};

const PageBanner = ({ title, subtitle, imageUrl, children }: PageBannerProps) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20 md:py-28 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">{subtitle}</p>
          )}
          {children && <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;


