export async function getPropertyFeatureData() {
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