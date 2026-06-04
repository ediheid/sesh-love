import MenuNavLink from './MenuNavLink';
import { useLocation } from 'react-router-dom';

type Props = {
  onNavClose: () => void;
};

const MenuNav = ({ onNavClose }: Props) => {
  const location = useLocation();

  const navItems = [
    { to: '/workshops', label: 'workshops' },
    { to: '/training', label: 'training' },
    { to: '/contact', label: 'contact' },
    ...(location.pathname !== '/' ? [{ to: '/', label: 'home' }] : []),
  ];

  return (
    <nav className="flex flex-col items-center gap-6 py-6 text-lg text-white">
      {navItems.map(({ to, label }) => (
        <MenuNavLink key={to} to={to} onClick={onNavClose}>
          {label}
        </MenuNavLink>
      ))}
    </nav>
  );
};

export default MenuNav;
