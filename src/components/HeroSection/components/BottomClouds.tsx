import type { JSX } from "react";

export default function BottomClouds(): JSX.Element {
  return (
    <>
      <img
        src="/cloud1.png"
        alt="Bottom Cloud 1"
        className="absolute z-[5] bottom-[-60px] left-[-150px] w-[950px] scale-[1.5] opacity-100"
      />
      <img
        src="/cloud2.png"
        alt="Bottom Cloud 2"
        className="absolute z-[5] bottom-[-70px] right-[-200px] w-[1000px] scale-[1.55] opacity-100"
      />
      <img
        src="/cloud3.png"
        alt="Bottom Cloud 3"
        className="absolute z-[5] bottom-[-65px] left-[15%] w-[980px] scale-[1.6] opacity-100"
      />
      <img
        src="/cloud4.png"
        alt="Bottom Cloud 4"
        className="absolute z-[5] bottom-[-75px] left-1/2 -translate-x-1/2 w-[1050px] scale-[1.7] opacity-100"
      />
    </>
  );
}
