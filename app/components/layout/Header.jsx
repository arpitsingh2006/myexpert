"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const el = navRef.current;
    if (el && el.classList.contains("show")) {
      el.classList.remove("show");
    }
  }, [pathname]);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <nav
        className={`navbar navbar-expand-lg sheader-inner bg-white ${
          scrolled ? "bg-white" : ""
        }`}
      >
        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              src={
                scrolled
                  ? "/images/color-logo.png"
                  : "/images/color-logo.png"
              }
              alt="Wanderlane Logo"
              width={200}
              height={70}
              priority
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ref added here — yahi fix hai */}
          <div className="collapse navbar-collapse" id="mainMenu" ref={navRef}>

            <ul className="navbar-nav mx-auto gap-lg-3 menu">
              <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link href="/blog" className="nav-link">Blogs</Link></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>

                <ul className="dropdown-menu" aria-labelledby="pageDropdown">
                 
                  <li>
                    <Link href="/travel-gallery" className="dropdown-item">
                      Travel Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="dropdown-item">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking" className="dropdown-item">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/cab-booking" className="dropdown-item">
                      Cab Booking
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>

                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <Link href="/cabs" className="dropdown-item">
                      Cab Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages" className="dropdown-item">
                      Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="dropdown-item">
                      Package Detail
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations" className="dropdown-item">
                      Top Destinations
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Button with scroll change */}
            <div className="mt-3 mt-lg-0 d-flex align-items-center gap-2">
              <a href="tel:+919876543210" className="btn btn-primary">
                <i className="bi bi-telephone-fill pe-2"></i>Speak With Expert
              </a>
              <a href="/booking" className="btn btn-secondary">
                <i className="bi bi-calendar-check-fill pe-2"></i>Book Experience
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}