"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Flatpickr = dynamic(() => import("react-flatpickr"), {
  ssr: false,
});

export default function TourDetailsSection() {
  const [date, setDate] = useState(null);

  return (
  
    <section className="section-13  py-xl-5 py-3">
        <div className="container py-xl-4 py-3">
            <div className="row">
                <div className="col-xl-8">
                    <div className="section-title">
                        <span>Overview</span>
                        <h3>A journey written for the soul.</h3>
                        <p>Surrender to the soul of Bali. Wander emerald rice terraces at dawn, awaken in an overwater villa, share rituals with temple priests at golden sunset, and dine beneath a canopy of stars. A meticulously curated journey blending culture, nature and quiet luxury — designed for travellers who don't just visit a place, they listen to it.</p>
                    </div>
                    <div className="small-card mt-4">
                        <div className="row">
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-xl-3 mb-3">
                                <div className="box">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-all"></span>
                                        </div>
                                        <div className="text">
                                            <p>Amber Fort & Palace Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="section-title mt-4">
                        <span>Day by Day</span>
                        <h3>Your itinerary, hand-crafted.</h3>
                    </div>
                    <div className="itinerary-section">
                        <div className="itinerary-wrapper">
                            <div className="itinerary-item">
                                <div className="timeline">
                                    <div className="day-circle">
                                        <span>D1</span>
                                    </div>
                                </div>
                                <div className="itinerary-card">
                                    <div className="content">
                                        <span className="day-label">
                                            <i className="bi bi-sunrise-fill me-2"></i>
                                            DAY 1
                                        </span>
                                        <h3>Arrival & City Palace Tour</h3>
                                        <p>
                                            Begin your royal Jaipur experience with City Palace,
                                            Jantar Mantar and an evening visit to the iconic
                                            Hawa Mahal.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i> Airport Pickup</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Hotel Check-In</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Guided City Tour</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="itinerary-item">
                                <div className="timeline">
                                    <div className="day-circle">
                                        <span>D2</span>
                                    </div>
                                </div>
                                <div className="itinerary-card mt-4">
                                    <div className="content">
                                        <span className="day-label">
                                            <i className="bi bi-sunrise-fill me-2"></i>
                                            DAY 2
                                        </span>
                                        <h3>Arrival & City Palace Tour</h3>
                                        <p>
                                            Begin your royal Jaipur experience with City Palace,
                                            Jantar Mantar and an evening visit to the iconic
                                            Hawa Mahal.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i> Airport Pickup</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Hotel Check-In</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Guided City Tour</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="itinerary-item">
                                <div className="timeline">
                                    <div className="day-circle">
                                        <span>D3</span>
                                    </div>
                                </div>
                                <div className="itinerary-card mt-4">
                                    <div className="content">
                                        <span className="day-label">
                                            <i className="bi bi-sunrise-fill me-2"></i>
                                            DAY 3
                                        </span>
                                        <h3>Arrival & City Palace Tour</h3>
                                        <p>
                                            Begin your royal Jaipur experience with City Palace,
                                            Jantar Mantar and an evening visit to the iconic
                                            Hawa Mahal.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i> Airport Pickup</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Hotel Check-In</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Guided City Tour</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="section-title mt-5">
                        <span>What's Included</span>
                        <h3>Everything covered. Nothing hidden.</h3>
                    </div>

                    <div className="mt-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="box-card inclusions">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-check-circle-fill"></span>
                                        </div>
                                        <div className="text ps-3">
                                            <b>Inclusions</b>
                                        </div>
                                    </div>
                                    <div className="ul-section">
                                        <ul>
                                            <li>
                                                5 nights luxury accommodation (5★)
                                            </li>
                                            <li>
                                               Daily gourmet breakfast
                                            </li>
                                            <li>
                                                3 signature dinners
                                            </li>
                                            <li>
                                                Private AC vehicle with chauffeur
                                            </li>
                                            <li>
                                               English-speaking expert guide
                                            </li>
                                            <li>
                                                All entry tickets & permits
                                            </li>
                                            <li>
                                                Airport transfers
                                            </li>
                                            <li>
                                                24/7 concierge support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             <div className="col-6">
                                <div className="box-card exclusions">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <span className="bi bi-x-lg"></span>
                                        </div>
                                        <div className="text ps-3">
                                            <b>Inclusions</b>
                                        </div>
                                    </div>
                                    <div className="ul-section">
                                        <ul>
                                            <li>
                                                5 nights luxury accommodation (5★)
                                            </li>
                                            <li>
                                               Daily gourmet breakfast
                                            </li>
                                            <li>
                                                3 signature dinners
                                            </li>
                                            <li>
                                                Private AC vehicle with chauffeur
                                            </li>
                                            <li>
                                               English-speaking expert guide
                                            </li>
                                            <li>
                                                All entry tickets & permits
                                            </li>
                                            <li>
                                                Airport transfers
                                            </li>
                                            <li>
                                                24/7 concierge support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-title mt-5">
                        <span>Questions</span>
                        <h3>Frequently asked, honestly answered.</h3>
                    </div>
                    <div className="faq-section mt-4">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    What is included in the tour package?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    The package includes hotel stay, breakfast, sightseeing, and transport.
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    Is airport pickup included?
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, airport pickup and drop is included in most packages.
                                </div>
                                </div>
                            </div>

                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    Can I customize my itinerary?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, you can customize your travel plan based on your preferences.
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="section-title mt-5">
                        <span>Policy</span>
                        <h3>Booking & Refund</h3>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="policy-card cancellation">
                            
                            <div className="icon">
                                <span className="bi bi-shield-check"></span>
                            </div>

                            <div className="title">
                                Cancellation Policy
                            </div>

                            <div className="ul-section">
                                <ul>
                                <li>Free cancellation up to 30 days before departure</li>
                                <li>50% refund between 30 – 14 days</li>
                                <li>Non-refundable within 14 days</li>
                                <li>Date changes subject to availability</li>
                                </ul>
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="section-title mt-5">
                        <span>Payment</span>
                        <h3>Payment Options</h3>
                    </div>
                   <div className="row mt-4">
                        <div className="col-12">

                            <div className="payment-card">

                            {/* Icon */}
                            <div className="icon">
                                <span className="bi bi-credit-card-2-front"></span>
                            </div>

                            {/* Title */}
                            <div className="title">
                                Secure Payment Methods
                            </div>

                            {/* Payment Tags */}
                            <div className="payment-tags">
                                <span>Visa</span>
                                <span>Mastercard</span>
                                <span>Amex</span>
                                <span>PayPal</span>
                                <span>Stripe</span>
                                <span>Bank Transfer</span>
                                <span>UPI</span>
                            </div>

                            {/* Info text */}
                            <div className="info-text">
                                Pay 20% deposit to confirm booking. Balance due 30 days before travel.
                                EMI options available.
                            </div>

                            </div>

                        </div>
                        </div>

                </div>
                <div className="col-xl-4">
                    <div className="booking-card">
                        {/* Price */}
                        <div className="price-box">
                            <span className="from">Starting from</span>

                            <div className="price">
                             <b>₹12,500</b> <span>/ person</span>
                            </div>

                            <p className="note">Twin sharing · taxes included</p>
                        </div>

                        {/* Travel Date */}
                        <div className="form-group">
                            <label>Travel Date</label>
                            <Flatpickr
                                value={date}
                                onChange={(selectedDates) => setDate(selectedDates)}
                                options={{
                                    dateFormat: "d M Y",
                                    minDate: "today",
                                }}
                                className="form-control"
                                placeholder="Select travel date"
                            />
                        </div>

                        {/* Travellers */}
                        <div className="form-group">
                            <label>Travellers</label>
                            <select>
                            <option>1 Adult</option>
                            <option>2 Adults</option>
                            <option>3 Adults</option>
                            <option>4 Adults</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="buttons">
                            <button className="btn btn-primary">Book Now</button>
                            <button className="btn btn-primary-outline">Get Custom Quote</button>
                            <button className="btn btn-whatsapp">
                                WhatsApp Inquiry
                            </button>
                        </div>

                        {/* Trust Info */}
                        <div className="trust">
                            Free cancellation · Secure payment
                        </div>

                        {/* Expert */}
                        <div className="expert-box">

                            <div className="expert-row">

                                {/* Left Image */}
                                <div className="expert-img">
                                <img src="/images/expert.png" alt="Travel Expert" />
                                </div>

                                {/* Right Info */}
                                <div className="expert-info">

                                <div className="title">
                                    <i className="bi bi-person-badge me-1"></i>
                                    Your Travel Expert
                                </div>

                                <div className="expert-name">Anya Pradnyani</div>

                                <div className="role">
                                    <i className="bi bi-geo-alt me-1"></i>
                                    Senior Bali Travel Designer
                                </div>

                                <div className="rating">
                                    <i className="bi bi-star-fill text-warning me-1"></i>
                                    4.9 · 312 trips
                                </div>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="contact">

                                <button>
                                <i className="bi bi-telephone me-1"></i>
                                Call
                                </button>

                                <button className="whatsapp">
                                <i className="bi bi-whatsapp me-1"></i>
                                WhatsApp
                                </button>

                            </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}