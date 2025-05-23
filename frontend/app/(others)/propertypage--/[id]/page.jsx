import dynamic from "next/dynamic";
import PropertyPage from "@/components/propertypage";
import { getPropertyPageBySlug } from "@/api/frontend/propertypage";

  // export const metadata = {
  //   title: 'Landing Page || Wegrow - Real Estate',
  //   description:
  //     'Wegrow - Real Estate',
  // }
export async function generateMetadata({ params }) {
 
  try {
    const res = await getPropertyPageBySlug(params.id);
    console.log("res")
    console.log(res)
    const blog = res?.data;

    if (!blog) {
      return {
        title: 'Property Not Found | Wegrow',
        description: 'The requested blog was not found.',
      };
    }

    return {
      title: blog.metatitle? blog.metatitle : blog.title || 'Property Details | Wegrow',
      description: blog.metadescription?.slice(0, 200) ? blog.metadescription : blog.description?.slice(0, 200)|| 'Read more on Wegrow blog.',
      // openGraph: {
      //   title: blog.title,
      //   description: blog.description?.slice(0, 150),
      //   images: blog.logoimage
      //     ? [
      //         {
      //           url: `${process.env.NEXT_PUBLIC_API_URL}${blog.logoimage}`,
      //           width: 800,
      //           height: 600,
      //         },
      //       ]
      //     : [],
      // },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: 'Error Loading Blog',
      description: 'There was an issue loading the blog metadata.',
    };
  }
}
const PropertyPageDetailsDynamic = ({params}) => {

  
  const id = params.id;
  
  // alert(id)   
  //  const [blog, setBlog] = useState("");
  // const blog = blogs.find((item) => item.id == id) ||  blogs[0]

// useEffect(() => {
//       if (!id) return;      
//       const fetchBlog = async () => {
//         try {
//           const data = await getBlogById(id);
//           console.log("data")
//           console.log(data)
//           setBlog(data.data)
         
//         } catch (error) {
//           console.error("Error fetching Blog:", error);
//         } finally {
//           // setLoading(false);
//         }
//       };
  
//       fetchBlog();
//     }, [id]);
  return (
    <>

<PropertyPage params={params}/>
    </>
  );
};

// export default BlogDetailsDynamic;

export default dynamic(() => Promise.resolve(PropertyPageDetailsDynamic), {
  ssr: false,
});
// const index = () => {
//   return (
//     <>
//       <PropertyPage params={params}/>
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(index), { ssr: false });
