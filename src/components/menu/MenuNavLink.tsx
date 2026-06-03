import { NavLink } from 'react-router-dom';

type MenuNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
};

const MenuNavLink = ({ to, children, onClick }: MenuNavLinkProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="bg-nav-link hover:bg-nav-link-hover text-nav-link-text hover:text-interactive-hover text-menu-nav-sm md:text-menu-nav-md lg:text-menu-nav-lg duration-fast ease-standard flex w-[80%] max-w-sm items-center justify-center py-2 font-(--font-semibold) transition-colors sm:py-1 lg:py-1"
  >
    {children}
  </NavLink>
);

export default MenuNavLink;
