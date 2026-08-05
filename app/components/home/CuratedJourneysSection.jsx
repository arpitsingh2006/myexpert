import Image from "next/image";
import { FaStar, FaArrowRight } from "react-icons/fa";

const trips = [
  {
    tag: "BESTSELLER",
    rating: 4.9,
    location: "Kashmir",
    duration: "6D / 5N",
    title: "Kashmir Valley Retreat",
    price: 899,
    image: "/images/kashmir.jpg",
  },
  {
    tag: "MOST LOVED",
    rating: 4.8,
    location: "Kerala",
    duration: "7D / 6N",
    title: "Kerala Backwater Bliss",
    price: 749,
    image: "/images/kerala.jpg",
  },
  {
    tag: "LUXURY",
    rating: 4.9,
    location: "Rajasthan",
    duration: "9D / 8N",
    title: "Royal Rajasthan Circuit",
    price: 1199,
    image: "/images/rajasthan.jpg",
  },
];

export default function CuratedJourneysSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap">
          <div>
            <h2 className="fw-bold display-6">
              Curated journeys, <br /> ready to begin
            </h2>
            <p className="text-muted mt-2">
              A short list of the trips our travellers love most this season — each fully attended by a personal concierge.
            </p>
          </div>

          <a href="#" className="text-decoration-none fw-semibold">
            View all packages <FaArrowRight className="ms-1" />
          </a>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {trips.map((trip, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-4">

                {/* Image */}
                <div className="position-relative">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    width={600}
                    height={400}
                    className="img-fluid"
                    style={{ objectFit: "cover", height: "240px" }}
                  />

                  {/* Badge */}
                  <span className="position-absolute top-0 start-0 m-3 badge bg-warning text-dark px-3 py-2">
                    {trip.tag}
                  </span>

                  {/* Rating */}
                  <span className="position-absolute top-0 end-0 m-3 bg-white px-2 py-1 rounded-pill shadow-sm small">
                    <FaStar className="text-warning me-1" />
                    {trip.rating}
                  </span>
                </div>

                {/* Content */}
                <div className="card-body">
                  <div className="text-muted small mb-1">
                    📍 {trip.location} • {trip.duration}
                  </div>

                  <h5 className="fw-semibold">{trip.title}</h5>

                  <div className="mt-3 d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted d-block">STARTING FROM</small>
                      <strong className="fs-5">${trip.price}</strong>
                    </div>

                    <a href="#" className="text-decoration-none fw-semibold">
                      View Trip →
                    </a>
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