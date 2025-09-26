import { useEffect, useRef, type JSX } from "react";
import { gsap } from "gsap";
import CTAButtons from "./components/HeroCTA";
import SkillsGrid from "./components/SkillsGrid";
import HeroHeading from "./components/HeroHeading";

interface Project {
  title: string;
  description: string;
  tech: string[];
}

interface HeroSectionProps {
  skills: string[];
  projects: Project[];
}

export default function HeroSection({
  skills,
  projects,
}: HeroSectionProps): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        skillsRef.current,
        projectsRef.current,
        ctaRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        skillsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .to(
        projectsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.3"
      );

    gsap.to(".skill-badge", {
      y: -5,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative z-10 w-full overflow-hidden">
      <div className="absolute top-20 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center flex flex-col items-center">
        <HeroHeading titleRef={titleRef} subtitleRef={subtitleRef} />
        <SkillsGrid skills={skills} skillsRef={skillsRef} />
        <div
        ref={projectsRef}
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 sm:mb-16 w-full"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800/30 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-blue-500/20 rounded-md text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
        <CTAButtons ctaRef={ctaRef} />
      </div>
    </section>
  );
}
