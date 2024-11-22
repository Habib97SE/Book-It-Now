import { FeatureSection } from "@/components/featured-section";
import HeroSection from "@/components/herosection";
import { HomeBlogSection } from "@/components/home-blog-section";
import { HowItWorks } from "@/components/how-it-works";
import { PopularService } from "@/components/popular-service";
import { ServiceSection } from "@/components/service-section";
import Head from "next/head";
import { getProviders } from "@/models/provider-model";
import { TopServicesSection } from "@/components/top-service-section";

function IndexPage() {

    getProviders();


    return (
        <>
            <Head>
                <title>
                    Book your next appointment here
                </title>
            </Head>
            <HeroSection />
            {/* Top Barbers */}
            <FeatureSection />
            {/* Categories */}
            <ServiceSection />
            <TopServicesSection />
            <HowItWorks />
            <HomeBlogSection />
        </>
    );
}

export default IndexPage;