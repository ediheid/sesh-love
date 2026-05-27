import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MenuOverlay from "../menu/MenuOverlay";
import Svg from "../../components/ui/svgs/Svgs";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
      {/* // todo: decide on transition of hover and hover colour / opacity */}
      {isHome ? (
        <NavLink
          to="/contact"
          className="text-2xl md:text-3xl hover:opacity-70 transition"
        >
          contact
        </NavLink>
      ) : (
        <NavLink
          to="/"
          aria-label="Sesh home"
          className="flex items-center justify-center h-6 md:h-8 hover:opacity-70 transition"
        >
          <Svg name="seshHero" decorative className="h-full w-auto block" />
        </NavLink>
      )}

      <button
        className="text-2xl md:text-3xl hover:opacity-70 transition cursor-pointer"
        onClick={() => setNavOpen(true)}
      >
        menu
      </button>

      <MenuOverlay navOpen={navOpen} onNavClose={() => setNavOpen(false)} />
    </nav>
  );
};

export default NavBar;
