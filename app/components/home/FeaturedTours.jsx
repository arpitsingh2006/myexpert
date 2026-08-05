"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getPackages } from "../../../api/packages";


export default function FeaturedTours() {

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    fetchPackages();

  }, []);



  const fetchPackages = async () => {

    try {

      const response = await getPackages();

      console.log("Packages API Response:", response);


      if(response?.status === true){

        setPackages(response.data.slice(0,3));

      }


    } catch(error){

      console.error("Package API Error:", error);

    } finally {

      setLoading(false);

    }

  };



  return (

    <section className="section-1 py-xl-5 py-3">

      <div className="container py-xl-4 py-3">


        <div className="row">

          <div className="col-xl-7">

            <div className="section-title">

              <span>
                Featured Tours
              </span>


              <h2>
                Curated journeys, ready to begin
              </h2>


              <p>
                A short list of the trips our travellers love most this season — each fully attended by a personal concierge.
              </p>

            </div>

          </div>



          <div className="col-xl-5 d-flex justify-content-xl-end align-items-center mt-xl-0 mt-4">

            <a 
              href="/packages"
              className="btn btn-primary-outline"
            >

              View all packages

              <i className="bi bi-arrow-right ps-2"></i>

            </a>

          </div>


        </div>





        <div className="row mt-5">


          {
            loading && (

              <div className="text-center">
                Loading Packages...
              </div>

            )
          }





          {
            !loading && packages.length === 0 && (

              <div className="text-center">
                No Packages Found
              </div>

            )
          }





          {
            packages.map((item)=>(


              <div 
                className="col-xl-4 col-lg-4 col-md-6 mb-4"
                key={item.id}
                data-aos="fade-up"
              >


                <div className="travel-card">


                  <div
                    className="travel-card-img"
                    style={{
                      backgroundImage:`url(${item.image})`
                    }}
                  />



                  <div className="travel-card-content">



                    <div className="d-flex justify-content-between location-text my-3">


                      <div className="d-flex align-items-center">

                        <span className="bi bi-geo-alt pe-2"></span>

                        <span>
                          {item.location}
                        </span>

                      </div>



                      <div className="d-flex align-items-center ms-2">

                        <span className="bi bi-stopwatch pe-2"></span>

                        <span>
                          {item.duration_string}
                        </span>

                      </div>


                    </div>





                    <div className="card-title mb-xl-4 mb-2">


                      <h3>
                        {item.package_name}
                      </h3>


                      <p>
                        {item.description}
                      </p>


                    </div>





                    <div className="book-text">


                      <div className="d-xl-flex justify-content-xl-between align-items-xl-center">


                        <div className="price">

                          <p>
                            Starting from
                          </p>


                          <div className="d-flex align-items-center gap-2">


                            <del className="old-price">

                              ₹
                              {Number(item.price_per_person)+3000}

                            </del>



                            <b>
                              ₹{item.price_per_person}
                            </b>


                          </div>


                        </div>





                        <div className="d-flex gap-2">


                          <a
                            href="tel:+911234567890"
                            className="btn btn-primary"
                            title="Call Now"
                          >

                            <i className="bi bi-telephone-fill"></i>

                          </a>




                          <a
                            href={`/packages/${item.slug}`}
                            className="btn btn-secondary"
                          >

                            Book Now

                            <i className="bi bi-arrow-right ps-2"></i>

                          </a>



                        </div>



                      </div>


                    </div>



                  </div>



                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

}