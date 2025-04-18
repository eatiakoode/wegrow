export const addFaqAPI = async (title) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token
// console.log("token")
  const token =process.env.NEXT_PUBLIC_TOKEN;


  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/faq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify( title ),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add Faq");
  }

  return response.json();
};


export async function getFaqTableData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1400));
  

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"api/faq"); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
}


export const deleteFaqAPI = async (id: string) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token


  const token =process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/faq/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete Faq");
  }

  return response.json();
};





export const getFaqById = async (id: string) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token


  const token =process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/faq/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get Faq");
  }

  return response.json();
};


export const updateFaqAPI = async (id,faq) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token

  const token =process.env.NEXT_PUBLIC_TOKEN;


  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/faq/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(faq),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add faq");
  }

  return response.json();
};