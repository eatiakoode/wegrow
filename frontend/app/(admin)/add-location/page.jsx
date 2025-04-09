import dynamic from "next/dynamic";
import AddLocation from "@/components/dashboard/add-location";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddLocation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
