import Link from "next/link";
import landamenities from "../../data/landamenities";
import Image from "next/image";

const LandAmenities = () => {
  return (
    <>
      {landamenities.slice(0, 8).map((item) => (
        <div className="col-sm-6 col-lg-3" key={item.id}>
          <Link
            href="/listing-grid-v2"
            className="properti_city_home8 text-center d-block"
          >
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
          </Link>
        </div>
      ))}
    </>
  );
};

export default LandAmenities;
