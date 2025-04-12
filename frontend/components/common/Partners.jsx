import Image from "next/image";

const Partners = () => {
  const partnersImages = ["adani", "aipl", "ambience", "conscient", "emaar", "godrej"];
  return (
    <>
      {partnersImages.map((val, i) => (
        <div className="col-sm-6 col-md-4 col-lg" key={i}>
          <div className="our_partner">
            <Image
              width={150}
              height={150}
              className="contain"
              src={`/assets/images/partners/${val}.webp`}
              alt="1.webp"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Partners;
