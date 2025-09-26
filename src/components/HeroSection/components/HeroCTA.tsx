import type { JSX, RefObject } from 'react';

interface CTAButtonsProps {
  ctaRef: RefObject<HTMLDivElement | null>;
}

export default function CTAButtons({ ctaRef }: CTAButtonsProps): JSX.Element {
  return (
    <div
      ref={ctaRef}
      id="contact"
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <button className="px-6 py-3 sm:px-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105 text-sm sm:text-base">
        Get In Touch
      </button>
    </div>
  );
}