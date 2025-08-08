import NavLink from '../NavLink';

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[50vw] max-w-[300px] backdrop-blur-2xl z-[40] transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 pt-20 text-white">
        <NavLink onClick={() => setMenuOpen(false)} href="/">Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} href="#about">About</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} href="/project">Projects</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} href="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
