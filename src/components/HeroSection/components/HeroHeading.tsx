import type { RefObject, JSX } from 'react';

interface Props {
  titleRef: RefObject<HTMLHeadingElement | null>;
}

export default function HeroHeading({ titleRef }: Props): JSX.Element {
  return (
    <h1
      ref={titleRef}
      className="font-mono text-white text-4xl sm:text-5xl md:text-7xl font-extrabold text-center "
    >
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
        Zain Nemat
      </span>
    </h1>
  );
}
