import dynamic from "next/dynamic";
import EditState from "@/components/dashboard/edit-state";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
