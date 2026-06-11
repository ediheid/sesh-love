import { useLocation } from 'react-router-dom';
import MenuNavLink from './MenuNavLink';
import { getNavItems } from './menuiNavItems';

type Props = {
  onNavClose: () => void;
};

const MenuNav = ({ onNavClose }: Props) => {
  const { pathname } = useLocation();
  const navItems = getNavItems(pathname);

  // todo: update alt texts
  // todo: debug scroll left and right on mobile
  // todo: debug scoll position not always being on top when navigating to a new page from the menu in the actyual menu

  return (
    <nav className="flex flex-col items-center gap-6 py-9 text-lg text-white">
      {navItems.map(({ to, label, imageSrc, altText, imageClassName }) => (
        <MenuNavLink
          key={to}
          to={to}
          imageSrc={imageSrc}
          imageClassName={imageClassName}
          altText={altText}
          onClick={onNavClose}
        >
          {label}
        </MenuNavLink>
      ))}
    </nav>
  );
};

export default MenuNav;
