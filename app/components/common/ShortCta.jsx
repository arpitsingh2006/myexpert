"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSettings } from "../../../api/settings";

export default function ShortCta() {

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



  return (
    <section className="section-11">

      <div className="container">

        <div className="cta-card">


          <div className="cta-bg">

            <Image
              src="/images/travel-3.jpg"
              alt="Travel CTA"
              fill
              priority
            />

          </div>



          <div className="row align-items-center position-relative z-2">


            <div className="col-lg-8">

              <div className="cta-content">


                <h2>
                  {settings.short_cta_title || "Let's Plan Your Dream"}
                  {" "}
                  <span>
                    {settings.short_cta_highlight || "Vacation"}
                  </span>
                </h2>



                <p>
                  {settings.short_cta_description ||
                    "From luxury escapes to unforgettable adventures, we create tailor-made experiences designed around you."
                  }
                </p>


              </div>

            </div>




            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">


              <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">


                <a
                  href={settings.booking_url || "/booking"}
                  className="btn btn-primary btn-lg"
                >

                  {settings.short_cta_button || "Book Now"}

                  <i className="bi bi-arrow-right ms-2"></i>

                </a>



                <a
                  href={`tel:${settings.mobile_number_1 || ""}`}
                  className="btn btn-white"
                >

                  <i className="bi bi-telephone-fill me-2"></i>

                  {settings.mobile_number_1 || "9336463082"}

                </a>


              </div>


            </div>


          </div>


        </div>

      </div>


    </section>
  );
}