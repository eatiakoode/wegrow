import dynamic from "next/dynamic";
import MyCities from "@/components/dashboard/my-cities";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
