'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const locations = {
  "Find Properties in Dubai": [
    "Apartments for Rent in Dubai",
    "Apartments for Rent in Downtown Dubai",
    "Apartments for Rent in Dubai Marina",
    "Apartments for Rent in Jumeirah Village Circle (JVC)",
    "Apartments for Rent in Business Bay",
    "Apartments for Rent in Dubai Creek Harbour (The Lagoons)",
    "Apartments For Rent In Deira",
    "Apartments For Rent in Dubai Monthly",
    "Apartments For Rent in Dubai Silicon Oasis",
    "Apartments For Rent in Jumeirah Lake Towers (JLT)",
    "Apartments For Rent in Bur Dubai",
    "Apartments For Rent in International City",
  ],
  "Find Properties in Gurgaon": [
    "Apartments for Rent in Gurgaon",
    "Villas for Rent in Gurgaon",
  ],
  "Find Properties in Delhi": [
    "Apartments for Rent in Delhi",
    "Villas for Rent in Delhi",
  ],
  "Find Properties in Noida": [
    "Apartments for Rent in Noida",
    "Villas for Rent in Noida",
  ],
};

const BuyFilter = ({ className = "" }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const router = useRouter();

  const toggleAccordion = (city) => {
    setActiveAccordion(activeAccordion === city ? null : city);
  };

  const handleRedirect = (place) => {
    // Redirect with query or state as needed
    router.push(`/listing-grid-v1?location=${encodeURIComponent(place)}`);
  };

  return (
    <div className={`accordion-filter ${className}`}>
      {Object.entries(locations).map(([city, places]) => (
        <div key={city} className="accordion-item mb-2 border">
          {/* <p
            className="accordion-header bg-light p-3 cursor-pointer "
            onClick={() => toggleAccordion(city)}
          >
            {city}
          </p> */}
          <p
              className={`accordion-header p-3 cursor-pointer ${
                activeAccordion === city ? "active-header" : ""
              }`}
              onClick={() => toggleAccordion(city)}
            >
              {city}
            </p>

          {activeAccordion === city && (
            <div className="accordion-body p-3">
              <ul className="list-unstyled">
                {places.map((place, idx) => (
                  <li
                    key={idx}
                    className="mb-2 cursor-pointer"
                    onClick={() => handleRedirect(place)}
                    style={{ cursor: "pointer" }}
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BuyFilter;
