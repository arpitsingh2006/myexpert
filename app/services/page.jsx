import BannerSection from "@/app/components/common/BannerSection";
import TourDetailsSection from "./TourDetailsSection";

export default function ServicesPage() {
  return (
    <>
      <BannerSection
        title="Jaipur Sightseeing Tour"
        description="Experience the royal charm of Jaipur with our carefully curated sightseeing package. Explore magnificent palaces, historic forts, bustling local markets, and world-famous landmarks while enjoying seamless transportation, expert guidance, and personalized service. Immerse yourself in Rajasthan's rich culture, heritage, and hospitality for a truly unforgettable travel experience."
        image="/images/travel-8.jpg"
        buttonText="Book Now"
        buttonUrl="/contact"
        showShareButton={true}
        location="Jaipur, Rajasthan"
        duration="3 Days / 2 Nights"
        rating="4.8"
        reviews="256"
        featured={true}
        bestSeller={true}
        breadcrumbs={[
            { label: "Home", url: "/" },
            { label: "Tours", url: "/tours" },
            { label: "Jaipur Sightseeing Tour" }
        ]}
        />
        <TourDetailsSection
  overview="Experience the Pink City in all its glory with our comprehensive Jaipur sightseeing tour."
  included={[
    "Amber Fort & Palace Complex",
    "City Palace & Museum",
    "Hawa Mahal",
    "Jantar Mantar",
    "Traditional Rajasthani Dinner"
  ]}
  itinerary={[
    {
      day: 1,
      title: "Arrival & City Palace",
      activities: [
        "Airport Pickup",
        "Hotel Check-in",
        "City Palace Visit"
      ]
    },
    {
      day: 2,
      title: "Amber Fort & Water Palace",
      activities: [
        "Amber Fort Visit",
        "Jal Mahal",
        "Shopping"
      ]
    }
  ]}
  inclusions={[
    "3 Star Hotel",
    "Breakfast",
    "Tour Guide"
  ]}
  exclusions={[
    "Personal Expenses",
    "Travel Insurance"
  ]}
  pricing={{
    price: "12,500",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 15",
    available: "Year Round",
    rating: "4.8",
    bookings: "500"
  }}
  assistance={{
    phone: "+91 9876543210",
    email: "info@example.com"
  }}
/>
    </>
  );
}