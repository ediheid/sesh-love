import type { Training } from './types';
import headline from '../tranings/images/headline.webp';
import creative from '../tranings/images/creative.webp';
import copy from '../tranings/images/copy.webp';

export const trainings: Training[] = [
  {
    title: 'headline strategies',
    imageSrc: headline,
    altText: '',
    description:
      'Cupcake ipsum dolor sit amet. Cookie jelly powder cake cotton candy dessert liquorice fruitcake. Sesame snaps cookie sweet pie muffin dragée jelly. Apple pie jelly beans brownie pudding tootsie roll topping lemon drops.',
    whoFor: 'Beginners',
    skillLevel: 'All levels',
    imageClassName: 'scale-85',
  },
  {
    title: 'creative concepts',
    imageSrc: creative,
    altText: '',
    description:
      'Cupcake ipsum dolor sit amet. Cookie jelly powder cake cotton candy dessert liquorice fruitcake. Sesame snaps cookie sweet pie muffin dragée jelly. Apple pie jelly beans brownie pudding tootsie roll topping lemon drops.',
    whoFor: 'Beginners',
    skillLevel: 'All levels',
    imageClassName: 'scale-85',
  },
  {
    title: 'copy mentoring',
    imageSrc: copy,
    altText: '',
    description:
      'Cupcake ipsum dolor sit amet. Cookie jelly powder cake cotton candy dessert liquorice fruitcake. Sesame snaps cookie sweet pie muffin dragée jelly. Apple pie jelly beans brownie pudding tootsie roll topping lemon drops. ssert liquorice fruitcake. Sesame snaps cookie sweet pie muffin dragée jelly. Apple pie jelly beans brownie pudding tootsie roll topping lemon drops',
    whoFor: 'Beginners',
    skillLevel: 'All levels',
    imageClassName: 'scale-90 pt-6',
  },
];
