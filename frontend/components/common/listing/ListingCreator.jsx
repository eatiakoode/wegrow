import Image from "next/image";


const Creaator = () => {
  return (
    <div className="media d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Image
          width={40}
          height={40}
          className="me-3"
          src="/assets/images/property/man.png"
          alt="image"
        />
        <h5 className="mt-0 mb0">Rahul Singh</h5>
      </div>
      <div className="media-body">
        <div className="fp_pdate float-end d-flex gap-2 align-items-center">
              <a href={`tel:+917421922000`} className="me-2 circle-shape text-dark">
                {/* <i className="fa fa-phone"></i> */}
                <span className="flaticon-telephone"></span>
              </a>
              <a href={`mailto:info@wegrowinfraventures.com`} className="circle-shape text-dark">
                {/* <i className="fa fa-envelope"></i> */}
                <span className="flaticon-black-back-closed-envelope-shape"></span>
              </a>
            </div>
      </div>
    </div>
  );
};

export default Creaator;
