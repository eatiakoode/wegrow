import dynamic from "next/dynamic";
import ListV1 from "@/components/listing-list/list-v1";

export const metadata = {
  title: 'Simple Listing – List V1 || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
