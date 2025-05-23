import dynamic from "next/dynamic";
import MyBlog from "@/components/dashboard/my-blog";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyBlog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
