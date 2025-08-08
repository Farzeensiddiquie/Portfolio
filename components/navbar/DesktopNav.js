import NavLink from '../NavLink';

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-[5vw] text-[clamp(0.8rem,1.2vw,1.1rem)]">
      <NavLink href="/">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="/project">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
}
