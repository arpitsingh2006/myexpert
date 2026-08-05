"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/app/context/SettingsContext";


export default function Footer() {

  const { settings } = useSettings();


  return (
    
    <footer className="footer-section">


      {/* WhatsApp Floating Button */}
      <div className="whats-app">

        <a
          href={`https://wa.me/${settings?.whatsapp_number}`}
          target="_blank"
          className="whatsapp-float"
        >
          <span className="bi bi-whatsapp"></span>
        </a>

      </div>



      <div className="container">

        <div className="row gy-5 footer-top">


          {/* ABOUT */}
          <div className="col-lg-4 col-md-6">

            <div className="footer-about">


              <Image
                src="/images/white-logo.png"
                alt={settings?.site_title || "Logo"}
                width={220}
                height={80}
              />


              <p className="mt-4">
                Your journey. Our expertise. Premium, hand-crafted travel
                experiences across India and beyond.
              </p>



              {/* SOCIAL ICONS */}
              <div className="footer-social d-flex gap-3 mt-3">


                {settings?.facebook_url && (
                  <a
                    href={settings.facebook_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                )}


                {settings?.instagram_url && (
                  <a
                    href={settings.instagram_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                )}


                {settings?.twitter_url && (
                  <a
                    href={settings.twitter_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                )}


                {settings?.youtube_url && (
                  <a
                    href={settings.youtube_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                )}


                {settings?.whatsapp_number && (

                  <a
                    href={`https://wa.me/${settings.whatsapp_number}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>

                )}


              </div>


            </div>

          </div>




          {/* EXPLORE */}
          <div className="col-lg-2 col-md-6">

            <div className="footer-links">

              <h5>Explore</h5>


              <ul className="list-unstyled mb-0">

                <li>
                  <Link href="/destinations">
                    Destinations
                  </Link>
                </li>

                <li>
                  <Link href="/packages">
                    Packages
                  </Link>
                </li>

                <li>
                  <Link href="/offers">
                    Offers
                  </Link>
                </li>


                <li>
                  <Link href="/gallery">
                    Gallery
                  </Link>
                </li>


              </ul>


            </div>

          </div>




          {/* COMPANY */}
          <div className="col-lg-3 col-md-6">

            <div className="footer-links">

              <h5>Company</h5>


              <ul className="list-unstyled mb-0">

                <li>
                  <Link href="/about">
                    About Us
                  </Link>
                </li>


                <li>
                  <Link href="/testimonials">
                    Testimonials
                  </Link>
                </li>


                <li>
                  <Link href="/faq">
                    FAQ
                  </Link>
                </li>


                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>


              </ul>

            </div>

          </div>





          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">

            <div className="footer-contact">

              <h5>
                Contact
              </h5>


              <p>

                <i className="bi bi-geo-alt-fill me-2"></i>

                Wanderlane Travels

              </p>



              <p>

                <a href={`tel:${settings?.mobile_number_1}`}>

                  <i className="bi bi-telephone-fill me-2"></i>

                  {settings?.mobile_number_1}

                </a>

              </p>




              <p>

                <a href={`mailto:${settings?.contact_email}`}>

                  <i className="bi bi-envelope-fill me-2"></i>

                  {settings?.contact_email}

                </a>

              </p>



            </div>


          </div>


        </div>




        <div className="footer-bottom">


          <div className="row align-items-center gy-3">


            <div className="col-md-6">

              <p className="mb-0">

                © 2026 {settings?.site_title}. All rights reserved.

              </p>

            </div>


            <div className="col-md-6 text-md-end">

              <span>
                Your journey · Our expertise
              </span>

            </div>


          </div>


        </div>


      </div>


    </footer>

  );

}