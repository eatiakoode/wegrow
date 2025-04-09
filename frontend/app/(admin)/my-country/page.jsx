import dynamic from "next/dynamic";
import MyCountry from "@/components/dashboard/my-country";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
