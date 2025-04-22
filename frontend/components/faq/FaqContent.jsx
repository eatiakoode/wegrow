const FaqContent = ({faqs}) => {
  return (
    <>
      <div className="accordion" id="accordionExample">
      {faqs?.slice(37, 38).map((singleItem,index) => (
        <div className="card">
          <div id="{`heading${index}`}">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
             {singleItem.title}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div>
        
      ))}
      {/* End .card */}

      </div>
    </>
  );
};

export default FaqContent;
