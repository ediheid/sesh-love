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

  // todo: update alt texts and bring in 'upcoming'
  // todo: Cleaneup file - exctract the nav items to a separate file

  const navItems = [
    {
      to: '/workshops',
      label: 'workshops',
      imageSrc: workshops,
      imageClassName:
        '-left-10 md:-left-8 lg:-left-6 2xl:-left-2 -top-27 2xl:-top-25 md:scale-120 lg:scale-125 rotate-[-2deg] xl:scale-130 2xl:scale-150',
      altText:
        '4 brown, white and grey, fluffy ferrets sitting, huddled together, looking at the camera.',
    },
    {
      to: '/training',
      label: 'training',
      imageSrc: trainings,
      imageClassName:
        '-right-22 scale-80 md:-right-8 lg:-right-24 xl:-right-16 2xl:-right-15 -top-7 lg:-top-0 2xl:-top-4 md:scale-100 lg:scale-110  xl:scale-110 xl:-top-1 2xl:scale-130',
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
        '-left-22 md:left-3 lg:-left-24 xl:-left-10 -top-11 md:-top-8 lg:-top-4 xl:top-2 2xl:top-3 rotate-[-4deg] md:rotate-[-2deg] md:rotate-[-2deg] scale-60 md:scale-75 lg:scale-85 xl:scale-87 2xl:scale-90',
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
              '-right-15 md:-right-0 lg:-right-16 xl:-right-7 2xl:-right-0 -top-8 lg:-top-2 scale-42 md:scale-60 lg:scale-50 xl:scale-60 2xl:scale-70',
            altText:
              'Pale pink Lego style cottage two story cotrtage house with white picket like railaings.',
          },
        ]
      : []),
  ];

  return (
    <nav className="flex flex-col items-center gap-6 py-9 text-lg text-white">
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
