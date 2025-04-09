"use client";

import { useState, useEffect } from "react";
import { addCityAPI } from "../../../api/city";
import { getCountryTableData } from "../../../api/country";
import { getStateByCountryTableData } from "../../../api/state";
const CreateList = () => {
   const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    useEffect(() => {
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
        
      }, []);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
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
  
    const addCity = async (e) => {
      
      e.preventDefault();
  
      if (!title.trim()) {
        setError("Title is required");
        return;
      }
      // alert("testw")
      setError("");
      
      try {
        const addCity = {
          ...city,
          countryid: selectedCountry,
          stateid: selectedState,
        };
        const data = await addCityAPI(addCity); // 🔹 Call the API function
        
        console.log(data);
        alert(data.message);
        setSelectedCountry("");
  
        setTitle(""); // ✅ Reset input after success
      } catch (error) {
        setError(error.message); // ❌ Show error if request fails
      }
    };
  return (
    <>
    <form onSubmit={addCity} className="row">
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
          <input type="text" className="form-control" id="cityTitle" value={title} onChange={handleTitleChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6 d-none">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="1">Active</option>
            <option data-tokens="2">Deactive</option>
          </select>
        </div>
      </div>
      {/* End .col */}

     


      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button type="submit" className="btn btn2 float-end">Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
