"use client";

import { useState, useEffect } from "react";
import { addLocationAPI } from "../../../api/location";
import { getCityTableData,getCityByStateTableData } from "../../../api/city";

import { getCountryTableData } from "../../../api/country";
import { getStateByCountryTableData } from "../../../api/state";
import { getLocationByCityTableData } from "../../../api/location";


const CreateList = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
   
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [address, setAddress] = useState("");
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
    if (e.target.value.trim() !== "") setError("");
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

    const fetchCity = async (stateid) => {
      console.log("stateid"+stateid)
      try {
        const response = await getCityByStateTableData(stateid);
        console.log("response")
        console.log(response)

        setCities(response.data || []);
      } catch (err) {
        console.error("Error fetching state:", err);
      }
    };
    fetchCity(e.target.value)
  };
const handleCityChange = (e) => {
  setSelectedCity(e.target.value);
  const fetchLocation = async (cityid) => {
    console.log("cityid"+cityid)
    try {
      const response = await getLocationByCityTableData(cityid);
      console.log("response")
      console.log(response)

      setLocations(response.data || []);
    } catch (err) {
      console.error("Error fetching state:", err);
    }
  };
  fetchLocation(e.target.value)
};
const handleLocationChange = (e) => {
  setSelectedLocation(e.target.value);
};
const handleAddressChange = (e) => {
  setAddress(e.target.value);
  if (e.target.value.trim() !== "") setError("");
};


const addProperty = async (e) => {
  e.preventDefault();

  if (!title.trim()) {
    setError("Title is required");
    return;
  }

  setError("");

  try {
    const addProperty = {
              title:title,
              countryid: selectedCountry,
              stateid: selectedState,
              cityid: selectedCity,
            };
            // const data = await addCityAPI(addCity);
    const data = await addPropertyAPI(addProperty);
    console.log(data);
    alert(data.message);
    setTitle("");
    setSelectedCity("");
  } catch (error) {
    setError(error.message);
  }
};
  return (
    <>
    <form onSubmit={addProperty} className="row">
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Type</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Type1</option>
            <option data-tokens="Type2">Type2</option>
            <option data-tokens="Type3">Type3</option>
            <option data-tokens="Type4">Type4</option>
            <option data-tokens="Type5">Type5</option>
          </select>
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
          >
            <option data-tokens="Status1">Status1</option>
            <option data-tokens="Status2">Status2</option>
            <option data-tokens="Status3">Status3</option>
            <option data-tokens="Status4">Status4</option>
            <option data-tokens="Status5">Status5</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Rooms</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}
      
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Location</h3>
                      </div>

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
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="citySelect">Select City</label>
            <select
              id="citySelect"
              className="selectpicker form-select"
              value={selectedCity}
              onChange={handleCityChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select City --</option>
              {cities.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label htmlFor="locationSelect">Select Location</label>
            <select
              id="locationSelect"
              className="selectpicker form-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              data-live-search="true"
              data-width="100%"
            >
              <option value="">-- Select Location --</option>
              {locations.map((location) => (
                <option key={location._id} value={location._id}>
                  {location.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyAddress">Address</label>
          <input type="text"
              className="form-control"
              id="propertyAddress"
              value={address}
              onChange={handleAddressChange}/>
        </div>
      </div>
                    </div>
                  
      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end" type="submit" >Submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
