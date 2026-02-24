import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ShowroomSection } from "@/components/ShowroomSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import TopButton from "@/components/Button/Top-btn";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="py-4 px-5 sm:px-8 md:px-16 lg:px-32 bg-gray-100">
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <CollectionsSection />
        <WhyChooseUsSection />
        <ShowroomSection />
        <CTASection />
        <Footer />
        <TopButton />
      </div>
    </div>
  );
}
