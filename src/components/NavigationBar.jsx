import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu} from "lucide-react";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 border-b-2 border-orange-500 pb-1"
      : "text-white border-b-2 border-transparent pb-1 hover:border-orange-400";

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Activities", to: "/activities" },
    { name: "Services", to: "/services" },
    { name: "Programmes", to: "/programmes" },
    { name: "Resources", to: "/resources" },
    { name: "Engagements", to: "/engangements" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent backdrop-blur px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="flex justify-between items-center">
        <img
          src="/src/assets/favicon.png.webp"
          alt="Logo"
          width="50"
          className="object-contain"
        />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-lg">
          {navItems.map((item, idx) => (
            <NavLink key={idx} to={item.to} className={navLinkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 md:hidden font-medium text-lg">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default NavigationBar;
