"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSettings } from "../../../api/settings";

export default function CTASection() {

  const [settings, setSettings] = useState({});


  useEffect(() => {

    const fetchSettings = async () => {
      try {

        const res = await getSettings();

        if (res?.status === "success") {
          setSettings(res.data);
        }

      } catch (error) {
        console.log(error);
      }
    };


    fetchSettings();

  }, []);



  const socialMedia = [
    {
      icon: "bi-facebook",
      name: "Facebook",
      link: settings.facebook_url,
    },
    {
      icon: "bi-instagram",
      name: "Instagram",
      link: settings.instagram_url,
    },
    {
      icon: "bi-linkedin",
      name: "LinkedIn",
      link: settings.linkedin_url,
    },
    {
      icon: "bi-youtube",
      name: "YouTube",
      link: settings.youtube_url,
    },
    {
      icon: "bi-twitter-x",
      name: "Twitter X",
      link: settings.twitter_url,
    },
  ];



  return (
    <section className="section-10">

      <div className="cta-bg">
        <Image
          src="/images/travel-11.jpg"
          alt="Travel"
          fill
          priority
        />
      </div>


      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10 col-xl-8">

            <div className="cta-box text-center">


              <span className="cta-tag">
                <i className="bi bi-stars me-2"></i>
                {settings.cta_tag || "Bespoke Luxury Travel Planning"}
              </span>



              <h4>
                {settings.cta_title || "Your Next Journey Begins With"}
                <span> {settings.site_title || "MyXpert"}</span>
              </h4>



              <p className="mx-auto">
                {settings.cta_description ||
                  "Whether it's a romantic honeymoon, family holiday, luxury beach escape, or a once-in-a-lifetime India tour, our travel experts craft personalized itineraries designed around your style, pace, and budget."
                }
              </p>



              <div className="cta-actions justify-content-center">


                <a
                  href={`tel:${settings.mobile_number_1 || "#"}`}
                  className="btn btn-primary"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  {settings.cta_button_one || "Start Planning"}
                </a>



                <a
                  href="/packages"
                  className="btn btn-white"
                >
                  <i className="bi bi-compass-fill me-2"></i>
                  {settings.cta_button_two || "Explore Packages"}
                </a>


              </div>




              {/* Dynamic Social Media */}

              <div className="social-links">

                {socialMedia.map((item, index) => (

                  item.link && (

                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </a>

                  )

                ))}

              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}