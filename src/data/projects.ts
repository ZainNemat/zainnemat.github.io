export interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Ztuth Desktop Application",
    description: "Cross-platform Electron app with NestJS backend",
    tech: ["Electron", "NestJS", "TypeScript", "ElectricSQL"],
  },
  {
    title: "Ztuth Mobile Dental SaaS Platform",
    description: "React Native app with real-time features",
    tech: ["React Native", "TypeScript", "ElectricSQL", "Expo"],
  },
  {
    title: "Ztuth Website",
    description: "Ztuth website built with Next.js",
    tech: ["Next.js", "Tailwind"],
  },
];

export default projects;
