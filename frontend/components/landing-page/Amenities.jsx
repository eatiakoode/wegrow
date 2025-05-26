// import Link from "next/link";
// import landamenities from "../../data/landamenities";
import Image from "next/image";

const LandAmenities = ({landingpage}) => {
  return (
    <>
      {landingpage?.amenityid?.slice(0, 18).map((item,index) => (
        <div className="col-sm-6 col-lg-2" key={index}>
          <div className="properti_city_home8 text-center d-block">
            <div className="thumb">
              <Image
                src="/assets/images/property/gym.svg"
                alt="pc1.jpg"
                fill
                className="amenity-icon"
              />
            </div>

            <div className="details">
              <h4>{item.title}</h4>
              {/* <p>{item.number} Properties</p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LandAmenities;
