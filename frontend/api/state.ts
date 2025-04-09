export const addStateAPI = async (title: string,countryid: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token

    const token =process.env.NEXT_PUBLIC_TOKEN;
  
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/state", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title ,countryid}),
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add State");
    }
  
    return response.json();
  };
  

  export async function getStateTableData() {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/state"); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }


  export const deleteStateAPI = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    const token =process.env.NEXT_PUBLIC_TOKEN;
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/state/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete State");
    }
  
    return response.json();
  };


  
  

  export const getStateById = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    const token =process.env.NEXT_PUBLIC_TOKEN;
  // console.log("eati"+id)
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/state/byid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  console.log(response)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get State");
    }
  
    return response.json();
  };


  export const updateStateAPI = async (id,state) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token

    const token =process.env.NEXT_PUBLIC_TOKEN;
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/state/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add State");
    }
  
    return response.json();
  };

  export const  getStateByCountryTableData = async (id: string) => {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/state/bycountry/${id}`); // Replace with actual API endpoint
      
      if (!response.ok) {
        throw new Error("Failed to fetch state");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching state:", error);
      return []; // Return an empty array in case of an error
    }
  };