import dynamic from "next/dynamic";
import MyPropertytype from "@/components/dashboard/my-propertytype";

export const metadata = {
  title: 'My Properties  || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
