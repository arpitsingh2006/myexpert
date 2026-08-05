"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BannerSection from "@/app/components/common/BannerSection";
import { getBlogDetail } from "@/api/blog";


export default function BlogDetailPage() {


  const searchParams = useSearchParams();

  const slug = searchParams.get("slug");


  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (slug) {
      loadBlog();
    }

  }, [slug]);




  const loadBlog = async () => {

    try {


      const res = await getBlogDetail(slug);


      if (res?.status) {

        setBlog(res.data);

      }


    } catch (error) {

      console.log(error);

    }
    finally {

      setLoading(false);

    }

  };





  if (loading) {

    return (

      <div className="container py-5">

        <h3>
          Loading...
        </h3>

      </div>

    );

  }




  if (!blog) {

    return (

      <div className="container py-5">

        <h3>
          Blog Not Found
        </h3>

      </div>

    );

  }





  return (

    <>


      <BannerSection

        title={blog.title}

        description={blog.description}

        image={
          blog.banner_image ||
          "/images/travel-18.jpg"
        }

      />




      <section className="section-17 py-lx-5 py-3">

        <div className="container">


          <div className="blog-content-card">



            <div className="blog-detail-img mb-4">


              <img

                src={
                  blog.featured_image ||
                  "/images/travel-1.jpg"
                }

                alt={blog.title}

                className="img-fluid w-100"

              />


            </div>





            <div className="blog-meta d-flex gap-3 mb-3">


              <span>

                <i className="bi bi-calendar-event"></i>

                {" "}

                {
                  new Date(
                    blog.created_at
                  ).toLocaleDateString()
                }

              </span>



              <span>

                <i className="bi bi-person"></i>

                Admin

              </span>



              <span>

                <i className="bi bi-tag"></i>

                Travel

              </span>


            </div>






            <h1>

              {blog.title}

            </h1>






            <div className="highlight-box">

              <p>

                {
                  blog.featured_description ||
                  blog.description
                }

              </p>

            </div>







            {

              blog.content ? (


                <div

                  dangerouslySetInnerHTML={{

                    __html: blog.content

                  }}

                />


              ) : (


                <p>

                  {blog.description}

                </p>


              )


            }



          </div>


        </div>


      </section>


    </>

  );

}