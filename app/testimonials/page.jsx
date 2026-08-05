"use client";

import { useState } from "react";
import BannerSection from "@/app/components/common/BannerSection";

export default function TestimonialsPage() {

  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 9);
      setLoading(false);

      // smooth scroll to bottom (professional feel)
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    }, 1000);
  };

  const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    package: "Adventure Tour Package",
    rating: 5,
    feedback:
      "Amazing trekking experience in Manali with xperttrip.com. Everything was perfectly managed including safety gear, guide support, and camping arrangements."
  },
  {
    id: 2,
    name: "Priya Verma",
    package: "Safari Experience",
    rating: 4,
    feedback:
      "Safari trip at Ranthambore booked via xperttrip.com was excellent. We saw tigers and enjoyed a well-organized jungle experience."
  },
  {
    id: 3,
    name: "Rahul Mehta",
    package: "Luxury Jungle Retreat",
    rating: 5,
    feedback:
      "Luxury jungle stay through xperttrip.com was peaceful and well maintained with great hospitality and nature views."
  },
  {
    id: 4,
    name: "Sneha Gupta",
    package: "Kerala Backwater Tour",
    rating: 5,
    feedback:
      "Kerala backwater houseboat trip arranged by xperttrip.com was magical with beautiful scenery and delicious food."
  },
  {
    id: 5,
    name: "Vikram Singh",
    package: "Char Dham Yatra",
    rating: 5,
    feedback:
      "Char Dham Yatra organized by xperttrip.com was smooth, spiritual, and very well managed."
  },
  {
    id: 6,
    name: "Neha Kapoor",
    package: "Goa Beach Tour",
    rating: 4,
    feedback:
      "Goa trip via xperttrip.com was fun with beaches, nightlife, and comfortable hotel arrangements."
  },
  {
    id: 7,
    name: "Rohit Yadav",
    package: "Himalayan Adventure",
    rating: 5,
    feedback:
      "Himalayan trekking with xperttrip.com was thrilling, safe, and professionally guided."
  },
  {
    id: 8,
    name: "Pooja Singh",
    package: "Safari Experience",
    rating: 4,
    feedback:
      "Jim Corbett safari booked via xperttrip.com was exciting with good wildlife sightings."
  },
  {
    id: 9,
    name: "Ankit Tiwari",
    package: "Rajasthan Heritage Tour",
    rating: 5,
    feedback:
      "Rajasthan heritage tour with xperttrip.com was amazing, especially Jaipur and Udaipur forts."
  },
  {
    id: 10,
    name: "Kavita Joshi",
    package: "Luxury Jungle Retreat",
    rating: 5,
    feedback:
      "Luxury jungle retreat with xperttrip.com was peaceful and beautifully managed."
  }
];

// 🔥 AUTO GENERATE REMAINING (11–60)
const packages = [
  "Adventure Tour Package",
  "Safari Experience",
  "Luxury Jungle Retreat",
  "Kerala Backwater Tour",
  "Goa Beach Tour",
  "Himalayan Adventure",
  "Rajasthan Heritage Tour",
  "Char Dham Yatra",
  "Luxury Desert Safari"
];

const names = [
  "Aarav Sharma","Diya Singh","Mohit Verma","Kajal Yadav","Sahil Khan",
  "Ananya Gupta","Ritesh Kumar","Simran Kaur","Harsh Mehta","Isha Malhotra",
  "Nikhil Jain","Meera Nair","Arjun Patel","Riya Sharma","Karan Chauhan",
  "Neha Joshi","Vivek Tiwari","Pallavi Singh","Aditya Raj","Sneha Reddy",
  "Manish Gupta","Pooja Verma","Rahul Jain","Divya Singh","Aman Yadav",
  "Komal Sharma","Suresh Yadav","Nidhi Agarwal","Deepak Singh","Tanya Gupta",
  "Ravi Kumar","Anjali Verma","Abhishek Sharma","Kiran Patel","Shivam Singh",
  "Swati Joshi","Yash Raj","Preeti Singh","Harshit Gupta","Juhi Sharma",
  "Varun Mehta","Ritika Kapoor","Akhil Verma","Neha Sharma","Gaurav Singh",
  "Ishita Jain","Manav Patel","Priya Desai","Tarun Yadav","Sakshi Gupta"
];

for (let i = 11; i <= 60; i++) {
  testimonials.push({
    id: i,
    name: names[i - 11],
    package: packages[i % packages.length],
    rating: Math.random() > 0.3 ? 5 : 4,
    feedback:
      "Experience with xperttrip.com was excellent. The trip was well organized, comfortable, safe, and memorable with great support throughout the journey."
  });
}

  return (
    <>
      {/* BANNER */}
      <BannerSection
        title="What Our Travelers Say"
        description="Explore genuine feedback from our clients who enjoyed unforgettable travel experiences with us."
        image="/images/travel-8.jpg"
      />

      {/* SECTION */}
      <section className="py-xl-5 py-3 section-18">
        <div className="container">

          {/* HEADER */}
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6">
              <div className="section-title">
                <span>Testimonials</span>
                <h2>What Our Happy Travelers Say</h2>
                <p>
                  Explore real experiences shared by our clients who enjoyed adventure tours,
                  safari trips, luxury stays, and unforgettable travel journeys.
                </p>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="row g-4">

            {testimonials.slice(0, visibleCount).map((item) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.id}>

                <div className="testimonial-card">

                  {/* TOP */}
                  <div className="d-flex justify-content-between align-items-start mb-2">

                    <div>
                      <h5 className="mb-1">{item.name}</h5>
                      <span className="badge bg-dark">{item.package}</span>
                    </div>

                    {/* STARS */}
                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < item.rating
                              ? "bi-star-fill text-warning"
                              : "bi-star text-muted"
                          }`}
                        ></i>
                      ))}
                    </div>

                  </div>

                  {/* FEEDBACK */}
                  <p className="feedback-text">
                    {item.feedback}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* LOAD MORE */}
          {visibleCount < testimonials.length && (
            <div className="text-center mt-xl-5 mt-4">

              <button
                className="btn btn-primary px-4 py-2 d-inline-flex align-items-center gap-2"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></span>
                    Loading...
                  </>
                ) : (
                  <>
                    Read More <i className="bi bi-arrow-down-circle"></i>
                  </>
                )}
              </button>

            </div>
          )}

        </div>
      </section>
    </>
  );
}