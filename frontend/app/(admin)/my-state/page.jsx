import dynamic from "next/dynamic";
import MyState from "@/components/dashboard/my-state";

export const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
