import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import FeaturedCalculators from "@/components/FeaturedCalculators";
import SeoSection from "@/components/SeoSection";
import Testimonials from "@/components/Testinomials";
import HowItWorks from "@/components/HowItWorks";
import JoinCommunity from "@/components/JoinCommunity";
import OurVision from "@/components/OverVision";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
