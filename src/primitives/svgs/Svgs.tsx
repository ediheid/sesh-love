import { svgs, type SvgName } from ".";
import type { SVGProps } from "react";

type BaseProps = {
  name: SvgName;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "aria-hidden" | "role">;

// accessibility best practice, no need to specify if decortive
// can't be both decorative and informative
type DecorativeProps = {
  decorative?: true;
  title?: never;
};

type InformativeProps = {
  decorative?: false;
  title: string;
};

type Props = BaseProps & (DecorativeProps | InformativeProps);

const Svg = ({ name, title, decorative, className = "", ...props }: Props) => {
  const Component = svgs[name];

  if (!Component) {
    console.warn(`SVG not found: ${name}`);
    return null;
  }

  const isDecorative = decorative === true;

  return (
    <Component
      className={className}
      role={isDecorative ? undefined : "img"}
      aria-hidden={isDecorative || undefined}
      {...props}
    >
      {!isDecorative && <title>{title}</title>}
    </Component>
  );
};

export default Svg;
