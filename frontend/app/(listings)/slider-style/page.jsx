import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";

export const metadata = {
  title: 'Listing - Slider Style || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <SliderStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
