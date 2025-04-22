export async function getPropertyFeatureData(filter) {
    // Fake delay
    console.log(filter)
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+"api/property/list?featured=yes&limit=6"); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }

  export const getPropertyById = async (id: string) => {
    // const token = localStorage.getItem("token"); // 🔹 Retrieve token
  
    const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+`api/property/detail/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to get Property");
    }
  
    return response.json();
  };

  export async function getPropertyFilterData() {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FRONTEND_API_URL+"api/property/list?featured=yes&limit=6"); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  }