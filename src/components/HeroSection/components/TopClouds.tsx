import { useRef, useEffect, type JSX} from "react";
import { gsap } from "gsap";

export default function TopClouds(): JSX.Element {
  const cloud1Ref = useRef<HTMLImageElement>(null);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const cloud3Ref = useRef<HTMLImageElement>(null);
  const cloud4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(cloud1Ref.current, {
      x: 20,
      y: -10,
      duration: 6,
      ease: "sine.inOut",
    });
    tl.to(
      cloud2Ref.current,
      { x: -15, y: -5, duration: 8, ease: "sine.inOut" },
      "<"
    );
    tl.to(
      cloud3Ref.current,
      { x: 10, y: 8, duration: 10, ease: "sine.inOut" },
      "<"
    );
    tl.to(
      cloud4Ref.current,
      { x: -12, y: 6, duration: 9, ease: "sine.inOut" },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <img
        ref={cloud1Ref}
        src="/cloud1.png"
        alt="Cloud 1"
        className="absolute top-20 left-10 w-40 sm:w-56"
      />
      <img
        ref={cloud2Ref}
        src="/cloud2.png"
        alt="Cloud 2"
        className="absolute top-40 right-20 w-48 sm:w-64"
      />
      <img
        ref={cloud3Ref}
        src="/cloud3.png"
        alt="Cloud 3"
        className="absolute top-60 left-1/2 w-44 sm:w-60 -translate-x-1/2"
      />
      <img
        ref={cloud4Ref}
        src="/cloud4.png"
        alt="Cloud 4"
        className="absolute top-28 right-[40%] w-36 sm:w-52"
      />
    </>
  );
}
