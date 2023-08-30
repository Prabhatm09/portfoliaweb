//image
import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="absolute  animate-pulse  mix-blend-color-dodge rotate-12
    -left-36 
    -bottom-12 
    duration-75 
    z-10 
    w-[200px] 
    xl:w-[260px]"
    >
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
