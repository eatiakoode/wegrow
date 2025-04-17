import dynamic from "next/dynamic";
import HomeMain from "@/components/home";

export const metadata = {
  title: 'Home || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
