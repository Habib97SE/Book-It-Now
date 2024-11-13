import { FeatureSection } from "@/components/featured-section";
import HeroSection from "@/components/herosection";
import { HowItWorks } from "@/components/how-it-works";
import { PopularService } from "@/components/popular-service";
import { ServiceSection } from "@/components/service-section";

function IndexPage() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <ServiceSection />
            <HowItWorks />
            <ServiceSection />
        </>
    );
}

export default IndexPage;