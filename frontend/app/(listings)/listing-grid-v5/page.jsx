import dynamic from "next/dynamic";
import GridV5 from "@/components/listing-grid/grid-v5";

export const metadata = {
  title: 'Simple Listing – Grid V5 || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <GridV5 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
