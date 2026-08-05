"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GallerySection({
  title = "Travel Gallery",
  subtitle = "Explore Beautiful Destinations",
  description="Explore breathtaking luxury travel moments from around the world, capturing elegance, comfort, and unforgettable experiences.",
  images = [],
}) {
  // Always generate fallback images correctly
  const galleryImages =
    images && images.length > 0
      ? images
      : Array.from(
          { length: 20 },
          (_, index) => `/images/travel-${index + 1}.jpg`
        );

  return (
    <section className="section-7 py-5">
      <div className="container">

        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span>{subtitle}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="row mt-4">
          <div className="col-12">

            <PhotoProvider>
              <div className="masonry-grid mt-4">

                {galleryImages.map((image, index) => (
                  <PhotoView key={index} src={image}>
                    <div className="gallery-item">
                      <Image
                        src={image}
                        alt={`Travel Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="gallery-image"
                        loading="lazy"
                      />
                    </div>
                  </PhotoView>
                ))}

              </div>
            </PhotoProvider>

          </div>
        </div>

      </div>
    </section>
  );
}