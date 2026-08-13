"use client";

import { useEffect, useState } from "react";
import PaginationSection from "../components/common/PaginationSection";
import { getBlogs } from "@/api/blog";

export default function AllBlog() {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const res = await getBlogs();

            if (res?.status) {
                const data = res.data

                    .filter((item) => Number(item.status) === 1)

                    .map((item) => ({
                        ...item,

                        featured_image: item.featured_image?.replace("http://expert.test", "https://expert.vikashproduction.com//"),

                        banner_image: item.banner_image?.replace("http://expert.test", "https://expert.vikashproduction.com//"),
                    }));

                setBlogs(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const filteredBlogs = blogs.filter((blog) => blog.title?.toLowerCase().includes(search.toLowerCase()));

    // Pagination Logic

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = (e) => {
        setSearch(e.target.value);

        setCurrentPage(1);
    };

    return (
        <section className="section-16 py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span>Latest Blogs</span>

                            <h2>Discover Travel Insights, Tips & Stories</h2>

                            <p>Read our latest blogs about travel, destinations and travel experiences.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-lg-end align-items-lg-center">
                        <div
                            className="search-box position-relative"
                            style={{
                                maxWidth: "380px",
                                width: "100%",
                            }}
                        >
                            <i className="bi bi-search search-icon"></i>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search blogs..."
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                            <div className="col-lg-4 col-md-6" key={blog.id}>
                                <div className="blog-card h-100 shadow-sm">
                                    <div className="blog-img position-relative">
                                        <img src={blog.featured_image} alt={blog.title} className="img-fluid" />

                                        {Number(blog.featured_blog) === 1 && (
                                            <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-3 d-flex flex-column h-100">
                                        <small className="text-muted mb-2">
                                            <i className="bi bi-calendar-event me-1"></i>

                                            {new Date(blog.created_at).toLocaleDateString()}
                                        </small>

                                        <h5 className="blog-title">{blog.title}</h5>

                                        <p className="blog-desc">
                                            {blog.description?.length > 110
                                                ? blog.description.substring(0, 110) + "..."
                                                : blog.description}
                                        </p>

                                        <div className="mt-auto">
                                            <a href={`/blog-detail?slug=${blog.slug}`} className="btn btn-secondary">
                                                Read More
                                                <i className="bi bi-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <h5>No blogs found</h5>
                        </div>
                    )}
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

                                        window.scrollTo({
                                            top: 0,

                                            behavior: "smooth",
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
