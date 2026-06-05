import Svg from '../../primitives/svgs/Svgs';

type Props = {
  onNavClose: () => void;
};

const MenuHeader = ({ onNavClose }: Props) => {
  return (
    <div className="shrink-0">
      <div className="flex justify-end p-6">
        <button
          onClick={onNavClose}
          aria-label="Close menu"
          className="cursor-pointer"
        >
          <Svg
            name="closeSVG"
            className="text-icon hover:text-icon-hover transition-colors"
          />
        </button>
      </div>

      <div className="flex justify-center">
        <Svg name="seshHero" decorative className="h-auto w-40 sm:w-50" />
      </div>
    </div>
  );
};

export default MenuHeader;
