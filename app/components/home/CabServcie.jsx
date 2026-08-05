"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getCabs } from "../../../api/cabs";

export default function CabService() {
    const [cabs, setCabs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });

        fetchCabs();
    }, []);

    const fetchCabs = async () => {
        try {
            const response = await getCabs();

            console.log("Cab API:", response);

            if (response?.status) {
                // only top 3 cabs
                setCabs(response.data.slice(0, 3));
            }
        } catch (error) {
            console.log("Cab API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-1 py-xl-5 py-3 mt-0">
            <div className="container py-xl-4 py-3">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="section-title">
                            <span>Top Travel Actions</span>

                            <h2>Explore. Plan. Book. Travel.</h2>

                            <p>
                                A curated set of travel actions to help you quickly choose, plan, and start your journey
                                with ease.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-5 d-flex justify-content-xl-end align-items-center mt-4 mt-xl-0">
                        <a href="/cabs" className="btn btn-primary-outline">
                            View all Cabs
                            <i className="bi bi-arrow-right ps-2"></i>
                        </a>
                    </div>
                </div>

                <div className="row mt-5">
                    {loading && <div className="text-center">Loading Cabs...</div>}

                    {!loading && cabs.length === 0 && <div className="text-center">No Cab Found</div>}

                    {cabs.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                            <div className="travel-card">
                                <div
                                    className="travel-card-img"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></div>

                                <div className="travel-card-content">
                                    <div className="d-flex justify-content-between location-text my-3">
                                        <div className="d-flex align-items-center">
                                            <span className="bi bi-geo-alt pe-2"></span>

                                            <span>{item.category?.name}</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <span className="bi bi-people pe-2"></span>

                                            <span>{item.seats} Seats</span>
                                        </div>
                                    </div>

                                    <div className="card-title mb-xl-4 mb-2">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    <div className="book-text">
                                        <div className="d-xl-flex justify-content-xl-between align-items-center">
                                            <div className="price">
                                                <p>Pricing</p>

                                                <div className="mt-2">
                                                    <div className="d-flex align-items-center gap-2 mb-1">
                                                        <b className="text-sm">Full Day:</b>

                                                        <span className="fw-bold">
                                                            ₹{item.full_day_price ?? "On Request"}
                                                        </span>
                                                    </div>

                                                    <div className="d-flex align-items-center gap-2">
                                                        <b className="text-sm">Per KM:</b>

                                                        <span className="fw-bold">
                                                            ₹{item.price_per_km ?? "On Request"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-2">
                                                <a href="tel:+911234567890" className="btn btn-primary">
                                                    <i className="bi bi-telephone-fill"></i>
                                                </a>

                                                <a href={`/cabs/${item.slug}`} className="btn btn-secondary">
                                                    Book Now
                                                    <i className="bi bi-arrow-right ps-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
