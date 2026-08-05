import BannerSection from "@/app/components/common/BannerSection";
import CabServcie from "./CabServcie";

export default function cabsPage() {
  return (
    <>
      <BannerSection
        title="All Cabs in One Place"
        description="Discover our complete fleet of reliable and comfortable cabs for local travel, airport transfers, outstation journeys, and corporate transportation. Choose the perfect ride for every destination."
        image="/images/cabs.jpg"
        buttonText="View Available Cabs"
        buttonUrl="/cabs"
    />
    <CabServcie />
    
        
    </>
  );
}