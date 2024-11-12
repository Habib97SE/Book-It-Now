import Card from "@/components/card";
import { FeatureSection } from "@/components/featured-section";
import HeroSection from "@/components/herosection";
import { ServiceSection } from "@/components/service-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
    </>
  );
}
