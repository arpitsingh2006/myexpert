import BannerSection from "@/app/components/common/BannerSection";
import AboutExperienceSection from "./AboutExperienceSection";
import JourneyVisionSection from "./JourneyVisionSection";
import ShortCta from "@/app/components/common/ShortCta";
import Testimonials from "@/app/components/home/Testimonials";
import CTASection from "@/app/components/common/CTASection";
import StatsCounterSection from "@/app/components/common/StatsCounterSection";





export default function AboutPage() {
  return (
    <>
        <BannerSection
            title="Explore the World with MyXpertTrip"
            description="Discover the world with MyXpertTrion — where every journey is thoughtfully designed for comfort, luxury, and unforgettable experiences. From curated holiday packages to personalized itineraries, we turn your travel dreams into reality with seamless planning and expert guidance."
            image="/images/travel-25.jpg"
            buttonText="Plan Your Trip Now"
            buttonUrl="/contact"
            showShareButton={true}
    />
    <AboutExperienceSection/>
    <ShortCta />
    
    <JourneyVisionSection />
    <Testimonials />
    <StatsCounterSection />
    <CTASection/>
        
    </>
  );
}