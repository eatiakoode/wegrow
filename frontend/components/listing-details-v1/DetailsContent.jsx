// import Comments from "../blog-details/Comments";
// import Ratings from "../blog-details/Ratings";
// import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
// import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyFAQ from "../common/listing-details/PropertyFAQ";

// import PropertyVideo from "../common/listing-details/PropertyVideo";
// import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

import Image from "next/image";

const DetailsContent = ({property,faqs}) => {
    return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem property={property}/>
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Description</h4>
        <PropertyDescriptions property={property}/>
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails property={property} />
        </div>
      </div>
      {/* End .additional_details */}

      {/* <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div> */}
      {/* End .additional_details */}

      {/* <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div> */}
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">Amenities</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures property={property}/>
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Location{" "}
          <small className="float-end">
          {property.cityid?.title}, {property.locationid?.title} {property.address}
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation  property={property}/>
        </div>
      </div>
      {/* End .location_area */}
      {faqs?.length > 0 && (
      <div className="application_statics mt30">
        <h4 className="mb30">FAQ</h4>
        <div className="faq_according style2">
          <PropertyFAQ faqs={faqs}/>
        </div>
      </div>
      )}

{property.floorplan?.length > 0 && (
      <div className="application_statics mt30">
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <FloorPlans property={property}/>
        </div>
      </div>
     
    )}
     {/* End .floor_plane */}
     {property?.videoembedcode && (
      <div className="shop_single_tab_content style2 mt30">
      <h4 className="mb30"> Property video</h4>
      <div dangerouslySetInnerHTML={{ __html: property?.videoembedcode }} />
      </div>
)}
      {/* <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div> */}
      {property?.siteplanurl && (
      <div className="application_statics mt30">
      <h4 className="mb10">Site Plan</h4>
        <div
          className={`education_distance mb15`}
        >
        <Image
                    width={343}
                    height={220}
                    className="img-whp w-100 h-100 cover"
                    src={
                      property.siteplanurl
                        ? `${process.env.NEXT_PUBLIC_API_URL}${property.siteplanurl}`
                        : "/default-placeholder.jpg"
                    }
                    alt= {`${property.title}`}
                    unoptimized // Optional: disables Next.js image optimization (useful if external images)
                  />
        </div>
      </div>
      )}
      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore />
      </div> */}
      {/* End walkscore_area */}
      {property?.nearby && (
      <div className="whats_nearby mt30">
        <h4 className="mb10">What&apos;s Nearby</h4>
        <div
          className={`education_distance mb15`}
        ><div dangerouslySetInnerHTML={{ __html: property?.nearby }} /></div>
        {/* <WhatsNearby  property={property}/> */}
      </div>
      )}
      {/* End what's nearby area */}

      {/* <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4>896 Reviews</h4>
            <ul className="review_star_list mb0 pl10">
              <Ratings />
            </ul>
            <a className="tr_outoff pl10" href="#">
              ( 4.5 out of 5 )
            </a>
            <a className="write_review float-end fn-xsd" href="#">
              Write a Review
            </a>
          </div>
         
          <Comments />
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div> */}
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
