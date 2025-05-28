"use client"; 
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import BreadCrumb2 from "@/components/blog-details/BreadCrumb2";
// import Comments from "@/components/blog-details/Comments";
// import Pagination from "@/components/blog-details/Pagination";
// import Ratings from "@/components/blog-details/Ratings";
// import RelatedPost from "@/components/blog-details/RelatedPost";
// import ReviewBox from "@/components/blog-details/ReviewBox";
import BlogSidebar from "@/components/common/blog/BlogSidebar";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
// import Social from "@/components/common/footer/Social";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";
// import blogs from "@/data/blogs";
import Image from "next/image";

import { getBlogById } from "@/api/frontend/blog";

// export const metadata = {
//   title: 'Blog Details || Wegrow - Real Estate React Template',
//   description:
//     'Wegrow - Real Estate React Template',
// }

const BlogDetailsDynamic = ({params}) => {

  
  const id = params.id;
   const [blog, setBlog] = useState("");
  // const blog = blogs.find((item) => item.id == id) ||  blogs[0]

useEffect(() => {
      if (!id) return;      
      const fetchBlog = async () => {
        try {
          const data = await getBlogById(id);
          console.log("data")
          console.log(data)
          setBlog(data.data)
         
        } catch (error) {
          console.error("Error fetching Blog:", error);
        } finally {
          // setLoading(false);
        }
      };
  
      fetchBlog();
    }, [id]);
  return (
    <>

      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2 />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <div className="blog_sp_tag">
                    <a href="#">{blog.blogcategory?.title}</a>
                  </div>
                  <h3 className="blog_sp_title">{blog?.title}</h3>
                  <ul className="blog_sp_post_meta">
                    {/* <li className="list-inline-item">
                      <a href="#">
                        <Image
                          width={40}
                          height={40}
                          className="img-fluid"
                          src="/assets/images/property/man.png"
                          alt="pposter1.png"
                        />
                      </a>
                    </li> */}
                    <li className="list-inline-item">
                      <a href={`/blog-detail/${blog.slug}`}>{blog.source}</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-calendar"></span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })}</a>
                    </li>
                    {/* <li className="list-inline-item">
                      <span className="flaticon-view"></span>
                    </li> */}
                    {/* <li className="list-inline-item">
                      <a href="#"> 341 views</a>
                    </li> */}
                    {/* <li className="list-inline-item">
                      <span className="flaticon-chat"></span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">15</a>
                    </li> */}
                  </ul>
                  <div className="thumb">
                    <Image
                      width={692}
                      height={414}
                      className="w-100 h-100 cover"
                      src={
                        blog.logoimage
                          ? `${process.env.NEXT_PUBLIC_API_URL}${blog.logoimage}`
                          : "/default-placeholder.jpg"
                      }
                      alt= {`${blog.title}`}
                      unoptimized
                    />
                  </div>

                  <div className="details">
                 
                    {blog?.description}
                  </div>
                 
                </div>
          
              </div>
              {/* End .main_blog_post_content */}

             
            </div>
            {/* End .col */}

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt15 pb15">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

// export default BlogDetailsDynamic;

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
