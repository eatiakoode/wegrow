export const addCategoryAPI = async (title: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token
// console.log("token")
    const token =process.env.NEXT_PUBLIC_TOKEN;

  
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add category");
    }
  
    return response.json();
  };
  

  export async function getCategoryTableData() {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/category"); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }


  export const deleteCategoryAPI = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    const token =process.env.NEXT_PUBLIC_TOKEN;

  console.log("eati"+id)
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete category");
    }
  
    return response.json();
  };


  
  

  export const getCategoryById = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token


    const token =process.env.NEXT_PUBLIC_TOKEN;

  console.log("eati"+token)
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/category/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get category");
    }
  
    return response.json();
  };


  export const updateCategoryAPI = async (id,category) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token

    const token =process.env.NEXT_PUBLIC_TOKEN;

  
    if (!token) {
      throw new Error("User not authenticated!");
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
  
    if (!response.status) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add category");
    }
  
    return response.json();
  };