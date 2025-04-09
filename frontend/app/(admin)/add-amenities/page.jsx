import dynamic from "next/dynamic";
import AddAmenities from "@/components/dashboard/add-amenities";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddAmenities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
