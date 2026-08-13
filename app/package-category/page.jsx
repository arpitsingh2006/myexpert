"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { getPackageCategories } from "../../api/packageCategory";

export default function PackageCategoryPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });

        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const response = await getPackageCategories();

            console.log("Package Categories API:", response);

            if (response?.status) {
                const activeCategories = (response.data || []).filter(
                    (category) => Number(category.status) === 1
                );

                setCategories(activeCategories);
            } else {
                setCategories([]);
            }
        } catch (error) {
            console.log("Package Category API Error:", error);
            setCategories([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-1 py-xl-5 py-3">
            <div className="container py-xl-4 py-3">

                {/* Heading */}
                <div className="row mb-4 mb-xl-5">
                    <div className="col-xl-8">
                        <div className="section-title">
                            <span>Travel Categories</span>

                            <h2>
                                Explore Our Travel Packages
                            </h2>

                            <p>
                                Choose a travel category and explore
                                packages specially designed for your
                                perfect journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Loading Categories...</p>
                        </div>
                    </div>
                )}

                {/* No Categories */}
                {!loading && categories.length === 0 && (
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>No Categories Found</h5>
                        </div>
                    </div>
                )}

                {/* Categories */}
                {!loading && categories.length > 0 && (
                    <div className="row g-4">

                        {categories.map((category) => (
                            <div
                                className="col-12 col-sm-6 col-md-6 col-lg-4"
                                key={category.id}
                                data-aos="fade-up"
                            >
                                <div className="travel-card h-100">

                                    {/* Category Image */}
                                    <div
                                        className="travel-card-img"
                                        style={{
                                            backgroundImage: `url(${category.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="travel-card-content">

                                        <div className="card-title mb-3">
                                            <h3>
                                                {category.name}
                                            </h3>

                                            {category.description && (
                                                <p>
                                                    {category.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* View Packages */}
                                        <div className="book-text">

                                           <Link
    href={`/package-category/${category.slug}`}
    className="btn btn-secondary"
>
    View Packages
    <i className="bi bi-arrow-right ps-2"></i>
</Link>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}