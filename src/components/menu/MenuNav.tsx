import { useLocation } from 'react-router-dom';
import MenuNavLink from './MenuNavLink';
import workshops from '../../assets/images/workshops.webp';
import trainings from '../../assets/images/training.webp';
import contact from '../../assets/images/contact.webp';
// import upcoming from '../../assets/images/upcoming.webp';
import home from '../../assets/images/home.webp';

type Props = {
  onNavClose: () => void;
};

const MenuNav = ({ onNavClose }: Props) => {
  const location = useLocation();

  // todo: fix z-indexes or placement as they hide behind the other links when they should be on top
  // todo: update sizes responsively, too small on large screens
  // todo: update placement responsively, too close to the link on small screens, and too far on large screens
  const navItems = [
    {
      to: '/workshops',
      label: 'workshops',
      imageSrc: workshops,
      imageClassName:
        'left-[-40px] -top-28 rotate-[-2deg] pointer-events-none transition-transform duration-fast ease-standard',
      altText:
        '4 brown, white and grey, fluffy ferrets sitting, huddled together, looking at the camera.',
    },
    {
      to: '/training',
      label: 'training',
      imageSrc: trainings,
      imageClassName:
        'right-[-90px] top-1 pointer-events-none transition-transform duration-fast ease-standard',
      altText:
        'Jane Fonda wearing a canary yellow swimsuit cut leotard with capped sleeves and frills, yellow legwarmers with purple cuffs, sitting with one leg up in an aerobics pose.',
    },
    // upcoming, // TODO: add upcoming image
    // {
    //   to: '/upcoming',
    //   label: 'next dates',
    //   imageSrc: '',
    //   altText: '',
    // },
    {
      to: '/contact',
      label: 'contact',
      imageSrc: contact,
      imageClassName:
        'left-[-40px] top-9 pointer-events-none transition-transform duration-fast ease-standard',
      altText:
        'A multi coloured, marbled crystal ball in pastel shades on a gold star shaped base.',
    },
    ...(location.pathname !== '/'
      ? [
          {
            to: '/',
            label: 'home',
            imageSrc: home,
            imageClassName:
              'right-[-10px] top-1 pointer-events-none transition-transform duration-fast ease-standard rotate-[2deg]',
            altText:
              'Pale pink Lego style cottage two story cotrtage house with white picket like railaings.',
          },
        ]
      : []),
  ];

  return (
    <nav className="flex flex-col items-center gap-6 py-6 text-lg text-white">
      {navItems.map(({ to, label, imageSrc, altText, imageClassName }) => (
        <MenuNavLink
          key={to}
          to={to}
          imageSrc={imageSrc}
          imageClassName={imageClassName}
          altText={altText}
          onClick={onNavClose}
        >
          {label}
        </MenuNavLink>
      ))}
    </nav>
  );
};

export default MenuNav;
