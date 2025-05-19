import dynamic from "next/dynamic";
import PropertyPage from "@/components/propertypage";

export const metadata = {
  title: 'Landing Page || Wegrow - Real Estate',
  description:
    'Wegrow - Real Estate',
}

const index = () => {
  return (
    <>
      <PropertyPage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
