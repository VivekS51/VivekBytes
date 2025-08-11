import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Gaurav</div>

        {/* Hamburger in center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>

        {/* Contact Me Button */}
        <div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Overlay Menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
