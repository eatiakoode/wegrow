export const addPropertyEnquiryAPI = async (title: string) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token
// console.log("token")
  // const token =process.env.NEXT_PUBLIC_TOKEN;
  const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name);
// const token = localStorage.getItem("token"); // 🔹 Retrieve token
// // console.log("token")
//     const token =process.env.NEXT_PUBLIC_TOKEN;
const token =userData.token


  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+"api/propertyenquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add PropertyEnquiry");
  }

  return response.json();
};


export async function getPropertyEnquiryTableData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 10));
  

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+"api/propertyenquiry",
        {
          next: { revalidate: 60 }
        }); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
}


export const deletePropertyEnquiryAPI = async (id: string) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token


  // const token =process.env.NEXT_PUBLIC_TOKEN;
  const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name);
// const token = localStorage.getItem("token"); // 🔹 Retrieve token
// // console.log("token")
//     const token =process.env.NEXT_PUBLIC_TOKEN;
const token =userData.token
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/propertyenquiry/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete PropertyEnquiry");
  }

  return response.json();
};





export const getPropertyEnquiryById = async (id: string) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token


  // const token =process.env.NEXT_PUBLIC_TOKEN;
  const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name);
// const token = localStorage.getItem("token"); // 🔹 Retrieve token
// // console.log("token")
//     const token =process.env.NEXT_PUBLIC_TOKEN;
const token =userData.token
  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/propertyenquiry/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get PropertyEnquiry");
  }

  return response.json();
};


export const updatePropertyEnquiryAPI = async (id,propertyenquiry) => {
  // const token = localStorage.getItem("token"); // 🔹 Retrieve token

  // const token =process.env.NEXT_PUBLIC_TOKEN;
  const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name);
// const token = localStorage.getItem("token"); // 🔹 Retrieve token
// // console.log("token")
//     const token =process.env.NEXT_PUBLIC_TOKEN;
const token =userData.token


  if (!token) {
    throw new Error("User not authenticated!");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_API_URL+`api/propertyenquiry/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(propertyenquiry),
  });

  if (!response.status) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add PropertyEnquiry");
  }

  return response.json();
};