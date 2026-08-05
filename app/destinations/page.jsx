"use client";

import { useEffect, useState } from "react";
import BannerSection from "@/app/components/common/BannerSection";
import PaginationSection from "../components/common/PaginationSection";
import { getDestinationFeatures } from "@/api/destinationFeature";

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    try {
      const res = await getDestinationFeatures();

      if (res?.status) {
        const data = res.data
          .filter((item) => Number(item.status) === 1)
          .map((item) => ({
            ...item,
            icon: item.icon
              ?.replace("http://expert.test", "https://expert.vikashproduction.com/")
              ?.replace("/destination-features/", "/destination-feature/"),
          }));

        setDestinations(data);
      }
    } catch (error) {
      console.error("Destination API Error:", error);
    }
  };

  // Search Filter
  const filteredDestinations = destinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <BannerSection
        title="Explore Incredible India"
        description="Discover handpicked destinations across India. From mountains to beaches, culture to adventure — plan your perfect journey with MyXpertTrip."
        image="/images/travel-25.jpg"
        buttonText="Start Your Journey"
        buttonUrl="/contact"
        showShareButton={true}
      />

      <section className="section-21 py-xl-5 py-3">
        <div className="container py-xl-4 py-3">

          {/* Header + Search */}
          <div className="row mb-4">

            <div className="col-12 col-lg-6">
              <div className="section-title">
                <span>Top Destinations</span>
                <h2>Choose your dream travel destination</h2>
                <p>
                  Handpicked locations across mountains, beaches, heritage &
                  adventure experiences in India.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end align-items-lg-center mt-3 mt-lg-0">
              <div
                className="search-box position-relative w-100"
                style={{ maxWidth: "380px" }}
              >
                <i className="bi bi-search search-icon"></i>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* Destinations */}
          <div className="row g-4 mt-2">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="destination-card">

                    <div className="destination-img">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src = "/images/travel-1.jpg";
                        }}
                      />

                      <div className="dest-badge">
                        <i className="bi bi-geo-alt"></i> India Tour
                      </div>
                    </div>

                    <div className="p-xl-4 p-3">
                      <h5>{item.title}</h5>

                      <div className="dest-meta">
                        <span>
                          <i className="bi bi-map"></i> India
                        </span>

                        <span>
                          <i className="bi bi-star-fill"></i> 4.8
                        </span>

                        <span>
                          <i className="bi bi-clock"></i> 3-7 Days
                        </span>
                      </div>

                      <p>
                        {item.description?.length > 120
                          ? item.description.substring(0, 120) + "..."
                          : item.description}
                      </p>

                      <a
                        href="/packages"
                        className="btn btn-secondary"
                        title="View Packages"
                      >
                        <i className="bi bi-send pe-2"></i>
                        View Packages
                      </a>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h5>No destinations found.</h5>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="row pt-xl-4 pt-2">
            <div className="col-12 d-flex justify-content-end">
              <div className="pagination-wrapper mt-0">
                <PaginationSection
                  currentPage={1}
                  totalPages={1}
                  onPageChange={(page) => console.log(page)}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}