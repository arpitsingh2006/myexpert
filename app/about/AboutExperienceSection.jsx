export default function AboutExperienceSection({
    subtitle = "ABOUT MYXPERTTRIP",
    title = "Creating Unforgettable Travel Experiences Around The World",
    description = "At MyXpertTrion, we create personalized travel experiences designed around your interests, budget, and dreams. From luxury holidays to adventure escapes, every journey is carefully planned by travel experts.",
    image = "/images/travel-1.jpg",
}) {
    return (
        <section className="section-13">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="image-wrapper">
                            <img src={image} alt={title} className="img-fluid w-100" />
                            <div className="icon-box">
                                <span className="bi bi-airplane-fill"></span>
                            </div>
                            <div className="review-box">
                                <div className="stars">
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                </div>
                                <h5>4.9/5 Rating</h5>
                                <p>
                                    Trusted by 10,000+ Happy Travelers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="section-title">
                            <span className="me-2">{subtitle}</span>
                        </span>

                        <h2 className="my-3">{title}</h2>
                        <p>{description}</p>
                        <p>
                            Our dedicated travel specialists work closely with
                            every traveler to design seamless journeys, ensuring
                            comfort, convenience, and unforgettable memories
                            from start to finish.
                        </p>

                        <div className="row stats-row">

                            <div className="col-4">
                                <div className="stat-card">
                                    <h3>10K+</h3>
                                    <span>Travelers</span>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="stat-card">
                                    <h3>150+</h3>
                                    <span>Destinations</span>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="stat-card">
                                    <h3>4.9★</h3>
                                    <span>Rating</span>
                                </div>
                            </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-8 col-sm-12 col-md-12 col-xl-12">
                                <div className="mt-4 d-flex gap-3 flex-wrap">

                                    <a
                                        href="/packages"
                                        className="btn btn-primary"
                                    >
                                        <i className="bi bi-compass-fill me-2"></i>
                                        Explore Tours
                                    </a>

                                    <a
                                        href="/contact"
                                        className="btn btn-primary-outline"
                                    >
                                        <i className="bi bi-chat-dots-fill me-2"></i>
                                        Get Custom Quote
                                    </a>

                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
        </section>
    );
}