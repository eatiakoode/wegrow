import dynamic from "next/dynamic";
import Login from "@/components/login";

export const metadata = {
  title: 'Login || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
