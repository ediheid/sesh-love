import { useEscapeKey } from '../../hooks/useEscapeKey';

type Props = {
  navOpen: boolean;
  onNavClose: () => void;
  children: React.ReactNode;
};

const MenuOverlay = ({ navOpen, onNavClose, children }: Props) => {
  useEscapeKey(onNavClose, navOpen);

  return (
    // <div
    //   className={`duration-slow ease-standard fixed inset-0 z-50 transition-transform ${
    //     navOpen ? 'pointer-events-auto' : 'pointer-events-none'
    //   }`}
    // >
    <div
      className={`duration-slow ease-standard fixed inset-0 z-50 transition-transform ${
        navOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onNavClose}
        className={`duration-slow absolute inset-0 bg-black/40 transition-opacity ${
          navOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {children}
    </div>
  );
};

export default MenuOverlay;
