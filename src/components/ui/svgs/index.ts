import Logo from "../../../assets/svgs/logo.svg?react";
// The ?react suffix is what makes it a component (SVGR + Vite).

// * example
// import Home from "../../../assets/svg/ui/home.svg?react";

export const svgs = {
  logo: Logo,
  // * example
  //   home: Home,
} as const;

export type SvgName = keyof typeof svgs;
