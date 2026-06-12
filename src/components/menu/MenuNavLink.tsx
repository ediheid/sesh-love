import { NavLink } from 'react-router-dom';
import Image from '../../primitives/image/Image';

interface MenuNavLinkProps {
  to: string;
  children: React.ReactNode;
  imageSrc: string;
  imageClassName: string;
  altText: string;
  onClick: () => void;
  index: number;
}

const MenuNavLink = ({
  to,
  children,
  imageSrc,
  altText,
  onClick,
  imageClassName,
  index,
}: MenuNavLinkProps) => (
  <div
    className="relative flex w-[80%] max-w-sm items-center"
    style={{ '--i': index } as React.CSSProperties}
  >
    <NavLink
      to={to}
      onClick={onClick}
      className="bg-nav-link hover:bg-nav-link-hover text-nav-link-text hover:text-interactive-hover text-menu-nav-sm md:text-menu-nav-md lg:text-menu-nav-lg duration-fast ease-standard flex w-full items-center justify-center py-2 font-(--font-semibold) transition-colors sm:py-1 lg:py-1"
    >
      {children}
    </NavLink>

    <Image
      src={imageSrc}
      width={200}
      height={200}
      alt={altText}
      variant="default"
      className={`load-in duration-fast ease-standard pointer-events-none absolute z-20 object-contain transition-transform ${imageClassName ?? ''}`}
    />
  </div>
);

export default MenuNavLink;
