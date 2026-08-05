"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { getTestimonials } from "../../../api/testimonial";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);

        const response = await getTestimonials();

        if (response?.status) {
          setTestimonials(response.data || []);
        } else {
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Testimonial Error:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    infinite: testimonials.length > 3,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="section-6 bg-remove py-xl-5 py-3"
      data-aos="fade-up"
    >
      <div className="container py-xl-4 py-3">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="section-title">
              <span>In their words</span>
              <h2>Stories from our travellers</h2>
              <p>
                Real experiences shared by our travellers — honest stories of
                journeys, memories, and moments that made their trips
                unforgettable.
              </p>
            </div>
          </div>

          {/* <div className="col-xl-5 mt-xl-0 mt-4 d-flex justify-content-xl-end">
            <Link href="/testimonials" className="btn btn-secondary">
              View all Stories
              <i className="bi bi-arrow-right ps-2"></i>
            </Link>
          </div> */}
        </div>

        <div className="row mt-5">
          <div className="col-12">

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary"></div>
              </div>
            ) : testimonials.length > 0 ? (
              <Slider {...settings}>
                {testimonials.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="px-2"
                  >
                    <div className="testimonial-card shadow-sm">
                      <div className="rating mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className="bi bi-star-fill active"
                          ></i>
                        ))}
                      </div>

                      <p className="testimonial-text">
                        "{item.text || item.description}"
                      </p>

                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <span>
                            {item.initials || item.name?.charAt(0)?.toUpperCase()}
                          </span>
                        )}
                      </div>

                        <div>
                          <h6 className="user-name mb-0">
                            {item.client_name}
                          </h6>

                          <small className="user-designation">
                            {item.designation || "Verified Traveller"}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="text-center py-5">
                <h5>No testimonials found.</h5>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}