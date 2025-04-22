import Image from "next/image";

const PropertyFAQ = ({property}) => {
  return (
    <div className="accordion" id="accordionExample">
      {property.faq?.slice(37, 38).map((singleItem,index) => (
      <div className="card floor_plan">
        <div id={`heading${index}`}>
          <h2 className="mb-0">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              <ul className="mb0 d-flex align-items-cener flex-wrap">
                <li className="d-inline-flex list-inline-item">First Floor</li>
              
              </ul>
            </button>
          </h2>
        </div>
        <div
          id={`collapse${index}`}
          className="collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#accordionExample"
        >
          <div className="card-body text-center">
            
            <p>
              Plan description. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
       ))}
      
    </div>
  );
};

export default PropertyFAQ;
