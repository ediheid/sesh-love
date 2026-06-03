import MenuNavLink from './MenuNavLink';
import Svg from '../../components/ui/svgs/Svgs';
import { useLocation } from 'react-router-dom';

type Props = {
  navOpen: boolean;
  onNavClose: () => void;
};

const MenuOverlay = ({ navOpen, onNavClose }: Props) => {
  const location = useLocation();

  const navItems = [
    { to: '/workshops', label: 'workshops' },
    { to: '/training', label: 'training' },
    { to: '/contact', label: 'contact' },
    ...(location.pathname !== '/' ? [{ to: '/', label: 'home' }] : []),
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
        className={`bg-primary duration-slow ease-standard absolute top-0 right-0 flex h-full w-full flex-col transition-transform will-change-transform lg:w-1/2 ${navOpen ? 'translate-x-0' : 'translate-x-[101%]'} `}
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

        <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6">
          <nav className="flex flex-col items-center gap-6 py-6 text-lg text-white">
            {navItems.map(({ to, label }) => (
              <MenuNavLink key={to} to={to} onClick={onNavClose}>
                {label}
              </MenuNavLink>
            ))}
          </nav>

          <footer className="text-md items-middle flex justify-between p-6 font-(--font-bold)">
            <span>
              Designed & Developed by{` `}
              <a
                href="https://edithsdev.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-link-hover text-link duration-fast ease-standard transition-colors"
              >
                edithsdev
              </a>{' '}
            </span>
            <span> © {new Date().getFullYear()} Sesh</span>
          </footer>
        </div>
      </aside>
    </div>
  );
};

export default MenuOverlay;
