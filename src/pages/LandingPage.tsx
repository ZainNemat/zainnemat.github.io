import type { JSX } from 'react';
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from '../components/Navbar';
import skills from '../data/skills';
import projects from '../data/projects';

export default function LandingPage(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
      <Navbar />
      <main>
        <HeroSection skills={skills} projects={projects} />
      </main>
    </div>
  );
}
