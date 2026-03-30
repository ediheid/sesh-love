import { svgs, type SvgName } from ".";
import type { SVGProps } from "react";

type Props = {
  name: SvgName;
  className?: string;
} & SVGProps<SVGSVGElement>;

const Svg = ({ name, className = "", ...props }: Props) => {
  const Component = svgs[name];

  if (!Component) {
    console.warn(`SVG not found: ${name}`);
    return null;
  }

  return <Component className={className} {...props} />;
};

export default Svg;
