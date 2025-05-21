import Link from "next/link";
import landamenities from "../../data/landamenities";
import Image from "next/image";

const LandAmenities = () => {
  return (
    <>
      {landamenities.slice(0, 8).map((item) => (
        <div className="col-sm-6 col-lg-2" key={item.id}>
          <div className="properti_city_home8 text-center d-block">
            <div className="thumb">
              <Image
                src={item.img}
                alt="pc1.jpg"
                fill
                className="amenity-icon"
              />
            </div>

            <div className="details">
              <h4>{item.name}</h4>
              <p>{item.number} Properties</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LandAmenities;
