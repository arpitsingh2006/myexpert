import Link from "next/link";
export default function BannerSection({
    title,
    description,
    buttonText,
    buttonUrl,
    image,
    breadcrumbs = [],
    featured = false,
    bestSeller = false,
    location = "",
    duration = "",
    rating = "",
    reviews = "",
    showShareButton = false,
    sectionClass = ""
}) {
    return (
        <section className={`section-12 ${sectionClass}`} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-title" data-aos="fade-up" data-aos-duration="1000">
                            {breadcrumbs.length > 0 && (
                                <div className="banner-breadcrumb">
                                    {breadcrumbs.map((item, index) => (
                                        <span key={index}>
                                            {item.url ? (
                                                <Link href={item.url}>{item.label}</Link>
                                                    ) : (
                                                    item.label
                                            )}
                                            {index < breadcrumbs.length - 1 && (
                                            <span> / </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {(featured || bestSeller) && (
                                <div className="tour-tags">
                                    {featured && (
                                        <span className="tag featured">
                                        Featured Tour
                                        </span>
                                    )}

                                    {bestSeller && (
                                        <span className="tag bestseller">
                                        Best Seller
                                        </span>
                                    )}
                                </div>
                            )}
                            <h1 data-aos="fade-down" data-aos-delay="200">
                                {title}
                            </h1>
                            {(location || duration || rating) && (
                                <div className="tour-meta">
                                    {location && (
                                        <span>
                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                            {location}
                                        </span>
                                    )}

                                    {duration && (
                                        <span>
                                            <i className="bi bi-clock-fill me-2"></i>
                                            {duration}
                                        </span>
                                    )}

                                    {rating && (
                                        <span>
                                            <i className="bi bi-star-fill me-2"></i>
                                            {rating}
                                        </span>
                                    )}
                                    {showShareButton && (
                                        <button type="button" className="btn btn-transparent share-btn">
                                            <i className="bi bi-share-fill me-2"></i>Share
                                        </button>
                                    )}
                                </div>
                            )}
                            <p data-aos="fade-up" data-aos-delay="400">
                                {description}
                            </p>
                            {buttonText && buttonUrl && (
                                <Link href={buttonUrl} className="btn btn-primary banner-btn" data-aos="zoom-in" data-aos-delay="600">
                                    {buttonText}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}