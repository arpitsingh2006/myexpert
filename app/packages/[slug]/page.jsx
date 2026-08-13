import BannerSection from "@/app/components/common/BannerSection";
import TourDetailsSection from "../TourDetailsSection";
import { getPackageBySlug } from "../../../api/packages";

export default async function ServicesPage({ params }) {
  const { slug } = await params;

  const response = await getPackageBySlug(slug);
  const pkg = response?.data;

  if (!pkg) {
    return <div className="text-center py-5">Package Not Found</div>;
  }

  return (
    <>
      <BannerSection
        title={pkg.package_name}
        description={pkg.description}
        image={pkg.cover_image || pkg.image}
        buttonText="Book Now"
        buttonUrl={`/booking?packageId=${pkg.id}&packageName=${encodeURIComponent(pkg.package_name)}&category=${encodeURIComponent(pkg.category?.name || "")}&basePrice=${pkg.price_per_person}`}
        showShareButton={true}
        location={pkg.location}
        duration={pkg.duration_string}
        featured={true}
        bestSeller={true}
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Tours", url: "/packages" },
          { label: pkg.package_name },
        ]}
      />

      <TourDetailsSection
        overview={pkg.description}
        included={pkg.highlights || []}
        itinerary={pkg.itinerary_data || []}
        inclusions={pkg.inclusions || []}
        exclusions={pkg.exclusions || []}
        faq={pkg.faq_data || []}
        pricing={{
          price: pkg.price_per_person,
          couplePrice: pkg.couple_price,
          currency: pkg.currency,
          duration: pkg.duration_string,
        }}
        assistance={{
          phone: "+91 9876543210",
          email: "info@example.com",
        }}
      />
    </>
  );
}