import dynamic from "next/dynamic";
import EditCities from "@/components/dashboard/edit-cities";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
