import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-[5vw] text-[#fff]">
      <Link className="hover:transform hover:scale-130 transition duration-300 ease-in-out" href="#hero">Home</Link>
      <Link className="hover:transform hover:scale-130 transition duration-300 ease-in-out" href="#about">About</Link>
      <Link className="hover:transform hover:scale-130 transition duration-300 ease-in-out" href="#project">Projects</Link>
      <Link className="hover:transform hover:scale-130 transition duration-300 ease-in-out" href="#contact">Contact</Link>
    </nav>
  );
}
