"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getPackageCategories } from "@/api/packageCategory";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [packageCategories, setPackageCategories] = useState([]);

  const pathname = usePathname();
  const navRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Get Package Categories
  useEffect(() => {
    const fetchPackageCategories = async () => {
      try {
        const response = await getPackageCategories();

        if (response?.status) {
          setPackageCategories(response.data || []);
        }
      } catch (error) {
        console.error(
          "Failed to fetch package categories:",
          error
        );
      }
    };

    fetchPackageCategories();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const el = navRef.current;

    if (el && el.classList.contains("show")) {
      el.classList.remove("show");
    }
  }, [pathname]);

  return (
    <header
      className={`main-header ${scrolled ? "scrolled" : ""}`}
    >
      <nav
        className={`navbar navbar-expand-lg sheader-inner bg-white ${
          scrolled ? "bg-white" : ""
        }`}
      >
        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/color-logo.png"
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

          {/* Main Menu */}
          <div
            className="collapse navbar-collapse"
            id="mainMenu"
            ref={navRef}
          >
            <ul className="navbar-nav mx-auto gap-lg-3 menu">

              {/* Home */}
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              {/* Our Services */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our services
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="pageDropdown"
                >

                  {/* Tour Packages */}
                  <li>
                    <Link
                      href="/packages"
                      className="dropdown-item"
                    >
                      Tour Packages
                    </Link>
                  </li>

                  {/* Book Your Cab */}
                  <li>
                    <Link
                      href="/cabs"
                      className="dropdown-item"
                    >
                      Book your cab
                    </Link>
                  </li>

                  {/* Adventure Categories */}
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      className="dropdown-item submenu-toggle"
                    >
                      <span>Adventure Categories</span>
                      <span className="submenu-arrow">›</span>
                    </a>

                    {/* Nested Sub Menu */}
                    <ul className="dropdown-menu">
                      {packageCategories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={`/package-category/${category.slug}`}
                            className="dropdown-item"
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  
                  
                </ul>
              </li>

              {/* Travel Gallery */}
              <li className="nav-item">
                <Link
                  href="/travel-gallery"
                  className="nav-link"
                >
                  Travel Gallery
                </Link>
              </li>

              {/* Happy Faces */}
              <li className="nav-item">
                <Link
                  href="/testimonials"
                  className="nav-link"
                >
                  Happy Faces
                </Link>
              </li>

              {/* Blogs */}
              <li className="nav-item">
                <Link
                  href="/blog"
                  className="nav-link"
                >
                  Blogs
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>

            </ul>

            {/* Buttons */}
            <div className="mt-3 mt-lg-0 d-flex align-items-center gap-2">

              <a
                href="tel:+919876543210"
                className="btn btn-primary"
              >
                <i className="bi bi-telephone-fill pe-2"></i>
                Speak With Expert
              </a>

              <a
                href="/booking"
                className="btn btn-secondary"
              >
                <i className="bi bi-calendar-check-fill pe-2"></i>
                Book Experience
              </a>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}