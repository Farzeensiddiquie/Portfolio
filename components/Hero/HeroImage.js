'use client';
import useRotatingAnimation from '../../hooks/useRotationAnimation';

export default function HeroImage() {
  const ellipseRef = useRotatingAnimation();

  return (
    
      <div className="relative w-[18.75rem] sm:w-[20rem] md:w-[25rem] max-w-[28rem] aspect-square">
        {/* Main Image */}
        <img
          src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
          alt="Farzeen Wasif"
          className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 md:p-8"
        />

        {/* Rotating SVG */}
        <div ref={ellipseRef} className="absolute inset-0 will-change-transform">
          <svg
            className="w-full h-full"
            viewBox="0 0 412 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="206"
              cy="206.5"
              r="204.5"
              stroke="#18F2E5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="18 36 54 72"
            />
          </svg>
        </div>
      </div>
    
  );
}
