import type { RefObject, JSX } from 'react';

interface Props {
  titleRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
}

export default function HeroHeading({ titleRef, subtitleRef }: Props): JSX.Element {
  return (
    <>
      <h1
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Zain Nemat
        </span>
      </h1>

      <p
        ref={subtitleRef}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12"
      >
        Full-Stack Developer specializing in TypeScript, Electron, and Modern Web Technologies
      </p>
    </>
  );
}
