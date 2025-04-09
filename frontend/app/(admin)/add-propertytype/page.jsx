import dynamic from "next/dynamic";
import AddPropertytype from "@/components/dashboard/add-propertytype";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
