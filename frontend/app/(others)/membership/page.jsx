import dynamic from "next/dynamic";
import Membership from "@/components/membership";

export const metadata = {
  title: 'Membership || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
