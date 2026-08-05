"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExclusiveTravelPackage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);



  

  return (
    <section className="section-5 py-xl-5 py-3">
        <div className="container py-xl-4 py-3">
            <div className="row mt-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="travel-card">
                        <div className="travel-card-img  d-flex flex-column justify-content-between" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content">
                                <div>
                                    <div className="badge-custom">
                                        <span>Limited · 12 spots</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3>Maldives, all-inclusive</h3>
                                        <p>5 nights overwater, seaplane transfers, daily à la carte dining. Travel before December.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center price-section">
                                <div className="price">
                                    <span>From ₹1,8999</span>
                                </div>
                                 <div className="price">
                                    <a href="#">View deal <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="travel-card">
                        <div className="travel-card-img  d-flex flex-column justify-content-between" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content">
                                <div>
                                    <div className="badge-custom">
                                        <span>Limited · 12 spots</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3>Maldives, all-inclusive</h3>
                                        <p>5 nights overwater, seaplane transfers, daily à la carte dining. Travel before December.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center price-section">
                                <div className="price">
                                    <span>From ₹1,8999</span>
                                </div>
                                 <div className="price">
                                    <a href="#">View deal <i className="bi bi-arrow-right"></i></a>
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