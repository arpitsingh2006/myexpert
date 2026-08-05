"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PaginationSection from "../components/common/PaginationSection";
import { getCabs } from "../../api/cabs";

export default function FeaturedTours() {
    const [cabs, setCabs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });

        loadCabs();
    }, []);

    const loadCabs = async () => {
        try {
            const res = await getCabs();

            console.log(res);

            if (res?.status) {
                setCabs(res.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredCabs = cabs.filter((cab) =>
        `${cab.title} ${cab.category?.name}`.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCabs.length / itemsPerPage);

    const currentData = filteredCabs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="section-1 py-xl-5 py-3 mt-0">
            <div className="container py-xl-4 py-3">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title">
                            <span>All Cabs</span>

                            <h2>Choose the Right Cab for Every Journey</h2>

                            <p>
                                Browse our wide range of reliable and comfortable cabs including sedans, SUVs, luxury
                                cars and tempo travellers.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-6 d-flex justify-content-xl-end align-items-center mt-xl-0 mt-4">
                        <div className="search-box position-relative" style={{ maxWidth: "350px", width: "100%" }}>
                            <i className="bi bi-search search-icon"></i>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search cabs..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-xl-5 mt-3">
                    {loading && <div className="text-center py-5">Loading Cabs...</div>}

                    {!loading && currentData.length === 0 && <div className="text-center py-5">No Cabs Found</div>}

                    {currentData.map((cab) => (
                        <div className="col-lg-4 col-md-6 mt-4" key={cab.id} data-aos="fade-up">
                            <div className="travel-card h-100">
                                <div
                                    className="travel-card-img"
                                    style={{
                                        backgroundImage: `url(${cab.image})`,
                                    }}
                                ></div>

                                <div className="travel-card-content">
                                    <div className="d-flex justify-content-between location-text my-3">
                                        <div className="d-flex align-items-center">
                                            <span className="bi bi-car-front-fill pe-2"></span>

                                            <span>{cab.category?.name}</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <span className="bi bi-people-fill pe-2"></span>

                                            <span>{cab.seats} Seats</span>
                                        </div>
                                    </div>

                                    <div className="card-title mb-xl-4 mb-2">
                                        <h3>{cab.title}</h3>

                                        <p>{cab.description}</p>
                                    </div>

                                    <div className="book-text">
                                        <div className="d-xl-flex justify-content-xl-between align-items-center">
                                            <div className="price">
                                                <p>Pricing</p>

                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-1">
                                                        <b className="text-sm">Full Day:</b>

                                                        <span className="fw-bold text-primary">
                                                            ₹{cab.full_day_price ?? "On Request"}
                                                        </span>
                                                    </div>

                                                    <div className="d-flex align-items-center gap-2">
                                                        <b className="text-sm">Per KM:</b>

                                                        <span className="fw-bold">
                                                            ₹{cab.price_per_km ?? "On Request"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-2">
                                                <a href="tel:+911234567890" className="btn btn-primary">
                                                    <i className="bi bi-telephone-fill"></i>
                                                </a>

                                                <a href={`/cabs/${cab.slug}`} className="btn btn-secondary">
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

                {!loading && totalPages > 1 && (
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-end">
                            <PaginationSection
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) => {
                                    setCurrentPage(page);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
