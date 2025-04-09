import dynamic from "next/dynamic";
import EditPropertytype from "@/components/dashboard/edit-propertytype";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
