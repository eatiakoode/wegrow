"use client"; 

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getBlogById, updateBlogAPI } from "../../../api/blog";


const CreateList = () => {
  const params = useParams();  
    const id = params?.id;  
    const router = useRouter();
    const [blog, setBlog] = useState({ title: "", status: false,description: "", });
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");  
    const [logo, setLogo] = useState(null);
    const [logoimage, setLogoImage] = useState(null);
    const uploadLogo = (e) => {
      setLogo(e.target.files[0]);
  };
    useEffect(() => {
      if (!id) return;      
      const fetchBlog = async () => {
        try {
          const data = await getBlogById(id);
          console.log("data")
          console.log(data)
          console.log(process.env.NEXT_PUBLIC_API_URL+data.data.logoimage)
          // setBlog({ title: data.data.title, status: data.data.status, description: data.data.description });
          setTitle(data.data.title)
          setStatus(data.data.status)
          setDescription(data.data.description)
          if(data.data.logoimage) {
          setLogoImage(process.env.NEXT_PUBLIC_API_URL+data.data.logoimage)
          }
        } catch (error) {
          console.error("Error fetching Blog:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlog();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("status", status);
        if (logo) {
          formData.append("logo", logo);
        }
        await updateBlogAPI(id, formData);
        alert("Blog updated successfully!");
        router.push("/my-blog");
      } catch (error) {
        alert("Failed to update Blog.");
        console.error(error);
      }
    };
  
    // const handleChange = (e) => {
    //   setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };
  
    // const handleStatusChange = () => {
    //   setBlog((prev) => ({ ...prev, status: !prev.status }));
    // };
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <form onSubmit={handleSubmit} className="row">
    <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={uploadLogo}
                    />
                   <label
                      htmlFor="image1"
                      style={
                        logoimage                          
                        ? { backgroundImage: `url(${logoimage})` }
                          : logo
                          ? { backgroundImage: `url(${URL.createObjectURL(logo)})` }
                          : undefined
                      }
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="BlogTitle">Blog Title</label>
          <input
        type="text"
        className="form-control"
        id="BlogTitle"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-12">
          <div className="my_profile_setting_textarea form-group">
            <label htmlFor="BlogDescription">Description</label>
            <textarea id="BlogDescription" className="form-control" name="description" rows="7"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Blog description"></textarea>
            {error.description && <span className="text-danger">{error.description}</span>}
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
  value={status ? "active" : "deactive"}
  onChange={(e) => setStatus(e.target.value === "active")}
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
