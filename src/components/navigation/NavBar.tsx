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
          className="text-interactive md:text-header-nav-lg hover:text-interactive-hover duration-fast ease-standard text-header-nav-sm cursor-pointer transition-colors"
        >
          contact
        </NavLink>
      ) : (
        <NavLink
          to="/"
          aria-label="Sesh home"
          className="text-interactive md:text-header-nav-lg hover:text-interactive-hover duration-fast ease-standard text-header-nav-sm cursor-pointer transition-colors"
        >
          <Svg name="seshHero" decorative className="block h-full w-auto" />
        </NavLink>
      )}

      <button
        className="text-interactive md:text-header-nav-lg hover:text-interactive-hover duration-fast ease-standard text-header-nav-sm cursor-pointer transition-colors"
        onClick={() => setNavOpen(true)}
      >
        menu
      </button>

      <MenuOverlay navOpen={navOpen} onNavClose={() => setNavOpen(false)} />
    </nav>
  );
};

export default NavBar;
