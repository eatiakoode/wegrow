"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { addSellerAPI } from "@/api/seller";
import { toast } from 'react-toastify';
const CreateList = () => {
  const router = useRouter();
   const [title, setTitle] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setisSubmitting] = useState("");
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
  
      // ✅ Clear the error when user starts typing
      if (e.target.value.trim() !== "") {
        setError("");
      }
    };
  
    const addSeller = async (e) => {
      
      e.preventDefault();
      setisSubmitting(true)
  
      if (!title.trim()) {
        setError("Title is required");
        return;
      }
      // alert("testw")
      setError("");
      
      try {
         const payload = {
          title,email,phone
         }
        const data = await addSellerAPI(payload); // 🔹 Call the API function
       
        toast.success(data.message);
       
        if(data.status=="success"){
         setTimeout(() => {
            router.push("/cmswegrow/my-seller");
            }, 1500); 
        }
  
        setTitle(""); // ✅ Reset input after success
      } catch (error) {
        setError(error.message); // ❌ Show error if request fails
      }
    };
  return (
    <>
    <form onSubmit={addSeller} className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sellerTitle">Seller Name</label>
          <input type="text" className="form-control" id="sellerTitle" value={title} onChange={handleTitleChange} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sellerEmail">Seller Email</label>
          <input type="text" className="form-control" id="sellerEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sellerPhone">Seller Phone</label>
          <input type="text" className="form-control" id="sellerPhone" value={phone} onChange={(e) => setPhone(e.target.value)} />
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
          <button className="btn btn1 float-start" type="button" onClick={() => window.location.href = '/cmswegrow/my-dashboard'}>Back</button>
          <button type="submit" className="btn btn2 float-end" disabled={isSubmitting} >{isSubmitting ? 'Sending...' : 'Submit'}</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default CreateList;
