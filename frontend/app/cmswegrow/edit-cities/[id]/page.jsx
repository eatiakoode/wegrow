import dynamic from "next/dynamic";
import EditCities from "@/components/dashboard/edit-cities";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
