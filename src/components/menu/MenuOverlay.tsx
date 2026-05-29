import { NavLink } from 'react-router-dom';
import Svg from '../../components/ui/svgs/Svgs';

type Props = {
  navOpen: boolean;
  onNavClose: () => void;
};

const MenuOverlay = ({ navOpen, onNavClose }: Props) => {
  const navItemClass =
    'bg-nav-link hover:bg-nav-link-hover text-interactive font-[var(--font-weight-bold)] text-nav-link-text hover:text-interactive-hover duration-fast ease-standard flex w-[80%] items-center justify-center text-menu-nav-sm md:text-menu-nav-md lg:text-menu-nav-lg transition-colors';

  const navItems = [
    { to: '/workshops', label: 'workshops' },
    { to: '/training', label: 'training' },
    { to: '/contact', label: 'contact' },
    { to: '/', label: 'home' },
  ];

  return (
    <div
      className={`duration-slow ease-standard fixed inset-0 z-50 transition-transform ${navOpen ? 'pointer-events-auto' : 'pointer-events-none'} `}
    >
      {/* Backdrop */}
      <div
        onClick={onNavClose}
        className={`duration-slow absolute inset-0 bg-black/40 transition-opacity ${navOpen ? 'opacity-100' : 'opacity-0'} `}
      />

      {/* Panel */}
      <aside
        className={`bg-primary duration-slow ease-standard absolute top-0 right-0 h-full w-full overflow-hidden transition-transform will-change-transform lg:w-1/2 ${navOpen ? 'translate-x-0' : 'translate-x-[101%]'} `}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={onNavClose}
            aria-label="Close menu"
            className="cursor-pointer"
          >
            <Svg
              name="closeSVG"
              className="text-icon hover:text-icon-hover duration-fast ease-standard transition-colors"
            />
          </button>
        </div>

        <div className="flex justify-center">
          <Svg name="seshHero" decorative className="h-auto w-40 sm:w-50" />
        </div>

        <nav className="flex flex-col items-center gap-6 p-6 text-lg text-white">
          {' '}
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onNavClose}
              className={navItemClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MenuOverlay;
