import dynamic from "next/dynamic";
import AddCities from "@/components/dashboard/add-cities";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
