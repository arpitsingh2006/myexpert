import HeroSection from "./components/home/HeroSection";
import FeaturedTours from "./components/home/FeaturedTours";
import PopularDestination from "./components/home/PopularDestination";
import WhyTravelWithUs from "./components/home/WhyTravelWithUs";
import TravelCategories from "./components/home/TravelCategories";
import BestSelling from "./components/home/BestSelling";
import ExclusiveTravelPackage from "./components/home/ExclusiveTravelPackage";
import Testimonials from "./components/home/Testimonials";
import GallerySection from "@/app/components/common/GallerySection";
import CTASection from "@/app/components/common/CTASection";
import ShortCta from "@/app/components/common/ShortCta";
import LatestJournal from "./components/home/LatestJournal";
import CabServcie from "./components/home/CabServcie";
import { getSettings } from "@/api/settings";


export async function generateMetadata() {
  try {
    const res = await getSettings();
    const settings = res?.data;

    return {
      title: settings?.site_title || "MyXpertTrip",

      description:
        settings?.meta_description ||
        "Travel Booking Website",

      keywords:
        settings?.meta_keywords || "",

      openGraph: {
        title: settings?.site_title,
        description: settings?.meta_description,
      },

      twitter: {
        card: "summary_large_image",
        title: settings?.site_title,
        description: settings?.meta_description,
      },
    };
  } catch (error) {
    return {
      title: "MyXpertTrip",
      description: "Travel Booking Website",
    };
  }
}



const galleryImages = Array.from(
  { length: 20 },
  (_, index) => `/images/travel-${index + 1}.jpg`
);


export default function Home() {
  return (
    <>
     
      <HeroSection />
      <FeaturedTours />
      <ShortCta />
      <PopularDestination />
       <WhyTravelWithUs />
          <CabServcie />
        <Testimonials />
        <GallerySection title="Luxury Travel Moments" description="A curated collection of luxury travel memories and stunning destinations." subtitle="Captured Experiences"  images={galleryImages} />
        <CTASection />
      {/*<TravelCategories />
      <BestSelling />
      <ExclusiveTravelPackage />
      <Testimonials />
      <GallerySection title="Luxury Travel Moments" subtitle="Captured Experiences" images={galleryImages} />
      <LatestJournal />
       <CTASection /> */}
    </>
  );
}