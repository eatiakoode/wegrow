'use client'

import Image from "next/image";
import Slider from "react-slick";

const Hotproperties = () => {
  const HotpropertiesImages = ["1", "2", "3", "4"];

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
      {HotpropertiesImages.map((val, i) => (
        <div className="item" key={i}>
          <div className="our_partner text-center">
            <Image
              width={768}
              height={512}
              className="contain img-fluid"
              src={`/assets/images/hotproperties/${val}.webp`}
              alt={`${val} logo`}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hotproperties;








