"use client";
import BannerSection from "@/app/components/common/BannerSection";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import { useState } from "react";

export default function BookingPage() {

  const [date, setDate] = useState("");

  return (
    <>
    <BannerSection
    title="Book Your Next Adventure"
    description="From luxury holidays and family vacations to adventure tours and wildlife safaris, MyXpertTrip helps you plan every detail with ease. Complete your booking request and our team will get in touch shortly."
    image="/images/travel-25.jpg"
    buttonText="Start Booking"
    buttonUrl="/contact"
    showShareButton={true}
/>
    <section className="section-19 py-xl-5 py-3">
      <div className="container py-xl-4 py-3">

        <div className="row g-4">

          {/* LEFT */}
          <div className="col-lg-8">

            <div className="booking-form-card">

              <div className="section-title mb-4">
                <span>Book Your Trip</span>
                <h2>Complete Your Booking</h2>
                <p>
                  Fill in your details and our travel expert
                  will contact you shortly.
                </p>
              </div>

              <form>

               <div className="row g-4">

                {/* FULL NAME */}
                <div className="col-md-6">
                    <label>Full Name <span className="text-danger">*</span></label>
                    <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-person"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                    />
                    </div>
                </div>

                {/* EMAIL */}
                <div className="col-md-6">
                    <label>Email Address <span className="text-danger">*</span></label>
                    <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                    </span>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                    />
                    </div>
                </div>

                {/* PHONE */}
                <div className="col-12">
                    <label>Phone Number <span className="text-danger">*</span></label>
                    <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-telephone"></i>
                    </span>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="+91 9876543210"
                    />
                    </div>
                </div>

                {/* TOUR DATE */}
                <div className="col-md-6">
                <label>
                    Tour Start Date <span className="text-danger">*</span>
                </label>

                <div className="input-group">
                    <span className="input-group-text">
                    <i className="bi bi-calendar3"></i>
                    </span>

                    <Flatpickr
                    value={date}
                    onChange={(selectedDates, dateStr) => setDate(dateStr)}
                    options={{
                        minDate: "today",
                        dateFormat: "d M Y",
                    }}
                    className="form-control"
                    placeholder="Select Travel Date"
                    />
                </div>
                </div>

                {/* PASSENGERS */}
                <div className="col-md-6">
                    <label>Group Size / Number of Passengers <span className="text-danger">*</span></label>
                    <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-people"></i>
                    </span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="2"
                    />
                    </div>
                </div>

                {/* PICKUP */}
                <div className="col-12">
                    <label>Pickup Location <span className="text-danger">*</span></label>
                    <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-geo-alt"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Hotel name, airport or railway station"
                    />
                    </div>
                </div>

                {/* SPECIAL REQUEST */}
                <div className="col-12">
                    <label>Special Requests (Optional)</label>

                    <div className="input-group">
                    <span className="input-group-text align-items-start pt-3">
                        <i className="bi bi-chat-left-text"></i>
                    </span>

                    <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Any special requirements or requests..."
                    ></textarea>
                    </div>
                </div>

                {/* BUTTON */}
                <div className="col-12">
                    <button
                    type="submit"
                    className="btn btn-secondary w-100"
                    >
                    <i className="bi bi-send-fill me-2"></i>
                    Submit Booking Request
                    </button>
                </div>

                </div>

              </form>

            </div>

          </div>

          {/* RIGHT */}
         <div className="col-lg-4">

            <div className="booking-summary-card">

              {/* EXPERT */}
              <div className="travel-expert">
                <img src="/images/expert.png" alt="Travel Expert"
                  className="expert-img"
                />

                <div>
                  <h5>Rahul Sharma</h5>
                  <span>Travel Consultant</span>
                </div>
              </div>

              <hr />

              {/* SUMMARY */}
              <h4>Booking Summary</h4>

              <ul className="summary-list">
                <li>
                  <span>Tour Package</span>
                  <strong>Jaipur Heritage Tour</strong>
                </li>

                <li>
                  <span>Duration</span>
                  <strong>4 Days / 3 Nights</strong>
                </li>

                <li>
                  <span>Travelers</span>
                  <strong>2 Adults</strong>
                </li>

                <li>
                  <span>Base Price</span>
                  <strong>₹18,999</strong>
                </li>
              </ul>

              <div className="total-price">
                <span>Total Estimate</span>
                <h3>₹18,999</h3>
              </div>

              <hr />

              {/* INCLUDED */}
              <h5>Included Services</h5>

              <ul className="included-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Hotel Accommodation
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Sightseeing Tours
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Pickup & Drop Service
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Dedicated Travel Support
                </li>
              </ul>

              <hr />

              {/* NOTES */}
              <div className="important-notes">
                <h5>Important Notes</h5>

                <ul>
                  <li>50% advance payment required</li>
                  <li>Free cancellation (terms apply)</li>
                  <li>Final price may vary based on requirements</li>
                  <li>We'll contact you within 2 hours</li>
                </ul>
              </div>

              {/* HELP BOX */}
              <div className="help-box">
                <h5>Need Help?</h5>

                <a href="tel:+919166206630">
                  <i className="bi bi-telephone"></i>
                  +91 9166206630
                </a>

                <a href="mailto:rajasthancabsandtours2023@gmail.com">
                  <i className="bi bi-envelope"></i>
                  rajasthancabsandtours2023@gmail.com
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
 </>

  );
}