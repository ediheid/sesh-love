import Logo from '../../assets/svgs/logo.svg?react';
import ComingSoon from '../../assets/svgs/coming-soon.svg?react';
import SeshHero from '../../assets/svgs/sesh-hero.svg?react';
import CloseSVG from '../../assets/svgs/close.svg?react';
import EventbriteText from '../../assets/svgs/eventbrite-text.svg?react';
// The ?react suffix is what makes it a component (SVGR + Vite).

export const svgs = {
  logo: Logo,
  comingSoon: ComingSoon,
  seshHero: SeshHero,
  closeSVG: CloseSVG,
  eventbriteText: EventbriteText,
} as const;

export type SvgName = keyof typeof svgs;
