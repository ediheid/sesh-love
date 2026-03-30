import Logo from "../../../assets/svgs/logo.svg?react";
import ComingSoon from "../../../assets/svgs/comingSoon.svg?react";
// The ?react suffix is what makes it a component (SVGR + Vite).

export const svgs = {
  logo: Logo,
  comingSoon: ComingSoon,
} as const;

export type SvgName = keyof typeof svgs;
