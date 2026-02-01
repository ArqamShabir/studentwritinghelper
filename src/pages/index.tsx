import Hero from "@/components/Hero";
import FeaturedCalculators from "@/components/FeaturedCalculators";
import SeoSection from "@/components/SeoSection";
import Testimonials from "@/components/Testinomials";
import HowItWorks from "@/components/HowItWorks";
import OurVision from "@/components/OverVision";

export default function Home() {
  return (
    <>
      <Hero/>
      <FeaturedCalculators/>
      <SeoSection/>
      <HowItWorks/> 
      <OurVision/>
      <Testimonials/>
    </>
  );
}
