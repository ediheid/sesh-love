import { useLocation } from 'react-router-dom';
import MenuNavLink from './MenuNavLink';
import { getNavItems, type NavItem } from './menuNavItems';

type Props = {
  onNavClose: () => void;
};

const MenuNav = ({ onNavClose }: Props) => {
  const { pathname } = useLocation();
  const navItems: NavItem[] = getNavItems(pathname);

  // todo: update alt texts
  return (
    <nav className="flex flex-col items-center gap-6 py-9 text-lg text-white">
      {navItems.map(({ to, label, imageSrc, altText, imageClassName }, i) => (
        <MenuNavLink
          key={to}
          to={to}
          imageSrc={imageSrc}
          imageClassName={imageClassName}
          altText={altText}
          onClick={onNavClose}
          index={i}
        >
          {label}
        </MenuNavLink>
      ))}
    </nav>
  );
};

export default MenuNav;
