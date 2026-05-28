import { NavLink } from 'react-router-dom';
import Svg from '../../components/ui/svgs/Svgs';

type Props = {
  navOpen: boolean;
  onNavClose: () => void;
};

const MenuOverlay = ({ navOpen, onNavClose }: Props) => {
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

        <nav className="flex flex-col gap-6 p-6 text-lg text-white">
          <NavLink to="/workshops" onClick={onNavClose}>
            workshops
          </NavLink>
          <NavLink to="/training" onClick={onNavClose}>
            training
          </NavLink>
          <NavLink to="/contact" onClick={onNavClose}>
            contact
          </NavLink>
          <NavLink to="/" onClick={onNavClose}>
            home
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default MenuOverlay;
