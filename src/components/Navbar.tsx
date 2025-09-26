import type { JSX } from 'react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/50 backdrop-blur-sm px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ZN
        </span>

        <div className="flex gap-4 sm:gap-6 text-sm sm:text-base mt-3 sm:mt-0 items-center">
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/zainnemat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
