"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getDestinationFeatures } from "@/api/destinationFeature";

export default function PopularDestination() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    try {
      const res = await getDestinationFeatures();

      console.log("API Response:", res);

      if (res?.status) {
        const activeDestinations = res.data
          .filter((item) => Number(item.status) === 1)
          .map((item) => ({
            ...item,
            icon: item.icon
              ? item.icon
                  .replace("http://expert.test", "https://expert.vikashproduction.com/")
                  .replace("/destination-features/", "/destination-feature/")
              : "/images/no-image.jpg",
          }));

        console.log("Updated Data:", activeDestinations);

        setDestinations(activeDestinations);
      }
    } catch (error) {
      console.error("Destination Feature Error:", error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
    <section className="section-2 py-xl-5 py-3">
      <div className="container py-xl-4 py-3">
        <div className="row">
          <div className="col-xl-7">
            <div className="section-title">
              <span>Popular Destinations</span>
              <h2>Where wanderers are heading</h2>
              <p>Seven worlds, infinite ways to discover them.</p>
            </div>
          </div>

          <div className="col-xl-5 d-flex justify-content-xl-end align-items-center mt-xl-0 mt-4">
            <a href="#" className="btn btn-secondary">
              View all Destinations
              <i className="bi bi-arrow-right ps-2"></i>
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <Slider {...settings}>
              {destinations.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="popular-destinations-card">
                    <div
                      className="popular-destinations-card-img"
                      style={{
                        backgroundImage: `url("${item.icon}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="popular-destinations-card-content w-100">
                        <div className="card-title mb-4">
                          <div className="d-flex justify-content-center">
                            <div>
                              <h3>{item.title}</h3>
                              {/* <p>{item.description}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}