"use client";
import BannerSection from "@/app/components/common/BannerSection";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createBooking } from "@/api/booking";

function BookingForm() {
  const searchParams = useSearchParams();

  const packageId = searchParams.get("packageId") || null;
  const packageName = searchParams.get("packageName") || "Custom Package";
  const packageCategory = searchParams.get("category") || "";
  const basePriceFromUrl = searchParams.get("basePrice") || "";

  const [date, setDate] = useState("");

  const initialForm = {
    full_name: "",
    email: "",
    phone_number: "",
    group_size: "",
    pickup_location: "",
    special_requests: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ---------------- Toast ----------------
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // ---------------- Client-side validation ----------------
  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/; // 10-digit Indian mobile

    if (!formData.full_name.trim()) {
      newErrors.full_name = ["Full name is required."];
    } else if (formData.full_name.trim().length > 255) {
      newErrors.full_name = ["Full name must not exceed 255 characters."];
    }

    if (!formData.email.trim()) {
      newErrors.email = ["Email address is required."];
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = ["Please enter a valid email address."];
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = ["Phone number is required."];
    } else if (!phoneRegex.test(formData.phone_number.trim().replace(/^\+91/, "").trim())) {
      newErrors.phone_number = ["Please enter a valid 10-digit mobile number."];
    }

    if (!date) {
      newErrors.tour_start_date = ["Tour start date is required."];
    } else {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selected < today) {
        newErrors.tour_start_date = ["Tour start date cannot be in the past."];
      }
    }

    if (!formData.group_size) {
      newErrors.group_size = ["Group size is required."];
    } else if (formData.group_size < 1 || formData.group_size > 50) {
      newErrors.group_size = ["Group size must be between 1 and 50."];
    }

    if (!formData.pickup_location.trim()) {
      newErrors.pickup_location = ["Pickup location is required."];
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const isValid = validateForm();

    if (!isValid) {
      showToast("error", "Please fix the highlighted fields and try again.");
      return;
    }

    setLoading(true);
    setErrors({});

    const payload = {
      ...formData,
      tour_start_date: date,
      package_id: packageId,
      package_name: packageName,
      package_category: packageCategory,
      base_price: basePriceFromUrl || null,
      total_price: basePriceFromUrl || null,
    };

    try {
      const response = await createBooking(payload);

      if (response?.success !== false) {
        showToast("success", response?.message || "Your booking request has been submitted successfully.");
        setFormData(initialForm);
        setDate("");
      } else {
        showToast("error", response?.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.log("Booking Error", error);

      const validationErrors = error.errors || error.response?.errors;

      if (validationErrors) {
        setErrors(validationErrors);
        showToast("error", "Please fix the highlighted fields and try again.");
      } else {
        showToast("error", error.message || "Booking failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <div className="col-lg-8">
              <div className="booking-form-card">
                <div className="section-title mb-4">
                  <span>Book Your Trip</span>
                  <h2>Complete Your Booking</h2>
                  <p>Fill in your details and our travel expert will contact you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-4">

                    <div className="col-md-6">
                      <label>Full Name <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                          placeholder="Enter Full Name"
                        />
                      </div>
                      {errors.full_name && (
                        <div className="invalid-feedback d-block">{errors.full_name[0]}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label>Email Address <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          placeholder="Enter Email Address"
                        />
                      </div>
                      {errors.email && (
                        <div className="invalid-feedback d-block">{errors.email[0]}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label>Phone Number <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          className={`form-control ${errors.phone_number ? "is-invalid" : ""}`}
                          placeholder="+91 9876543210"
                        />
                      </div>
                      {errors.phone_number && (
                        <div className="invalid-feedback d-block">{errors.phone_number[0]}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label>Tour Start Date <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-calendar3"></i></span>
                        <Flatpickr
                          value={date}
                          onChange={(selectedDates, dateStr) => {
                            setDate(dateStr);
                            if (errors.tour_start_date) {
                              setErrors((prev) => ({
                                ...prev,
                                tour_start_date: null,
                              }));
                            }
                          }}
                          options={{ minDate: "today", dateFormat: "Y-m-d" }}
                          className={`form-control ${errors.tour_start_date ? "is-invalid" : ""}`}
                          placeholder="Select Travel Date"
                        />
                      </div>
                      {errors.tour_start_date && (
                        <div className="invalid-feedback d-block">{errors.tour_start_date[0]}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label>Group Size / Number of Passengers <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-people"></i></span>
                        <input
                          type="number"
                          name="group_size"
                          value={formData.group_size}
                          onChange={handleChange}
                          className={`form-control ${errors.group_size ? "is-invalid" : ""}`}
                          placeholder="2"
                          min={1}
                          max={50}
                        />
                      </div>
                      {errors.group_size && (
                        <div className="invalid-feedback d-block">{errors.group_size[0]}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label>Pickup Location <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                        <input
                          type="text"
                          name="pickup_location"
                          value={formData.pickup_location}
                          onChange={handleChange}
                          className={`form-control ${errors.pickup_location ? "is-invalid" : ""}`}
                          placeholder="Hotel name, airport or railway station"
                        />
                      </div>
                      {errors.pickup_location && (
                        <div className="invalid-feedback d-block">{errors.pickup_location[0]}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label>Special Requests (Optional)</label>
                      <div className="input-group">
                        <span className="input-group-text align-items-start pt-3"><i className="bi bi-chat-left-text"></i></span>
                        <textarea
                          rows="5"
                          name="special_requests"
                          value={formData.special_requests}
                          onChange={handleChange}
                          className={`form-control ${errors.special_requests ? "is-invalid" : ""}`}
                          placeholder="Any special requirements or requests..."
                        ></textarea>
                      </div>
                      {errors.special_requests && (
                        <div className="invalid-feedback d-block">{errors.special_requests[0]}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-secondary w-100 d-flex align-items-center justify-content-center"
                        disabled={loading}
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
                            <i className="bi bi-send-fill me-2"></i>
                            Submit Booking Request
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="booking-summary-card">

                <div className="travel-expert">
                  <img src="/images/expert.png" alt="Travel Expert" className="expert-img" />
                  <div>
                    <h5>Rahul Sharma</h5>
                    <span>Travel Consultant</span>
                  </div>
                </div>

                <hr />

                <h4>Booking Summary</h4>
                <ul className="summary-list">
                  <li><span>Tour Package</span><strong>{packageName}</strong></li>
                  {packageCategory && (
                    <li><span>Category</span><strong>{packageCategory}</strong></li>
                  )}
                  <li><span>Travelers</span><strong>{formData.group_size || "-"}</strong></li>
                  {basePriceFromUrl && (
                    <li><span>Base Price</span><strong>₹{basePriceFromUrl}</strong></li>
                  )}
                </ul>

                {basePriceFromUrl && (
                  <div className="total-price">
                    <span>Total Estimate</span>
                    <h3>₹{basePriceFromUrl}</h3>
                  </div>
                )}

                <hr />

                <h5>Included Services</h5>
                <ul className="included-list">
                  <li><i className="bi bi-check-circle-fill"></i> Hotel Accommodation</li>
                  <li><i className="bi bi-check-circle-fill"></i> Sightseeing Tours</li>
                  <li><i className="bi bi-check-circle-fill"></i> Pickup & Drop Service</li>
                  <li><i className="bi bi-check-circle-fill"></i> Dedicated Travel Support</li>
                </ul>

                <hr />

                <div className="important-notes">
                  <h5>Important Notes</h5>
                  <ul>
                    <li>50% advance payment required</li>
                    <li>Free cancellation (terms apply)</li>
                    <li>Final price may vary based on requirements</li>
                    <li>We'll contact you within 2 hours</li>
                  </ul>
                </div>

                <div className="help-box">
                  <h5>Need Help?</h5>
                  <a href="tel:+919166206630"><i className="bi bi-telephone"></i> +91 9166206630</a>
                  <a href="mailto:rajasthancabsandtours2023@gmail.com"><i className="bi bi-envelope"></i> rajasthancabsandtours2023@gmail.com</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

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
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}