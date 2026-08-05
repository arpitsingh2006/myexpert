"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TravelCategories() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  

  return (
    <section className="section-4 py-xl-5 py-3">
        <div className="container py-xl-4 py-3">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="section-title text-center">
                        <span>Travel Categories</span>
                        <h2>Choose the kind of trip that calls you</h2>
                    </div>
                </div>
                
            </div>
            <div className="row mt-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-tree-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Beach & Islands</h4>
                            <p>18 journeys</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-bar-chart-steps"></i>
                        </div>
                        <div className="text">
                            <h4>Mountain Escapes</h4>
                            <p>32 journeys</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-buildings-fill"></i>
                        </div>
                        <div className="text">
                            <h4>City & Culture </h4>
                            <p>15 journeys</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-clock-history"></i>
                        </div>
                        <div className="text">
                            <h4>Adventure</h4>
                            <p>21 journeys</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-suit-heart-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Honeymoon</h4>
                            <p>27 journey</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                    <div className="travel-category">
                        <div className="icon">
                            <i className="bi bi-heart-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Family</h4>
                            <p>24 journeys</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  );
}