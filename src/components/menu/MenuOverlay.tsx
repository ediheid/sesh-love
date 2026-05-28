import { NavLink } from "react-router-dom";
import Svg from "../../components/ui/svgs/Svgs";

type Props = {
  navOpen: boolean;
  onNavClose: () => void;
};

const MenuOverlay = ({ navOpen, onNavClose }: Props) => {
  return (
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-200
        ${navOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* Backdrop */}
      <div
        onClick={onNavClose}
        className={`
          absolute inset-0
          bg-black/40
          transition-opacity duration-200
          ${navOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Panel */}
      <aside
        className={`
          absolute top-0 right-0
          h-full w-full lg:w-1/2
          bg-(--color-primary)
          overflow-hidden
          will-change-transform
          transition-transform duration-200 ease-out
          ${navOpen ? "translate-x-0" : "translate-x-[101%]"}
        `}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={onNavClose}
            aria-label="Close menu"
            className="cursor-pointer"
          >
            <Svg
              name="closeSVG"
              className="text-[var(--color-text)] hover:text-[var(--color-icon-hover)] transition-colors duration-200"
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
