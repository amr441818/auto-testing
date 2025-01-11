import { LoadingIcon } from "@/app/components/icons";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image src="/plane.gif" alt="loading" height={300} width={300} />
    </div>
  );
};

export default Loading;
