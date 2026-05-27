import { useState } from "react";
import MenuOverlay from "../menu/MenuOverlay";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
      {/* // todo: if on home page 'contact' else 'logo for home' */}
      {/* // todo: decide on transition of hover and hover colour / opacity */}
      <button className="text-2xl md:text-3xl hover:opacity-70 transition">
        contact
      </button>

      <button
        className="text-2xl md:text-3xl hover:opacity-70 transition"
        onClick={() => setNavOpen(true)}
      >
        menu
      </button>

      <MenuOverlay navOpen={navOpen} onNavClose={() => setNavOpen(false)} />
    </nav>
  );
};

export default NavBar;
