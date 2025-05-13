
'use client'

import Link from "next/link";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength,addKeyword,addCity } from "../../../features/properties/propertiesSlice";
// import properties from "../../../data/properties";
import { getPropertyFilterData } from "@/api/frontend/property";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCompare } from "@/components/common/footer/CompareContext";

const FeaturedItem = ({ setPropertySelectedComp, setShowBox,setKeyword, setCity,setCategory, setPropertytype , keyword, city,category, propertytype ,propertyList,setPropertyList,setTotalCount,pageSize,currentPage}) => {
  const [properties, setProperties] = useState([]);
  // const [propertytypeFilter, setPropertyTypeFilter] = useState("");
  const { propertycompare, setPropertycompare } = useCompare();

          const router = useRouter();
          const addCompareProperty = async (id) => {
      
            const isExist = propertycompare.includes(id);
          
            if (isExist) {
              alert("Already added for compare");
            } else if (propertycompare.length >= 3) {
              alert("You have already selected 3 products");
            } else {
              setPropertycompare((old) => [...old, id]);
              setShowBox(true);
            }
          };
    const fetchProperties = async () => {
      // console.log("cityHandler")
      // console.log(cityHandler)
      // console.log("city")
      // console.log(city)
      // console.log("setCity")
      // console.log(setCity)
      // console.log("getCity")
      // console.log(getCity)
      const filter ={
        "keyword":keyword,
        "city":city,
        "category":category,
        "propertytype": propertytype,
        "limit":pageSize,
        "page":currentPage
      };
      console.log(currentPage)
      console.log("test filter dd eati")
      console.log(filter)

            const data = await getPropertyFilterData(filter);
            // console.log("prperty data")
            // console.log(data)
            setProperties(data.items);
            setPropertyList(data.items)
            setTotalCount(data.totalCount)
          };
  // const {
  //   keyword,
  //   // location,
  //   // status,
  //   // propertyType,
  //   // price,
  //   // bathrooms,
  //   // bedrooms,
  //   // garages,
  //   // yearBuilt,
  //   // area,
  //   // amenities,
  //   city,
  //   category,
  //   propertytype
  // } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();
  console.log("test");
  console.log(addCity);

  // keyword filter
  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());
  const categoryHandler = (item) => {
    // alert("hbjhbh")
     return item.type.toLowerCase().includes(category.toLowerCase());
  };
  const cityHandler = (item) =>
      item.type.toLowerCase().includes(city.toLowerCase());
  const propertytypeHandler = (item) =>
      item.type.toLowerCase().includes(propertytype.toLowerCase());

  // location handler
  // const locationHandler = (item) => {
  //   return item.location.toLowerCase().includes(location.toLowerCase());
  // };

  // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());

  // // properties handler
  // const propertiesHandler = (item) =>
  //   item.type.toLowerCase().includes(propertyType.toLowerCase());

  // // price handler
  // const priceHandler = (item) =>
  //   item.price < price?.max && item.price > price?.min;

  // // bathroom handler
  // const bathroomHandler = (item) => {
  //   if (bathrooms !== "") {
  //     return item.itemDetails[1].number == bathrooms;
  //   }
  //   return true;
  // };

  // bedroom handler
  // const bedroomHandler = (item) => {
  //   if (bedrooms !== "") {
  //     return item.itemDetails[0].number == bedrooms;
  //   }
  //   return true;
  // };

  // garages handler
  // const garagesHandler = (item) =>
  //   garages !== ""
  //     ? item.garages?.toLowerCase().includes(garages.toLowerCase())
  //     : true;

  // // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;

  // // area handler
  // const areaHandler = (item) => {
  //   if (area.min !== 0 && area.max !== 0) {
  //     if (area.min !== "" && area.max !== "") {
  //       return (
  //         parseInt(item.itemDetails[2].number) > area.min &&
  //         parseInt(item.itemDetails[2].number) < area.max
  //       );
  //     }
  //   }
  //   return true;
  // };

  // advanced option handler
  // const advanceHandler = (item) => {
  //   if (amenities.length !== 0) {
  //     return amenities.find((item2) =>
  //       item2.toLowerCase().includes(item.amenities.toLowerCase())
  //     );
  //   }
  //   return true;
  // };

  // // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // // featured handler
  // const featuredHandler = (item) => {
  //   if (featured !== "") {
  //     return item.featured === featured;
  //   }
  //   return true;
  // };

  // status handler
  let content = properties
    ?.slice(0, 10)
    // ?.filter(keywordHandler)
    // ?.filter(categoryHandler)
    // ?.filter(cityHandler)
    // ?.filter(propertytypeHandler)
    // ?.filter(keywordHandler)
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.filter(propertiesHandler)
    // ?.filter(priceHandler)
    // ?.filter(bathroomHandler)
    // ?.filter(bedroomHandler)
    // ?.filter(garagesHandler)
    // ?.filter(builtYearsHandler)
    // ?.filter(areaHandler)
    // ?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    // ?.filter(featuredHandler)
    .map((item,index) => (
      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item._id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
              <Image
                width={343}
                height={220}
                className="img-whp w-100 h-100 cover"
                src={
                  item.featuredimageurl
                    ? `${process.env.NEXT_PUBLIC_API_URL}${item.featuredimageurl}`
                    : "/default-placeholder.jpg"
                }
                alt= {`${item.title}${index + 1}${item.featuredimageurl}`}
                unoptimized // Optional: disables Next.js image optimization (useful if external images)
              />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
              <li className="list-inline-item" key="1">
                  <a href="#">{item.categoryid?.title}</a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured}
                  </a>
                </li> */}
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                <a href="#" onClick={(e) => {
                e.preventDefault();
                addCompareProperty(item._id);
              }}>
                <span className="flaticon-transfer-1"></span>
              </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li> */}
              </ul>

              <Link href={`/property-detail/${item.slug}`} className="fp_price">
              {item.price}
              {/* <small>/mo</small> */}
            </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
            <p className="text-thm">{item.propertytypeid?.title}</p>
            <h4>
              <Link href={`/property-detail/${item.slug}`} >{item.title}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {item.cityid?.title}, {item.locationid?.title} {item.address}
            </p>

            <ul className="prop_details mb0">
              {/* {item.itemDetails.map((val, i) => ( */}
                <li className="list-inline-item" key="1">
                  <a href="#">
                  Beds: {item.bedrooms}
                  </a>
                </li>
                <li className="list-inline-item" key="2">
                  <a href="#">
                  Baths: {item.bathrooms}
                  </a>
                </li>
                <li className="list-inline-item" key="3">
                  <a href="#">
                  {item.sizeprefix}: {item.areasize}
                  </a>
                </li>
              {/* ))} */}
            </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link href={`tel:${item.sellerphone}`}>
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/property/man.png"
                    alt="pposter1.png"
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`tel:${item.sellerphone}`}>{item.sellername}</Link>
              </li>
            </ul>
            <div className="fp_pdate float-end d-flex gap-2 align-items-center">
              <a href={`tel:${item.sellerphone}`} className="me-2 circle-shape text-dark">
                {/* <i className="fa fa-phone"></i> */}
                <span className="flaticon-telephone"></span>
              </a>
              <a href={`mailto:${item.selleremail}`} className="circle-shape text-dark">
                {/* <i className="fa fa-envelope"></i> */}
                <span className="flaticon-black-back-closed-envelope-shape"></span>
              </a>
            </div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content?.length));
  }, [dispatch, content]);
  // useEffect(() => {
  //   fetchProperties();
  // }, []);
  useEffect(() => {
    fetchProperties();
  }, [keyword, city, category, propertytype,currentPage,setTotalCount]);
  

  return <>{content}</>;
};

export default FeaturedItem;
