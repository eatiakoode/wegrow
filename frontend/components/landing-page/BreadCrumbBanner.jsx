'use client'
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section id="homein" className="inner_page_breadcrumb">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/images/background/frame-video.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title="landing page" />
              <h4 className="breadcrumb_title">Landing Page</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
