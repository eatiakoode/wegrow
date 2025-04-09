"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getAmenityById, updateAmenityAPI } from "../../../api/amenity";


const CreateList = () => {
  const params = useParams();
    console.log("Params:", params); // Debugging log
  
    const id = params?.id;
    console.log("Amenity ID:", id); // Debugging log
  
    const router = useRouter();
    const [amenity, setAmenity] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!id) return;
      
      const fetchAmenity = async () => {
        try {
          const data = await getAmenityById(id);
          console.log("Fetched Amenity Data:", data); // Debugging log
          setAmenity({ title: data.data.title, status: data.data.status });
        } catch (error) {
          console.error("Error fetching Amenity:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAmenity();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateAmenityAPI(id, amenity);
        alert("Amenity updated successfully!");
        router.push("/my-amenities");
      } catch (error) {
        alert("Failed to update Amenity.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setAmenity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setAmenity((prev) => ({ ...prev, status: !prev.status }));
    };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="amenityTitle">Amenity Title</label>
          <input
        type="text"
        className="form-control"
        id="amenityTitle"
        name="title"
        value={amenity.title}
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
        value={amenity.status ? "active" : "deactive"}
        onChange={(e) =>
          setAmenity((prev) => ({
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
