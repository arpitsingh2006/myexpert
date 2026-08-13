"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerSection from "@/app/components/common/BannerSection";
import PaginationSection from "@/app/components/common/PaginationSection";
import { getPackagesByCategory } from "@/api/packageCategory";

export default function AllPackage({ slug }) {
    const [packages, setPackages] = useState([]);
    const [category, setCategory] = useState(null);
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

        if (slug) {
            fetchPackagesByCategory();
        }
    }, [slug]);

    const fetchPackagesByCategory = async () => {
        try {
            setLoading(true);

            const response = await getPackagesByCategory(slug);

            console.log("Category Packages API:", response);

            if (response?.status) {
                setPackages(response.data || []);
                setCategory(response.category || null);
            } else {
                setPackages([]);
                setCategory(null);
            }
        } catch (error) {
            console.log("Category Package API Error:", error);
            setPackages([]);
            setCategory(null);
        } finally {
            setLoading(false);
        }
    };

    const filteredPackages = packages.filter((item) =>
        item.package_name?.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

    const currentPackages = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <BannerSection
                title={category ? category.name : "Explore Travel Packages"}
                description={
                    category
                        ? "Discover our best " + category.name + " packages, carefully designed to give you a seamless and unforgettable travel experience."
                        : "Discover packages designed for your perfect journey."
                }
                image="/images/travel-18.jpg"
                buttonText="View All Packages"
                buttonUrl="/packages"
            />

            <section className="section-1 py-xl-5 py-3 mt-0">
                <div className="container py-xl-4 py-3">

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <span>Travel Packages</span>

                                <h2>
                                    {category ? category.name + " Packages" : "Discover Your Perfect Travel Experience"}
                                </h2>

                                <p>
                                    Explore our carefully crafted travel packages and find the perfect experience for your next journey.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-6 d-flex justify-content-end align-items-center mt-xl-0 mt-4">
                            <div className="search-box position-relative">
                                <i className="bi bi-search search-icon"></i>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search packages..."
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-xl-5 mt-2">

                        {loading && (
                            <div className="col-12 text-center">
                                <p>Loading Packages...</p>
                            </div>
                        )}

                        {!loading && currentPackages.length === 0 && (
                            <div className="col-12 text-center">
                                <h5>No Packages Found</h5>
                            </div>
                        )}

                        {!loading && currentPackages.map((item) => (
                            <div
                                className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                                key={item.id}
                                data-aos="fade-up"
                            >
                                <div className="travel-card">

                                    <div
                                        className="travel-card-img"
                                        style={{
                                            backgroundImage: "url(" + item.image + ")",
                                        }}
                                    />

                                    <div className="travel-card-content">

                                        <div className="d-flex justify-content-between location-text my-3">
                                            <div className="d-flex align-items-center">
                                                <span className="bi bi-geo-alt pe-2"></span>
                                                <span>{item.location}</span>
                                            </div>

                                            <div className="d-flex align-items-center ms-2">
                                                <span className="bi bi-stopwatch pe-2"></span>
                                                <span>{item.duration_string}</span>
                                            </div>
                                        </div>

                                        <div className="card-title mb-xl-4 mb-2">
                                            <h3>{item.package_name}</h3>
                                            <p>{item.description}</p>
                                        </div>

                                        <div className="book-text">
                                            <div className="d-xl-flex justify-content-xl-between align-items-center">
                                                <div className="price">
                                                    <p>Starting from</p>

                                                    <div className="d-flex align-items-center gap-2">
                                                        <del className="old-price">
                                                            {"₹" + (Number(item.price_per_person) + 3000)}
                                                        </del>
                                                        <b>{"₹" + item.price_per_person}</b>
                                                    </div>
                                                </div>

                                                <div className="d-flex gap-2">
                                                    <a
                                                        href="tel:+911234567890"
                                                        className="btn btn-primary"
                                                        title="Call Now"
                                                    >
                                                        <i className="bi bi-telephone-fill"></i>
                                                    </a>

                                                    <Link
                                                        href={`/booking?packageId=${item.id}&packageName=${encodeURIComponent(item.package_name)}&category=${encodeURIComponent(category?.name || "")}&basePrice=${item.price_per_person}`}
                                                        className="btn btn-secondary"
                                                    >
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {totalPages > 1 && (
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <div className="pagination-wrapper mt-4">
                                    <PaginationSection
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={(page) => {
                                            setCurrentPage(page);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}