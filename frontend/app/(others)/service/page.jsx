import dynamic from "next/dynamic";
import Service from "@/components/service";

export const metadata = {
  title: 'Service || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
