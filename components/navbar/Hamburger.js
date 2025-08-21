import { Menu, X } from 'lucide-react';

export default function Hamburger({ menuOpen, setMenuOpen }) {
  return (
    <button
    name='menu'
      className="md:hidden text-white z-[60]"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}
