'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/headerland/DefaultHeader";
import MobileMenu from "../common/headerland/MobileMenu";
import LandFeaturedProperties from "./LandFeaturedProperties";
import Amenities from "./Amenities";
import Partners from "../common/Partners";
import Blogs from "../common/Blogs";
import PopupSignInUp from "../common/PopupSignInUp";
// import WhyChoose from "../common/WhyChoose";
import FaqContent from "./FaqContent";
import { getFaqTableData } from "@/api/frontend/faq";
import Testimonial from "../common/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
// import Team from "./Team";
// import OurMission from "./OurMission";

const index = () => {
  const [faqs, setFaqs] = useState([]);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqTableData();
        setFaqs(data.data);
      } catch (error) {
        console.error('Failed to fetch FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />
      {/* <section id="about">...</section>
      <section id="property">...</section>
      <section id="residential">...</section>
      <section id="commercial">...</section>
      <section id="blogs">...</section>
      <section id="faq">...</section>
      <section id="news">...</section>
      <section id="contact">...</section> */}
      
      {/* <!-- About Text Content --> */}
      <section id="about" className="para-land aboutland about-section scroll-mt-80px border-btm">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="main-title text-left">
                {/* <h2 className="mt0 color-main">About Ankit Goyat</h2>
                <h2 className="mt0">Expertise : Commercial Projects | Residential Projects | Real Estate Investment | Client-Centric Solutions</h2> */}
                <h3 className="mt0">About Us</h3>
                <h2 className="mt0 color-main">Our Mission is to Help You Find Your Dream Home</h2>
                {/* <h2 className="mt0">From the Founders' Desk</h2> */}
                <p>At FindHouse, we believe your home is more than just a place—it's where your story begins. Whether you're buying, renting, or investing, our mission is to connect you with the perfect property that fits your lifestyle, goals, and future.
                </p>
                <p>From modern city apartments to spacious family homes and luxurious retreats, we offer a curated selection of listings backed by trusted real estate professionals who guide you every step of the way.</p>
                <p>Start exploring today and experience a seamless, stress-free journey to your next home. Your dream property is just a click away.</p>
              </div>
            </div>
             <div className="col-lg-5 col-xl-6">
              <div className="main-title text-left">
               <Image
                    width={768}
                    height={512}
                    priority
                    className="w100 cover"
                    src="/assets/images/hotproperties/1.webp"
                    alt="image" class="img-fluid"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* End .row */}

         <section id="amenities" className="amenityland property-city scroll-mt-80px border-btm">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center">
                    <h2>Amenities</h2>
                    <p>Facilities You Don’t Want To Miss Out On</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <Amenities />
              </div>
              {/* End .row */}
            </div>
          </section>

          <section id="gallery" className="feature-property-home6 scroll-mt-80px">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-title mb40">
                      <h2>Gallery</h2>
                      {/* <p>
                        Handpicked properties by our team.{" "}
                        <a className="float-end" href="#">
                          View All <span className="flaticon-next"></span>
                        </a>
                      </p> */}
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}

              <div className="feature_property_home6_slider ">
                <div className="container ml--xxl-0">
                  <div className="gutter-x15">
                    <LandFeaturedProperties />
                  </div>
                </div>
              </div>
          </section>
          {/* <!-- Our Blog --> */}
          <section id="blogs" className="our-blog scroll-mt-80px">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center">
                    <h2>News & Blogs</h2>
                    <p>All the Latest from the Real Estate World at Your Fingertips.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <Blogs />
              </div>
            </div>
          </section>
          {/* End .row */}

          {/* <!-- Our Testimonials --> */}
          <section className="our-testimonial home5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center mb20">
                    <h2 className="color-white">Testimonials</h2>
                    <p className="color-white">Here could be a nice sub title</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="testimonial_grid_slider style2 gutter-x15">
                    <Testimonial />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section id="why-chose" className="whychose_us bgc-f7 pb30">
            <div className="container">
              <div className="row mt80">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center">
                    <h2>Why Choose Us</h2>
                    <p>We provide full service at every step.</p>
                  </div>
                </div>
              </div>
             

              <div className="row">
                <WhyChoose />
              </div>
              
            </div>
          </section> */}
          <section className="our-faq bgc-f7">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center">
                    <h2 className="mt0">Frequently Asked Questions</h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="faq_content">
                    <div className="faq_according">
                      <FaqContent faqs={faqs}/>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
          </section>
       

      

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
          <Footer showBox={showBox} setShowBox={setShowBox} />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
