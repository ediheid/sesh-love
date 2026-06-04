import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import MenuOverlay from '../menu/MenuOverlay';
import Panel from '../menu/Panel';
import MenuHeader from '../menu/MenuHeader';
import MenuNav from '../menu/MenuNav';
import MenuFooter from '../menu/MenuFooter';
import Svg from '../../components/ui/svgs/Svgs';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Prevent focus outline on element behind overlay during close animation
  const onNavClose = () => {
    setNavOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const onNavOpen = () => setNavOpen(true);

  useScrollLock(navOpen);

  const location = useLocation();
  const isHome = location.pathname === '/';
  const showContactShortcut = isHome;

  return (
    <nav className="flex w-full items-center justify-between px-4 py-4 md:px-6 md:py-6">
      {showContactShortcut ? (
        <NavLink to="/contact" className="nav-link">
          contact
        </NavLink>
      ) : (
        <NavLink to="/" aria-label="Sesh home" className="nav-link">
          <Svg name="seshHero" decorative className="block h-full w-auto" />
        </NavLink>
      )}
      <button className="nav-link" onClick={onNavOpen}>
        menu
      </button>
      <MenuOverlay navOpen={navOpen} onNavClose={onNavClose}>
        <Panel navOpen={navOpen}>
          <MenuHeader onNavClose={onNavClose} />
          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6">
            <MenuNav onNavClose={onNavClose} />
            <MenuFooter />
          </div>
        </Panel>
      </MenuOverlay>{' '}
    </nav>
  );
};

export default NavBar;
