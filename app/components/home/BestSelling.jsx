"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BestSelling() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  

  return (
    <section className="section-1 py-xl-5 py-3 comman-section">
        <div className="container py-xl-4 py-3">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="section-title text-center">
                        <span>Best Selling</span>
                        <h2>Our most-loved itineraries</h2>
                        <p>Year after year, these journeys quietly fill up first.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="travel-card">
                        <div className="travel-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="badge-custom">
                                        <span>Bestseller</span>
                                    </div>
                                    <div>
                                        <span className="rating"><i className="bi bi-star-fill pe-2"></i>4.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="travel-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-geo-alt pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>kashmir</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>7D / 6N</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>Kashmir Valley Retreat</h3>
                            </div>
                            <div className="book-text">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="price">
                                        <p>Starting from</p>
                                        <b>₹12000</b>
                                    </div>
                                    <div className="btn-book">
                                        <a href="#" className="view-more" title="View Trip">View Trip <i className="bi bi-arrow-right ps-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="travel-card">
                        <div className="travel-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="badge-custom">
                                        <span>Bestseller</span>
                                    </div>
                                    <div>
                                        <span className="rating"><i className="bi bi-star-fill pe-2"></i>4.9</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="travel-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-geo-alt pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>kashmir</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>7D / 6N</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>Kashmir Valley Retreat</h3>
                            </div>
                            <div className="book-text">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="price">
                                        <p>Starting from</p>
                                        <b>₹12000</b>
                                    </div>
                                    <div className="btn-book">
                                        <a href="#" className="view-more" title="View Trip">View Trip <i className="bi bi-arrow-right ps-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="travel-card">
                        <div className="travel-card-img" style={{ backgroundImage: "url('/images/card-image-1.png')" }}>
                            <div className="image-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="badge-custom">
                                        <span>Bestseller</span>
                                    </div>
                                    <div>
                                        <span className="rating"><i className="bi bi-star-fill pe-2"></i>4.9</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="travel-card-content">
                            <div className="d-flex location-text my-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <span className="bi bi-geo-alt pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>kashmir</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-2">
                                    <div className="icon">
                                        <span className="bi bi-stopwatch pe-2"></span>
                                    </div>
                                    <div className="text">
                                        <span>7D / 6N</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title mb-4">
                                <h3>Kashmir Valley Retreat</h3>
                            </div>
                            <div className="book-text">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="price">
                                        <p>Starting from</p>
                                        <b>₹12000</b>
                                    </div>
                                    <div className="btn-book">
                                        <a href="#" className="view-more" title="View Trip">View Trip <i className="bi bi-arrow-right ps-2"></i></a>
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