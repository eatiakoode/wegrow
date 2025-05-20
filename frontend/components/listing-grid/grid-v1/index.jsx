'use client'
import Pagination from "@/components/common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing from "../../common/listing/SidebarListing";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import { getPropertytypeByCategoryTableData,getPropertytypeTableData } from "@/api/frontend/propertytype.ts";

import { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
// import { useRouter, useParams } from "next/navigation";
import { useSearchParams } from 'next/navigation';

const index = () => {
  
  const searchParams = useSearchParams();
  const cat = searchParams.get('cat'); 
  const key = searchParams.get('keyword'); 
  const cityget = searchParams.get('city'); 
  const propertytypeget = searchParams.get('propertytype'); 
  const [category, setCategory] = useState(cat);

  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

 
  const [propertytype, setPropertytype] = useState("");
  const [propertytypes, setPropertytypes] = useState([]);
  /*property paggination*/
   const [propertyList, setPropertyList] = useState([]);
const [totalCount, setTotalCount] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const pageSize = 4;

   const [propertySelectedComp, setPropertySelectedComp] = useState(() => {
      if (typeof window !== "undefined") {
  
        const stored = localStorage.getItem("propertycompare");
        console.log("stored")
        console.log(stored)
        if (stored !== "undefined") {
  
        return stored ? JSON.parse(stored) : [];
        }
      }
      return [];
    });
  
    const [showBox, setShowBox] = useState(false);
    useEffect(  () => {
      if (cat) {
        setCategory(cat);
        const fetchData = async () => {
          try {
            const res = await getPropertytypeByCategoryTableData(cat);
            
            setPropertytypes(res.data || []);
          } catch (error) {
            console.error("Error fetching property types:", error);
          }
        };
    
        fetchData();
      } else {
        const fetchData = async () => {
          try {
            const res = await getPropertytypeTableData();
            setPropertytypes(res || []);
          } catch (error) {
            console.error("Error fetching property types:", error);
          }
        };
    
        fetchData();
      }
      if (key) {
        setKeyword(key);
      }
      if (cityget) {
        setCity(cityget);
      }
      if (propertytypeget) {
        setPropertytype(propertytypeget);
      }
     
      
    }, [cat,key,cityget,propertytypeget]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await getPropertytypeTableData();
    //       console.log("setPropertytypes index")
    //       console.log(setPropertytypes)
    //       setPropertytypes(res || []);
    //     } catch (error) {
    //       console.error("Error fetching property types:", error);
    //     }
    //   };
  
    //   fetchData();
    
    //       }, [setPropertytypes]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <BreadCrumb2 />
            </div>
            {/* End .col */}

            <div className="col-lg-6 position-relative">
              <div className="listing_list_style mb20-xsd tal-991">
                <GridListButton />
              </div>
              {/* End list grid */}

              <div className="dn db-991 mt30 mb0">
                <ShowFilter />
              </div>
              {/* ENd button for mobile sidebar show  */}
            </div>
            {/* End .col filter grid list */}
          </div>
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="sidebar-listing-wrapper">
                <SidebarListing  keyword={keyword} setKeyword={setKeyword}
  city={city} setCity={setCity}
  category={category} setCategory={setCategory}
  propertytype={propertytype} setPropertytype={setPropertytype} setPropertytypes={setPropertytypes} propertytypes={propertytypes}  />
              </div>
              {/* End SidebarListing */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End sidebar conent */}

            <div className="col-md-12 col-lg-8">
              <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar />
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <FeaturedItem  setPropertySelectedComp={setPropertySelectedComp}
        setShowBox={setShowBox} keyword={keyword} setKeyword={setKeyword}
        city={city} setCity={setCity}
        category={category} setCategory={setCategory}
        propertytype={propertytype} setPropertytype={setPropertytype}  propertyList={propertyList} setPropertyList={setPropertyList} setTotalCount={setTotalCount} pageSize={pageSize}  currentPage={currentPage} totalCount={totalCount}/>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                  <Pagination
                      totalCount={totalCount}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={(page) => setCurrentPage(page)}
                    />

                  </div>
                </div>
                {/* End paginaion .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End  page conent */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
          <Footer showBox={showBox} setShowBox={setShowBox} />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
