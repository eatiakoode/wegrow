'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/headerland/DefaultHeader";
import MobileMenu from "../common/headerland/MobileMenu";
// import LandFeaturedProperties from "./LandFeaturedProperties";
import FloorPlan from "./FloorPlan";
import PaymentPlanSection from "./PaymentPlanSection";
// import FloorPlanSection from "../components/landing-page/FloorPlanSection";
import Amenities from "./Amenities";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
// import WhyChoose from "../common/WhyChoose";
import FaqContent from "./FaqContent";
import { getFaqTableData } from "@/api/frontend/faq";
import Testimonial from "../common/Testimonial";
import BannerSection from "./BannerSection";
// import Team from "./Team";
// import OurMission from "./OurMission";

const index = () => {
  const [faqs, setFaqs] = useState([]);

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
      <BannerSection />
      
      {/* <!-- About Text Content --> */}
      <section id="about" className="para-land aboutland about-section scroll-mt-80px border-btm">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6">
              {/* <div className="main-title text-left">
               <Image
                    width={768}
                    height={512}
                    priority
                    className="w100 cover"
                    src="/assets/images/hotproperties/1.webp"
                    alt="image" className="img-fluid"
                  />
              </div> */}
              <div className="main-title text-left pb-0">
                <div
                  className="story-two_image wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <Image
                    src="/assets/images/hotproperties/about.webp"
                    alt="Story Image One"
                    width={1200}
                    height={1000}
                    className="img-fluid w-full h-auto object-cover"
                  />
                </div>

                <div
                  className="story-two_image-two wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <Image
                    src="/assets/images/hotproperties/about-in.webp"
                    alt="Story Image Two"
                    width={1200}
                    height={1000}
                    className="img-fluid w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
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
                <div className="row clearfix">
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="story-two_check"><i className="flaticon-tick"></i>11 Towers<br/>Up to 32 floors High</div>
                </div>
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="story-two_check"><i className="flaticon-tick"></i>3, 3.5, 4 and 4.5 Bedroom Luxury Residences</div>
                </div>
                

              </div>
              </div>
              
            </div>
             
          </div>
        </div>
      </section>
          {/* End .row */}

        <PaymentPlanSection />
          
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

          
          <FloorPlan />
                 
          <section id="gallery" className="feature-property-home6 scroll-mt-80px border-btm">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-title mb40">
                      <h2>Gallery</h2>
                      
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}

              <div className="feature_property_home6_slider ">
                <div className="container ml--xxl-0">
                  <div className="row gutter-x15">
                    {/* <LandFeaturedProperties />
                     */}
                     <div className="col-lg-4">
                          <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/1.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/2.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                       <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/3.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                       <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/4.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                       <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/5.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                       <div className="properti_city home6">
                            <div className="thumb">
                              <Image
                                width={768}
                                height={512}
                                className="img-fluid"
                                src="/assets/images/hotproperties/1.webp"
                                alt="image"
                              />
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </section>
          {/* <!-- Our News & Insights --> */}
          <section id="newsinsights" className="news-insights about-section scroll-mt-80px border-btm">
              <div className="container">
                <div class="main-title text-center">
                  <h2>Market Knowledge</h2>
                  <p>Uncover key information to guide your property investments</p>
                </div>
                <div className="row">
                        <div className="col-lg-4">
                          <Link href="/news-and-insights/market-trends" className="property-block_one style-two">
                              <div className="property-block_one-inner">
                                <div className="thumb">
                                  <Image
                                    width={768}
                                    height={512}
                                    className="img-fluid"
                                    src="/assets/images/news-insights/price-trends.svg"
                                    alt="image"
                                    />
                                </div>
                                <div className="property-block_one-content wow fadeInUp animated">
                                  <div className="property-block_one-location">Market Trends</div>
                                  <h4 className="property-block_one-heading">Stay updated with property rates and pricing trends in top locations
                                    </h4>
                                  {/* <ul className="property-block_one-info">
                                    <li><span>₹ 3.65 Cr* Onwards</span></li>
                                  </ul> */}
                                </div>
                              </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                          <Link href="/news-and-insights/city-insights" className="property-block_one style-two">
                              <div className="property-block_one-inner">
                                <div className="thumb">
                                  <Image
                                    width={768}
                                    height={512}
                                    className="img-fluid"
                                    src="/assets/images/news-insights/city-insights.svg"
                                    alt="image"
                                    />
                                </div>
                                <div className="property-block_one-content wow fadeInUp animated">
                                  <div className="property-block_one-location">City Highlights</div>
                                  <h4 className="property-block_one-heading">Gain insights into leading cities before you invest
                                    </h4>
                                  {/* <ul className="property-block_one-info">
                                    <li><span>₹ 3.65 Cr* Onwards</span></li>
                                  </ul> */}
                                </div>
                              </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                          <Link href="/blogs" className="property-block_one style-two">
                              <div className="property-block_one-inner">
                                <div className="thumb">
                                  <Image
                                    width={768}
                                    height={512}
                                    className="img-fluid"
                                    src="/assets/images/news-insights/housing-research.svg"
                                    alt="image"
                                    />
                                </div>
                                <div className="property-block_one-content wow fadeInUp animated">
                                  <div className="property-block_one-location">Real Estate Reports</div>
                                  <h4 className="property-block_one-heading">Explore detailed research on India’s residential property market
                                    </h4>
                                  {/* <ul className="property-block_one-info">
                                    <li><span>₹ 3.65 Cr* Onwards</span></li>
                                  </ul> */}
                                </div>
                              </div>
                            </Link>
                        </div>
                </div>
                {/* End .row */}

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
          <section className="our-faq scroll-mt-80px bgc-f7" id="faq">
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
            <Footer />
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
