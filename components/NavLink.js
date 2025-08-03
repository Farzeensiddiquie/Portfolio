'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative group px-3 py-2 text-sm md:text-base text-white transition"
    >
      {children}

      {/* Active underline */}
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${
          isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      {/* Hover dot-to-line animation */}
      {!isActive && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-[2px] group-hover:rounded-none transition-all duration-300 ease-in-out"
        />
      )}
    </Link>
  );
}
