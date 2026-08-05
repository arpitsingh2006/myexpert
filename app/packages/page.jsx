import BannerSection from "@/app/components/common/BannerSection";
import FeaturedTours from "./FeaturedTours";

export default function packagesPage() {
  return (
    <>
    <BannerSection
        title="Explore All Travel Packages"
        description="Discover our complete range of travel packages including family tours, honeymoon trips, adventure tours, luxury holidays, and customized itineraries. Each package is carefully designed to give you a seamless and unforgettable travel experience across India and beyond."
        image="/images/travel-18.jpg"
        buttonText="View All Packages"
        buttonUrl="/packages"
    />
    <FeaturedTours />
    
        
    </>
  );
}