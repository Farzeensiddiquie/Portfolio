"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-[5vw] text-[#fff]">
      {links.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          className={`hover:scale-110 transition duration-300 ease-in-out ${
            activeSection === link.id ? "text-[#14827ec1]" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
