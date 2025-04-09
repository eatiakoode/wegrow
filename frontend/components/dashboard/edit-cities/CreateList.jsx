"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCityById, updateCityAPI } from "../../../api/city";
import { getCountryTableData } from "../../../api/country";
import { getStateByCountryTableData } from "../../../api/state";


const CreateList = () => {
  const params = useParams();
    console.log("Params:", params); // Debugging log
  
    const id = params?.id;
    console.log("City ID:", id); // Debugging log
  
    const router = useRouter();
    const [city, setCity] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
  
    useEffect(() => {
      if (!id) return;
      
      const fetchCity = async () => {
        try {
          const data = await getCityById(id);
          console.log("Fetched City Data:", data); // Debugging log
          setCity({ title: data.data.title, status: data.data.status });
        } catch (error) {
          console.error("Error fetching city:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCity();
      const fetchCountries = async () => {
                try {
                  const response = await getCountryTableData();
                  console.log("response")
                  console.log(response)
          
                  setCountries(response || []);
                } catch (err) {
                  console.error("Error fetching Country:", err);
                }
              };
          
              fetchCountries(); 
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const updatedCity = {
          ...city,
          countryid: selectedCountry,
          stateid: selectedState,
        };
        await updateCityAPI(id, updatedCity);
        alert("City updated successfully!");
        router.push("/my-cities");
      } catch (error) {
        alert("Failed to update city.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setCity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setCity((prev) => ({ ...prev, status: !prev.status }));
    };
     const handleCountryChange = (e) => {
          setSelectedCountry(e.target.value);
          console.log("cahnegvalue"+e.target.value)
          const fetchState = async (countryid) => {
            try {
              const response = await getStateByCountryTableData(countryid);
              console.log("response")
              console.log(response)
      
              setStates(response.data || []);
            } catch (err) {
              console.error("Error fetching state:", err);
            }
          };
          fetchState(e.target.value)
        };

        const handleStateChange = (e) => {
          setSelectedState(e.target.value);
        };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
    <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="countrySelect">Select Country</label>
            <select
              id="countrySelect"
              className="selectpicker form-select"
              value={selectedCountry}
              onChange={handleCountryChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select Country --</option>
              {countries.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="stateSelect">Select State</label>
            <select
              id="stateSelect"
              className="selectpicker form-select"
              value={selectedState}
              onChange={handleStateChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="cityTitle">City Title</label>
          <input
        type="text"
        className="form-control"
        id="cityTitle"
        name="title"
        value={city.title}
        onChange={handleChange}
      />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
        className="selectpicker form-select"
        data-live-search="true"
        data-width="100%"
        value={city.status ? "active" : "deactive"}
        onChange={(e) =>
          setCity((prev) => ({
            ...prev,
            status: e.target.value === "active",
          }))
        }
      >
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
