import Image from "next/image";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/headerland/DefaultHeader";
import MobileMenu from "../common/headerland/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../common/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
// import Team from "./Team";
// import OurMission from "./OurMission";

const index = () => {
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

      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="main-title text-left">
                {/* <h2 className="mt0 color-main">About Ankit Goyat</h2>
                <h2 className="mt0">Expertise : Commercial Projects | Residential Projects | Real Estate Investment | Client-Centric Solutions</h2> */}
                <h2 className="mt0 color-main">Our Mission is to Help You Find Your Dream Home</h2>
                {/* <h2 className="mt0">From the Founders' Desk</h2> */}
                At FindHouse, we believe your home is more than just a place—it's where your story begins. Whether you're buying, renting, or investing, our mission is to connect you with the perfect property that fits your lifestyle, goals, and future.

                From modern city apartments to spacious family homes and luxurious retreats, we offer a curated selection of listings backed by trusted real estate professionals who guide you every step of the way.

                Start exploring today and experience a seamless, stress-free journey to your next home. Your dream property is just a click away.
                
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-7 col-xl-6">
                <div className="about_content">
                  <h2 className="mt0 color-main">About Ankit Goyat</h2>
                  <h4 className="mt0">Expertise : Commercial Projects | Residential Projects | Real Estate Investment | Client-Centric Solutions</h4>
                  <p>
                  At WeGrow Infraventures Pvt Ltd, we pride ourselves on helping you find the perfect property that meets your budget. Specializing in projects across Gurgaon and Delhi NCR, we offer a tailored approach to home buying and property investment. With our expert team, we guide residential buyers and commercial investors through every step, ensuring they make the best real estate decisions. Let us help you secure your future with property investments that matter.
                  </p>
                  <p>
                  At WeGrow Infraventures Pvt Ltd, we pride ourselves on helping you find the perfect property that meets your budget. Specializing in projects across Gurgaon and Delhi NCR, we offer a tailored approach to home buying and property investment. With our expert team, we guide residential buyers and commercial investors through every step, ensuring they make the best real estate decisions. Let us help you secure your future with property investments that matter.
                  </p>
                  <p>
                  At WeGrow Infraventures Pvt Ltd, we pride ourselves on helping you find the perfect property that meets your budget. Specializing in projects across Gurgaon and Delhi NCR, we offer a tailored approach to home buying and property investment. With our expert team, we guide residential buyers and commercial investors through every step, ensuring they make the best real estate decisions. Let us help you secure your future with property investments that matter.
                  </p>
                  <p>
                  At WeGrow Infraventures Pvt Ltd, we pride ourselves on helping you find the perfect property that meets your budget. Specializing in projects across Gurgaon and Delhi NCR, we offer a tailored approach to home buying and property investment. With our expert team, we guide residential buyers and commercial investors through every step, ensuring they make the best real estate decisions. Let us help you secure your future with property investments that matter.
                  </p>

                  {/* <ul className="ab_counting">
                    {missionContent.map((item) => (
                      <li className="list-inline-item" key={item.id}>
                        <div className="about_counting">
                          <div className="icon">
                            <span className={`${item.icon}`}></span>
                          </div>
                          <div className="details">
                            <h3>{item.number}</h3>
                            <p>{item.meta}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul> */}
                  {/* End .ab_counting */}
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 offset-xl-1 ms-auto">
                <div className="about_thumb">
                  <Image
                    width={461}
                    height={750}
                    priority
                    className="w100 cover"
                    src="/assets/images/about/head.webp"
                    alt="1.jpg"
                  />
                  {/* <PopupVideo /> */}
                </div>
              </div>
          </div>
          {/* End .row */}

          <div className="row mt80">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
      </section>

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
