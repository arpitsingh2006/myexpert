"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyTravelWithUs() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  

  return (
    <section className="section-3 py-xl-5 py-3">
        <div className="container py-xl-4 py-3">
            <div className="row">
                <div className="col-12 ">
                    <div className="section-title">
                        <span>Why Travel With Us</span>
                        <h2>The difference, in four parts</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-xl-0">
                    <div className="travel-box">
                        <div className="icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <div className="text">
                            <h4>Personal concierge</h4>
                            <p>One human, on call, end to end. No call-centres, no scripts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-xl-0">
                    <div className="travel-box">
                        <div className="icon">
                            <i className="bi bi-heart-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Quietly handled</h4>
                            <p>Visas, transfers, last-minute changes — invisibly managed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-xl-0">
                    <div className="travel-box">
                        <div className="icon">
                            <i className="bi bi-stars"></i>
                        </div>
                        <div className="text">
                            <h4>Hand-picked stays</h4>
                            <p>Only places we'd send our closest friends. Often, we have.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-xl-0">
                    <div className="travel-box">
                        <div className="icon">
                            <i className="bi bi-globe-americas"></i>
                        </div>
                        <div className="text">
                            <h4>On-ground experts</h4>
                            <p>Local partners in every country — not a website that drops off.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
}