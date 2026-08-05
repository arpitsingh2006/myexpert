"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";


export default function LatestJournal() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  

  return (
    <section className="section-9 py-xl-5 py-3">
        <div className="container py-xl-4 py-3">
            <div className="row">
                <div className="col-7">
                    <div className="section-title">
                        <span>Latest from the journal</span>
                        <h2>Read before you go</h2>
                    </div>
                </div>
                <div className="col-5 d-flex justify-content-end align-items-center">
                    <a href="#"  title="All entries">All entries <i className="bi bi-arrow-right ps-2"></i></a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="journal-card">
                        <div className="journal-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content"></div>
                        </div>
                        <div className="journal-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-calendar4 pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>May 12, 2026</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>How we plan a Maldives trip you'll actually remember</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="journal-card">
                        <div className="journal-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content"></div>
                        </div>
                        <div className="journal-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-geo-alt pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>May 12, 2026</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>Rajasthan in three palaces: a slow circuit</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="journal-card">
                        <div className="journal-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content"></div>
                        </div>
                        <div className="journal-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-geo-alt pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>May 12, 2026</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>What changes about Bali after the third visit</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    
  );
}