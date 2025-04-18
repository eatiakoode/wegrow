'use client'

import Link from "next/link";
import Slider from "react-slick";
// import properties from "../../data/properties";
import Image from "next/image";
import { getPropertyFeatureData } from "../../api/frontend/property";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
      const router = useRouter();
    
      const fetchProperties = async () => {
        const data = await getPropertyFeatureData();
        console.log(data)
        setProperties(data);
      };
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  let content = properties?.slice(0, 12)?.map((item, index) => (
    <div className="item" key={item.id}>
      <div className="feat_property">
        <div className="thumb">
          <Image
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={
              item.featuredimageurl
                ? `${process.env.NEXT_PUBLIC_API_URL}${item.featuredimageurl}`
                : "/default-placeholder.jpg"
            }
            alt= {`${item.title}${index + 1}${item.featuredimageurl}`}
            unoptimized // Optional: disables Next.js image optimization (useful if external images)
          />
          <div className="thmb_cntnt">
            {/* <ul className="tag mb0">
              {item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul> */}
            {/* End .tag */}

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li> */}
            </ul>
            {/* End .icon */}

            <Link href={`/listing-details-v1/${item._id}`} className="fp_price">
              ${item.price}
              {/* <small>/mo</small> */}
            </Link>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item.propertytypeid?.title}</p>
            <h4>
              <Link href={`/listing-details-v1/${item.id}`}>{item.title}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {item.cityid?.title}, {item.locationid?.title} {item.address}
            </p>

            <ul className="prop_details mb0">
              {/* {item.itemDetails.map((val, i) => ( */}
                <li className="list-inline-item" key="1">
                  <a href="#">
                  Beds: {item.bedrooms}
                  </a>
                </li>
                <li className="list-inline-item" key="2">
                  <a href="#">
                  Baths: {item.bathrooms}
                  </a>
                </li>
                <li className="list-inline-item" key="3">
                  <a href="#">
                  {item.sizeprefix}: {item.areasize}
                  </a>
                </li>
              {/* ))} */}
            </ul>
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link href={`tel:${item.sellerphone}`}>
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/property/man.png"
                    alt="pposter1.png"
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`tel:${item.sellerphone}`}>{item.sellername}</Link>
              </li>
            </ul>
            {/* <div className="fp_pdate float-end">{item.postedYear}</div> */}
            <div className="fp_pdate float-end d-flex gap-2 align-items-center">
              <a href={`tel:${item.sellerphone}`} className="me-2 circle-shape text-dark">
                {/* <i className="fa fa-phone"></i> */}
                <span className="flaticon-telephone"></span>
              </a>
              <a href={`mailto:${item.selleremail}`} className="circle-shape text-dark">
                {/* <i className="fa fa-envelope"></i> */}
                <span className="flaticon-black-back-closed-envelope-shape"></span>
              </a>
            </div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
  ));
  useEffect(() => {
    fetchProperties();
  }, []); 
  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
