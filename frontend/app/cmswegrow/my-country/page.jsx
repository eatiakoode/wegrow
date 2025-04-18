import dynamic from "next/dynamic";
import MyCountry from "@/components/dashboard/my-country";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
