"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getBuilderById, updateBuilderAPI } from "../../../api/builder";


const CreateList = () => {
  const params = useParams();
    console.log("Params:", params); // Debugging log
  
    const id = params?.id;
    console.log("Builder ID:", id); // Debugging log
  
    const router = useRouter();
    const [builder, setBuilder] = useState({ title: "", status: false });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!id) return;
      
      const fetchBuilder = async () => {
        try {
          const data = await getBuilderById(id);
          console.log("Fetched Builder Data:", data); // Debugging log
          setBuilder({ title: data.data.title, status: data.data.status });
        } catch (error) {
          console.error("Error fetching Builder:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBuilder();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateBuilderAPI(id, builder);
        alert("Builder updated successfully!");
        router.push("/my-builder");
      } catch (error) {
        alert("Failed to update Builder.");
        console.error(error);
      }
    };
  
    const handleChange = (e) => {
      setBuilder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleStatusChange = () => {
      setBuilder((prev) => ({ ...prev, status: !prev.status }));
    };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="builderTitle">Builder Title</label>
          <input
        type="text"
        className="form-control"
        id="builderTitle"
        name="title"
        value={builder.title}
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
        value={builder.status ? "active" : "deactive"}
        onChange={(e) =>
          setBuilder((prev) => ({
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
