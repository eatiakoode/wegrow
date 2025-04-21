'use client'
import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";
import { countPropertiesByCity } from "../../api/frontend/city";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FindProperties = () => {
    const [findcities, setFindCities] = useState([]);
        const router = useRouter();
      
        const fetchFindCities = async () => {
          const data = await countPropertiesByCity();
          setFindCities(data.data);
        };
        useEffect(() => {
          fetchFindCities();
        }, []); 
  return (
    <>
      {findcities.slice(0, 4).map((item,index) => (
        <div className={`col-lg-4 ${item.column}`} key={item.cityId}>
          <Link href="/listing-grid-v1" className="properti_city d-block">
            <div className="thumb">
              <Image
                width={752}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={
                  item.citylogoimage
                    ? `${process.env.NEXT_PUBLIC_API_URL}${item.citylogoimage}`
                    : "/default-placeholder.jpg"
                }
                alt= {`${item.cityName}${index + 1}${item.citylogoimage}`}
                unoptimized // Optional: disables Next.js image optimization (useful if external images)
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.cityName}</h4>
                <p>{item.propertyCount} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
