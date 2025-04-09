import dynamic from "next/dynamic";
import AddState from "@/components/dashboard/add-state";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
