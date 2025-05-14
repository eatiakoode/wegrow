'use client'
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import Testimonial from "../common/Testimonial";
import Blogs from "../common/Blogs";
import ExploreMoreProperties from "../common/ExploreMoreProperties";
import Hotproperties from "../common/Hotproperties";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "../common/WhyChoose";
import PopupSignInUp from "../common/PopupSignInUp";
import { useState, useEffect } from "react";

const Index = () => {
  const [propertySelectedComp, setPropertySelectedComp] = useState(() => {
    if (typeof window !== "undefined") {

      const stored = localStorage.getItem("propertycompare");
      console.log("stored")
      console.log(stored)
      if (stored !== "undefined") {

      return stored ? JSON.parse(stored) : [];
      }
    }
    return [];
  });

  // const [showBox, setShowBox] = useState(propertySelectedComp.length > 0);
  // const [showBox, setShowBox] = useState(false);
  const [showBox, setShowBox] = useState(false);


  // Sync localStorage
  useEffect(() => {
    localStorage.setItem("propertycompare", JSON.stringify(propertySelectedComp));
    // setShowBox(propertySelectedComp.length > 0);
  }, [propertySelectedComp]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties 
                // propertySelectedComp={propertySelectedComp}
        setPropertySelectedComp={setPropertySelectedComp}
        setShowBox={setShowBox}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Location we Serve
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section>

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
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
      </section>


      {/* <!-- Our Testimonials --> */}
      <section id="our-testimonials" className="our-testimonial home5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="color-white">Testimonials</h2>
                <p className="color-white">Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider">
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
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

       <section className="start-partners bgc-f7 pt50 pb50">
            <div className="container">
                {/* <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center">
                      <h2>Explore new properties</h2>
                      <p>Discover the latest off-plan properties and be informed</p>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-6">
                      <div className="main-title text-center">
                        <h2>Explore new properties</h2>
                        <p>Be the first to discover trending off-plan developments with exclusive previews, timely updates, and smart insights to guide your next move.</p>
                      </div>
                      <ExploreMoreProperties />
                    </div>
                    <div className="col-lg-5 offset-lg-1 ml-auto">
                      <div className="main-title text-center">
                        <h2>Explore Hot Properties</h2>
                        <p>Be the first to discover the most sought-after off-plan developments and stay ahead with the latest market trends.</p>
                      </div>
                      <Hotproperties />
                    </div>
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
            <Footer 
            // propertycompare={propertySelectedComp}
        showBox={showBox}
        setPropertycompare={setPropertySelectedComp}  setShowBox={setShowBox}/>
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

export default Index;
