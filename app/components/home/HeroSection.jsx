"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getBanners } from "../../../api/banner";

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  // Demo Banner (Fallback)
  const demoSlides = [
    {
      id: 1,
      image: "/images/hero/banner-1.jpg",
      tagline: "🌍 Discover Amazing Destinations",
      title: "Your Dream Vacation Starts Here",
      description:
        "Explore breathtaking destinations, handpicked holiday packages, and unforgettable travel experiences. Book your next adventure with confidence and create unforgettable memories.",
    },
  ];

  // Banner State
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // Counter State
  const [destinations, setDestinations] = useState(0);
  const [tours, setTours] = useState(0);
  const [support, setSupport] = useState(0);

  // Counter Animation
  useEffect(() => {
    const animate = (target, setState, speed = 20) => {
      let i = 0;

      const interval = setInterval(() => {
        i++;
        setState(i);

        if (i >= target) {
          clearInterval(interval);
        }
      }, speed);
    };

    animate(50, setDestinations, 30);
    animate(500, setTours, 5);
    animate(24, setSupport, 80);
  }, []);

  // Banner API
  useEffect(() => {
    async function fetchBanner() {
      try {
        const response = await getBanners();

        if (
          response?.status &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          // API Data
          setSlides(response.data);
        } else {
          // No Banner Found
          setSlides(demoSlides);
        }
      } catch (error) {
        console.log("Banner API Error:", error);

        // API Error
        setSlides(demoSlides);
      } finally {
        setLoading(false);
      }
    }

    fetchBanner();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <section className="hero-section">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay"></div>

              <div className="hero-content">
                <div className="container">
                  <div className="row align-items-xl-center">
                    <div className="col-12 col-xl-6">
                      <span className="subtitle">
                        {slide.tagline}
                      </span>

                      <h1>{slide.title}</h1>

                      <p>{slide.description}</p>

                      <div className="hero-btns pb-xl-0 pb-5">
                        <a
                          href="#"
                          className="btn btn-white btn-radius"
                        >
                          <i className="bi bi-suitcase-lg-fill me-2"></i>
                          Book Your Adventure
                        </a>

                        <a
                          href="#"
                          className="btn btn-white-seconday btn-radius"
                        >
                          <i className="bi bi-calendar-check-fill me-2"></i>
                          Explore Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="hero-stats d-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row d-flex justify-content-start">
            <div className="col-12 col-xl-8">
              <div className="row">
                <div className="col stat-box mb-4 mb-xl-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt fs-3"></i>

                    <div className="ps-4">
                      <h3>{destinations}+</h3>
                      <p>Top Destinations</p>
                    </div>
                  </div>
                </div>

                <div className="col stat-box mb-4 mb-xl-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person fs-3"></i>

                    <div className="ps-4">
                      <h3>{tours}+</h3>
                      <p>Successful Tours</p>
                    </div>
                  </div>
                </div>

                <div className="col stat-box mb-4 mb-xl-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-star-fill fs-3"></i>

                    <div className="ps-4">
                      <h3>{support}/7</h3>
                      <p>Customer Support</p>
                    </div>
                  </div>
                </div>

                <div className="col stat-box mb-4 mb-xl-0">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-headset fs-3"></i>

                    <div className="ps-4">
                      <h3>10k+</h3>
                      <p>Happy Travelers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}