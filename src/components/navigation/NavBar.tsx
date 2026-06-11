import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import MenuOverlay from '../menu/MenuOverlay';
import Panel from '../menu/Panel';
import MenuHeader from '../menu/MenuHeader';
import MenuNav from '../menu/MenuNav';
import MenuFooter from '../menu/MenuFooter';
import Svg from '../../primitives/svgs/Svgs';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menuCycle, setMenuCycle] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent focus outline on element behind overlay during close animation
  const onNavClose = () => {
    setNavOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const onNavOpen = () => {
    setNavOpen(true);
    setMenuCycle((prev) => prev + 1);
  };

  useScrollLock(navOpen);

  const location = useLocation();
  const isHome = location.pathname === '/';
  const showContactShortcut = isHome;

  useEffect(() => {
    if (navOpen) {
      scrollRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [navOpen, menuCycle]);

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
          <div
            ref={scrollRef}
            className="flex flex-1 flex-col justify-between overflow-x-hidden overflow-y-auto px-6"
          >
            <MenuNav key={menuCycle} onNavClose={onNavClose} />
            <MenuFooter />
          </div>
        </Panel>
      </MenuOverlay>{' '}
    </nav>
  );
};

export default NavBar;
