"use client";

import { useState } from "react";
import BannerSection from "@/app/components/common/BannerSection";

export default function TravelGalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(false);

  const images = Array.from(
    { length: 21 },
    (_, i) => `/images/travel-${i + 1}.jpg`
  );

  const openImage = (index) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // LOAD MORE WITH LOADER
  const handleLoadMore = () => {
  setLoading(true);

  setTimeout(() => {
    setVisibleCount((prev) => prev + 20);
    setLoading(false);
  }, 800);
};

  return (
    <>
      {/* BANNER */}
      <BannerSection
        title="Travel Gallery"
        description="Explore beautiful travel memories captured across India including mountains, beaches, safari, luxury stays, adventure tours and unforgettable happy moments."
        image="/images/travel-18.jpg"
      />

      {/* SECTION */}
      <section className="py-xl-5 py-3 section-18">
        <div className="container">

          {/* TITLE */}
          <div className="row mb-5">
            <div className="col-12 text-center section-title">
              <span>Travel Gallery</span>
              <h2>Captured Travel Moments</h2>
              <p>
                Click on any image to explore full view of our travel experiences,
                destinations and happy traveler moments.
              </p>
            </div>
          </div>

        </div>

        {/* MASONRY GRID */}
        <div className="container-fluid">
          <div className="masonry-grid">

            {images.slice(0, visibleCount).map((img, index) => (
              <div
                key={index}
                className="masonry-item"
                onClick={() => openImage(index)}
              >
                <div className="img-box">
                  <img src={img} alt={`Travel ${index + 1}`} />

                  <div className="overlay">
                    <i className="bi bi-arrows-fullscreen"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* LOAD MORE */}
          {visibleCount < images.length && (
            <div className="text-center mt-xl-5 mt-4">
              <button
                className="btn btn-primary px-4 py-2 d-inline-flex align-items-center gap-2"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></span>
                    Loading...
                  </>
                ) : (
                  <>
                    Load More <i className="bi bi-arrow-down-circle"></i>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="gallery-lightbox">
          <div className="lightbox-overlay" onClick={closeImage}></div>

          <div className="lightbox-content">
            <button className="close-btn" onClick={closeImage}>×</button>

            <button className="nav-btn left" onClick={prevImage}>‹</button>

            <img src={images[activeIndex]} alt="preview" />

            <button className="nav-btn right" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </>
  );
}