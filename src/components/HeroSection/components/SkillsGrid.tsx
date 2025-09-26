import type { RefObject, JSX } from 'react';

interface Props {
  skills: string[];
  skillsRef: RefObject<HTMLDivElement | null>;
}

export default function SkillsGrid({ skills, skillsRef }: Props): JSX.Element {
  return (
    <div
      ref={skillsRef}
      className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16"
    >
      {skills.map((skill, index) => (
        <span
          key={index}
          className="skill-badge px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-colors text-sm sm:text-base"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
