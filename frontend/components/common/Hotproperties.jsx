'use client'

import Image from "next/image";
import Slider from "react-slick";

const Hotproperties = () => {
  const HotpropertiesImages = [
    { img: "1", price: "10.5 Cr*", title: "DLF The Dahlias" },
    { img: "2", price: "8.2 Cr*", title: "M3M Golf Estate" },
    { img: "3", price: "12 Cr*", title: "Trump Towers" },
    { img: "4", price: "9.5 Cr*", title: "Central Park Sky Villas" },
    { img: "5", price: "11 Cr*", title: "DLF Aralias" }
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // adjust based on your design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {HotpropertiesImages.map((property, i) => (
        <div className="item" key={i}>
          <div className="properti_city our_partner text-center">
            <Image
              width={768}
              height={512}
              className="contain img-fluid"
              src={`/assets/images/hotproperties/${property.img}.webp`}
              alt={`${property.title} image`}
            />
            <div class="overlay"><div class="details">
              <h4>{property.price}</h4>
              <p>{property.title}</p>
            </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hotproperties;








