
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/headerland/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import FeaturedItem from "./FeaturedItem";

import Image from "next/image";

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
               <div className="row">
                <FeaturedItem/>
              </div>

     

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
