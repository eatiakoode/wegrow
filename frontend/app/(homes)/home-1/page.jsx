import dynamic from "next/dynamic";
import HomeMain from "@/components/home";
// import { useToast } from "@/components/ToastContext";


export const metadata = {
  title: 'Home || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  // const { showToast } = useToast();
  return (
    <>
    {/* <button onClick={() => showToast("This is a custom toast!", "success")}>
      Show Toast
    </button> */}
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
