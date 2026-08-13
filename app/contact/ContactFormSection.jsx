"use client";

import { useState, useEffect, useCallback } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function ContactFormSection() {
    const initialForm = {
        full_name: "",
        email: "",
        whatsapp_number: "",
        city: "",

        tour_start_date: "",
        tour_duration: "",
        adults: "",
        children: 0,

        pickup_city: "",
        drop_city: "",

        accommodation_type: "",
        interested_in: "",

        travel_requirements: "",
    };

    const [formData, setFormData] = useState(initialForm);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    // toast state: { show, type: 'success' | 'error', message }
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });

    const TOAST_DURATION = 4000;

    const showToast = useCallback((type, message) => {
        setToast({ show: true, type, message });
    }, []);

    const closeToast = useCallback(() => {
        setToast((prev) => ({ ...prev, show: false }));
    }, []);

    useEffect(() => {
        if (!toast.show) return;

        const timer = setTimeout(() => {
            closeToast();
        }, TOAST_DURATION);

        return () => clearTimeout(timer);
    }, [toast.show, closeToast]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,

            [name]: value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,

                [name]: null,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setErrors({});

        try {

            const response = await fetch(
                "https://expert.vikashproduction.com//api/contact-leads",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );


            const result = await response.json();


            if (response.status === 422) {

                setErrors(result.errors);

                showToast(
                    "error",
                    "Please fix the highlighted fields and try again."
                );

                return;
            }


            if (result.status === true) {

                showToast(
                    "success",
                    "Your enquiry submitted successfully."
                );

                setFormData(initialForm);

            } else {

                showToast(
                    "error",
                    "Something went wrong. Please try again."
                );

            }


        } catch (error) {

            console.log(error);

            showToast(
                "error",
                "Server error. Please try again."
            );


        } finally {

            setLoading(false);

        }
    };

    return (
        <section className="contact-section py-xl-5 py-4">
            {/* Toast Notification */}
            <div
                className={`custom-toast ${toast.show ? "custom-toast--show" : ""} custom-toast--${toast.type}`}
                role="alert"
                aria-live="assertive"
            >
                <div className="custom-toast__icon">
                    {toast.type === "success" ? (
                        <i className="bi bi-check-lg"></i>
                    ) : (
                        <i className="bi bi-exclamation-lg"></i>
                    )}
                </div>

                <div className="custom-toast__content">
                    <strong>{toast.type === "success" ? "Success" : "Oops!"}</strong>
                    <span>{toast.message}</span>
                </div>

                <button
                    type="button"
                    className="custom-toast__close"
                    onClick={closeToast}
                    aria-label="Close notification"
                >
                    <i className="bi bi-x"></i>
                </button>

                {toast.show && (
                    <span
                        className="custom-toast__progress"
                        style={{ animationDuration: `${TOAST_DURATION}ms` }}
                    ></span>
                )}
            </div>

            <div className="container py-xl-4 py-4">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="contact-form-card">
                            <div className="section-title">
                                <span>GET IN TOUCH</span>

                                <h2>Start Your Travel Adventure Today</h2>

                                <p>
                                    Tell us about your travel plans and our travel experts will create a customized
                                    itinerary.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3 mt-4">
                                    <div className="col-md-6">
                                        <label>Full Name <span className="text-danger">*</span></label>

                                        <input
                                            type="text"
                                            name="full_name"
                                            value={formData.full_name}
                                            onChange={handleChange}
                                            className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                                            placeholder="Enter Your Name"
                                        />

                                        {errors.full_name && (
                                            <div className="invalid-feedback">{errors.full_name[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Email <span className="text-danger">*</span></label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            placeholder="Enter Your Email"
                                        />

                                        {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label>WhatsApp Number <span className="text-danger">*</span></label>

                                        <input
                                            type="text"
                                            name="whatsapp_number"
                                            value={formData.whatsapp_number}
                                            onChange={handleChange}
                                            className={`form-control ${errors.whatsapp_number ? "is-invalid" : ""}`}
                                            placeholder="Enter Your Number"
                                        />

                                        {errors.whatsapp_number && (
                                            <div className="invalid-feedback">{errors.whatsapp_number[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>City <span className="text-danger">*</span></label>

                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                            placeholder="Enter Your City"
                                        />

                                        {errors.city && <div className="invalid-feedback">{errors.city[0]}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label>Tour Start Date</label>

                                        <Flatpickr
                                            value={formData.tour_start_date || ""}
                                            onChange={(selectedDates) => {
                                                if (!selectedDates[0]) return;

                                                const d = selectedDates[0];

                                                const year = d.getFullYear();
                                                const month = String(d.getMonth() + 1).padStart(2, "0");
                                                const day = String(d.getDate()).padStart(2, "0");

                                                setFormData({
                                                    ...formData,

                                                    tour_start_date: `${year}-${month}-${day}`,
                                                });

                                                if (errors.tour_start_date) {
                                                    setErrors({
                                                        ...errors,

                                                        tour_start_date: null,
                                                    });
                                                }
                                            }}
                                            options={{
                                                dateFormat: "Y-m-d",
                                                altInput: true,
                                                altFormat: "d/m/Y",

                                                minDate: "today",
                                            }}
                                            className={`form-control ${errors.tour_start_date ? "is-invalid" : ""}`}
                                            placeholder="dd/mm/yyyy"
                                        />

                                        {errors.tour_start_date && (
                                            <div className="invalid-feedback">{errors.tour_start_date[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Tour Duration</label>

                                        <input
                                            type="number"
                                            name="tour_duration"
                                            value={formData.tour_duration}
                                            onChange={handleChange}
                                            className={`form-control ${errors.tour_duration ? "is-invalid" : ""}`}
                                            placeholder="e.g 5"
                                        />

                                        {errors.tour_duration && (
                                            <div className="invalid-feedback">{errors.tour_duration[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Adults</label>

                                        <input
                                            type="number"
                                            name="adults"
                                            value={formData.adults}
                                            onChange={handleChange}
                                            className={`form-control ${errors.adults ? "is-invalid" : ""}`}
                                        />

                                        {errors.adults && <div className="invalid-feedback">{errors.adults[0]}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Children</label>

                                        <input
                                            type="number"
                                            name="children"
                                            value={formData.children}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Pickup City</label>

                                        <input
                                            type="text"
                                            name="pickup_city"
                                            value={formData.pickup_city}
                                            onChange={handleChange}
                                            className={`form-control ${errors.pickup_city ? "is-invalid" : ""}`}
                                        />

                                        {errors.pickup_city && (
                                            <div className="invalid-feedback">{errors.pickup_city[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Drop City</label>

                                        <input
                                            type="text"
                                            name="drop_city"
                                            value={formData.drop_city}
                                            onChange={handleChange}
                                            className={`form-control ${errors.drop_city ? "is-invalid" : ""}`}
                                        />

                                        {errors.drop_city && (
                                            <div className="invalid-feedback">{errors.drop_city[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Accommodation Type</label>

                                        <select
                                            name="accommodation_type"
                                            value={formData.accommodation_type}
                                            onChange={handleChange}
                                            className={`form-select ${errors.accommodation_type ? "is-invalid" : ""}`}
                                        >
                                            <option value="">Select Accommodation</option>

                                            <option value="Budget Hotel">Budget Hotel</option>

                                            <option value="3 Star Hotel">3 Star Hotel</option>

                                            <option value="4 Star Hotel">4 Star Hotel</option>

                                            <option value="5 Star Hotel">5 Star Hotel</option>

                                            <option value="Luxury Resort">Luxury Resort</option>
                                        </select>

                                        {errors.accommodation_type && (
                                            <div className="invalid-feedback">{errors.accommodation_type[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label>Interested In</label>

                                        <select
                                            name="interested_in"
                                            value={formData.interested_in}
                                            onChange={handleChange}
                                            className={`form-select ${errors.interested_in ? "is-invalid" : ""}`}
                                        >
                                            <option value="">Select Tour Package</option>

                                            <option value="Family Tour">Family Tour</option>

                                            <option value="Honeymoon Tour">Honeymoon Tour</option>

                                            <option value="Adventure Tour">Adventure Tour</option>

                                            <option value="Luxury Tour">Luxury Tour</option>

                                            <option value="Group Tour">Group Tour</option>

                                            <option value="Customized Tour">Customized Tour</option>
                                        </select>

                                        {errors.interested_in && (
                                            <div className="invalid-feedback">{errors.interested_in[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label>Travel Requirements</label>

                                        <textarea
                                            name="travel_requirements"
                                            value={formData.travel_requirements}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`form-control ${errors.travel_requirements ? "is-invalid" : ""}`}
                                            placeholder="Tell us about your travel requirements..."
                                        ></textarea>

                                        {errors.travel_requirements && (
                                            <div className="invalid-feedback">{errors.travel_requirements[0]}</div>
                                        )}
                                    </div>

                                    <div className="col-12">
    <button 
        type="submit" 
        disabled={loading} 
        className="btn btn-secondary w-100 d-flex align-items-center justify-content-center"
    >

        {loading ? (
            <>
                <span 
                    className="spinner-border spinner-border-sm me-2" 
                    role="status"
                    aria-hidden="true"
                ></span>

                Submitting...
            </>
        ) : (
            <>
                <i className="bi bi-rocket-takeoff-fill me-2"></i>

                Get Free Quote
            </>
        )}

    </button>
</div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="contact-sidebar">
                            <div className="info-card">
                                <div className="icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>

                                <h5>Call Our Experts</h5>

                                <p>Speak directly with our travel specialists.</p>

                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </div>

                            <div className="info-card">
                                <div className="icon whatsapp">
                                    <i className="bi bi-whatsapp"></i>
                                </div>

                                <h5>WhatsApp Support</h5>

                                <p>Get instant assistance.</p>

                                <a href="#">Start Chat</a>
                            </div>

                            <div className="info-card">
                                <div className="icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <h5>Email Us</h5>

                                <p>Send us your queries.</p>

                                <a href="mailto:hello@myxperttrion.com">hello@myxperttrion.com</a>
                            </div>

                            <div className="map-card">
                                <iframe
                                    src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-toast {
                    position: fixed;
                    top: 24px;
                    right: 24px;
                    z-index: 9999;
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    min-width: 320px;
                    max-width: 380px;
                    padding: 16px 18px;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    transform: translateX(420px);
                    opacity: 0;
                    pointer-events: none;
                    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
                    overflow: hidden;
                }

                .custom-toast--show {
                    transform: translateX(0);
                    opacity: 1;
                    pointer-events: auto;
                }

                .custom-toast__icon {
                    flex-shrink: 0;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    color: #fff;
                }

                .custom-toast--success .custom-toast__icon {
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                }

                .custom-toast--error .custom-toast__icon {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                }

                .custom-toast__content {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    flex: 1;
                }

                .custom-toast__content strong {
                    font-size: 14.5px;
                    color: #1a1a1a;
                    font-weight: 600;
                }

                .custom-toast__content span {
                    font-size: 13.5px;
                    color: #555;
                    line-height: 1.4;
                }

                .custom-toast__close {
                    background: transparent;
                    border: none;
                    color: #999;
                    font-size: 18px;
                    line-height: 1;
                    cursor: pointer;
                    padding: 2px;
                    flex-shrink: 0;
                    transition: color 0.2s ease;
                }

                .custom-toast__close:hover {
                    color: #333;
                }

                .custom-toast__progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #22c55e, #16a34a);
                    width: 100%;
                    transform-origin: left;
                    animation: toastProgress linear forwards;
                }

                .custom-toast--error .custom-toast__progress {
                    background: linear-gradient(90deg, #ef4444, #dc2626);
                }

                @keyframes toastProgress {
                    from {
                        transform: scaleX(1);
                    }
                    to {
                        transform: scaleX(0);
                    }
                }

                @media (max-width: 576px) {
                    .custom-toast {
                        left: 16px;
                        right: 16px;
                        min-width: unset;
                        max-width: unset;
                        top: 16px;
                    }

                    .custom-toast--show {
                        transform: translateY(0);
                    }

                    .custom-toast:not(.custom-toast--show) {
                        transform: translateY(-120px);
                    }
                }
            `}</style>
        </section>
    );
}