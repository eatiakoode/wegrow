// "use client";

import "photoswipe/dist/photoswipe.css";

// import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";
import properties from "@/data/properties";
import DetailsContent from "@/components/listing-details-v1/DetailsContent";
import Sidebar from "@/components/listing-details-v1/Sidebar";
import ListingOne from "@/components/listing-single/ListingOne";

import { getPropertyBySlug } from "@/api/frontend/property";
import PropertyMain from "@/components/listing-details-v1";
export async function generateMetadata({ params }) {
  try {
    const res = await getPropertyBySlug(params.id);
    const blog = res?.data;

    if (!blog) {
      return {
        title: 'Property Not Found | Wegrow',
        description: 'The requested blog was not found.',
      };
    }

    return {
      title: blog.title || 'Property Details | Wegrow',
      description: blog.description?.slice(0, 150) || 'Read more on Wegrow blog.',
      // openGraph: {
      //   title: blog.title,
      //   description: blog.description?.slice(0, 150),
      //   images: blog.logoimage
      //     ? [
      //         {
      //           url: `${process.env.NEXT_PUBLIC_API_URL}${blog.logoimage}`,
      //           width: 800,
      //           height: 600,
      //         },
      //       ]
      //     : [],
      // },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: 'Error Loading Blog',
      description: 'There was an issue loading the blog metadata.',
    };
  }
}
const ListingDynamicDetailsV1 = ({params})  => {
 
  // const id = params.id;
  // const data = await getPropertyBySlug(id);
  // setProperty(data.data)
  // const property = properties?.find((item) => item.id == id) || properties[0]
  // const [property, setProperty] = useState([]);
  // const [propertySelectedComp, setPropertySelectedComp] = useState(() => {
  //   if (typeof window !== "undefined") {

  //     const stored = localStorage.getItem("propertycompare");
  //     console.log("stored")
  //     console.log(stored)
  //     if (stored !== "undefined") {

  //     return stored ? JSON.parse(stored) : [];
  //     }
  //   }
  //   return [];
  // });

  // const [showBox, setShowBox] = useState(propertySelectedComp.length > 0);
  // const [showBox, setShowBox] = useState(false);
  // const [showBox, setShowBox] = useState(false);

  // useEffect(() => {
  //    if (!id) return;      
  //         const fetchProperty = async () => {
  //           try {
  //             const data = await getPropertyBySlug(id);
  //             setProperty(data.data)
  //             console.log("propertyid")
  //             console.log(data)
  //             console.log("propertyid end")
             
              
  //           } catch (error) {
  //             console.error("Error fetching Builder:", error);
  //           } finally {
  //             // setLoading(false);
  //           }
  //         };
      
  //         fetchProperty();
       
  // }, [id]);

  return (
    <>
      <PropertyMain params={params} />
    </>
  );
};

export default ListingDynamicDetailsV1;
// export default function Page({ params }) {
//   return <PropertyMain params={params} />;
// }
