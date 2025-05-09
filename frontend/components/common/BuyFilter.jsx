'use client'

// import { useState } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getCityWithLocation} from "@/api/frontend/city";

const locations = {
  "Find Properties in Dubai": [
    "Apartments for Rent in Dubai",
    "Apartments for Rent in Downtown Dubai",
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
  const [cities, setCities] = useState([]);

   useEffect(() => {
        const fetchCities = async () => {
          try {
            const response = await getCityWithLocation();
            // console.log("responsecitylocation")
            // console.log(response)
            setCities(response.data || []);
          } catch (err) {
            console.error("Error fetching Country:", err);
          }
        };
    
        fetchCities();
      }, []);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const router = useRouter();

  const toggleAccordion = (city) => {
    setActiveAccordion(activeAccordion === city ? null : city);
  };

  const handleRedirect = (place) => {
    // Redirect with query or state as needed
    router.push(`/property-list?cat=${(place)}`);
  };

  return (
    <div className={`accordion-filter ${className}`}>
      {/* {Object.entries(cities).map(([city, locations]) => ( */}
      {/* {cities.map(([city, locations]) => ( */}
      {cities.map((city) => (
        
        <div key={city._id} className="accordion-item mb-2 border">
          {/* <p
            className="accordion-header bg-light p-3 cursor-pointer "
            onClick={() => toggleAccordion(city)}
          >
            {city}
          </p> */}
          <p
              className={`accordion-header p-3 cursor-pointer ${
                activeAccordion === city._id ? "active-header" : ""
              }`}
              onClick={() => toggleAccordion(city._id)}
            >
              Find Properties in {city.title}
            </p>

          {activeAccordion === city._id && (
            <div className="accordion-body p-3">
              <ul className="list-unstyled">
                {city.locations.map((place, idx) => (
                  <li
                    key={idx}
                    className="mb-2 cursor-pointer"
                    onClick={() => handleRedirect(city._id)}
                    style={{ cursor: "pointer" }}
                  >
                 Property in {place.title}
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
