import "photoswipe/dist/photoswipe.css";
import { getPropertyBySlug } from "@/api/frontend/property";
import PropertyMain from "@/components/listing-details-v1";
export async function generateMetadata({ params }) {
  try {
    const res = await getPropertyBySlug(params.id);
    const blog = res?.data;

    if (!blog) {
      return {
        title: 'Property Not Found | Wegrow',
        description: 'The requested blog was not found.',
      };
    }

    return {
      title: blog.metatitle? blog.metatitle : blog.title || 'Property Details | Wegrow',
      description: blog.metadescription?.slice(0, 200) ? blog.metadescription : blog.description|| 'Read more on Wegrow blog.',
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
const ListingDynamicDetailsV1 = ({params})  => {
  return (
    <>
      <PropertyMain params={params} />
    </>
  );
};

export default ListingDynamicDetailsV1;
