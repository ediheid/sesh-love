import Logo from "../../../assets/svgs/logo.svg?react";
import ComingSoon from "../../../assets/svgs/comingSoon.svg?react";
import SeshHero from "../../../assets/svgs/seshHero.svg?react";
// The ?react suffix is what makes it a component (SVGR + Vite).

export const svgs = {
  logo: Logo,
  comingSoon: ComingSoon,
  seshHero: SeshHero,
} as const;

export type SvgName = keyof typeof svgs;
