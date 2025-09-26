import { useEffect, useRef, type JSX } from "react";
import { gsap } from "gsap";
import CTAButtons from "./components/HeroCTA";
import SkillsGrid from "./components/SkillsGrid";
import HeroHeading from "./components/HeroHeading";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProjectGrid from "./components/ProjectGrid";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    parallaxTl
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0);

    const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

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

    introTl
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.3 })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to(skillsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .to(projectsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");

    gsap.to(".skill-badge", {
      y: -5,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });

    const projectCards =
      document.querySelectorAll<HTMLDivElement>(".project-card");

    const enterCard = (card: HTMLDivElement) => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    };
    const leaveCard = (card: HTMLDivElement) => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    };

    projectCards.forEach((card) => {
      const handleEnter = () => enterCard(card);
      const handleLeave = () => leaveCard(card);
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      introTl.kill();
      parallaxTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());

      projectCards.forEach((card) => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/sky.png')" }}
    >
      <img
        src="/cloud1.png"
        alt="Cloud 1"
        className="absolute top-20 left-10 w-40 sm:w-56 cloud1"
      />
      <img
        src="/cloud2.png"
        alt="Cloud 2"
        className="absolute top-40 right-20 w-48 sm:w-64 cloud2"
      />
      <img
        src="/cloud3.png"
        alt="Cloud 3"
        className="absolute top-60 left-1/2 w-44 sm:w-60 -translate-x-1/2 cloud3"
      />
      <img
        src="/mountain-bg.png"
        alt="Mountain Background"
        className="absolute inset-0 w-full h-[130%] object-cover object-[center_top] scale-110 mountBg pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center flex flex-col items-center">
        <HeroHeading titleRef={titleRef} subtitleRef={subtitleRef} />
        <SkillsGrid skills={skills} skillsRef={skillsRef} />
        <ProjectGrid projects={projects} projectsRef={projectsRef} />
        <CTAButtons ctaRef={ctaRef} />
      </div>
    </section>
  );
}
