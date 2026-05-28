import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuOverlay from '../menu/MenuOverlay';
import Svg from '../../components/ui/svgs/Svgs';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="flex w-full items-center justify-between px-4 py-4 md:px-6 md:py-6">
      {isHome ? (
        <NavLink
          to="/contact"
          className="text-interactive hover:text-interactive-hover duration-fast ease-standard cursor-pointer text-2xl transition-colors md:text-3xl"
        >
          contact
        </NavLink>
      ) : (
        <NavLink
          to="/"
          aria-label="Sesh home"
          className="text-interactive hover:text-interactive-hover duration-fast ease-standard cursor-pointer text-2xl transition-colors md:text-3xl"
        >
          <Svg name="seshHero" decorative className="block h-full w-auto" />
        </NavLink>
      )}

      <button
        className="text-interactive hover:text-interactive-hover duration-fast ease-standard cursor-pointer text-2xl transition-colors md:text-3xl"
        onClick={() => setNavOpen(true)}
      >
        menu
      </button>

      <MenuOverlay navOpen={navOpen} onNavClose={() => setNavOpen(false)} />
    </nav>
  );
};

export default NavBar;
