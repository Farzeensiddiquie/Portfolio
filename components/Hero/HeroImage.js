'use client';

import useRotatingAnimation from '../../hooks/useRotationAnimation';

export default function HeroImage() {
  const ellipseRef = useRotatingAnimation();

  return (
    <div className="overflow-hidden mb-[20px]">
      <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
        <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
          <img
            src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
            alt="Farzeen Wasif"
            className="absolute top-0 left-0 h-full w-full object-contain p-7"
          />
          <div ref={ellipseRef} className="absolute top-0 left-0 h-full w-full will-change-transform">
            <svg
              className="h-full w-full"
              viewBox="0 0 412 413"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="206"
                cy="206.401"
                r="204.5"
                stroke="#18F2E5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="18 36 54 72"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
