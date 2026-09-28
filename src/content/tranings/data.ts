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

    modal: {
      price: '€250',
      nextDates: ['12 October 2026', '9 November 2026'],
      structure:
        'A practical training session focused on developing stronger headline strategies and applying them to real-world briefs.',
      delivery: 'Online',
      capacity: 'Up to 12 participants',
      teamBuilding: 'Yes',
      contact: {
        email: 'carrie.dennes@gmail.com',
        formLabel: 'contact form',
      },
    },
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

    modal: {
      price: '€300',
      nextDates: ['20 October 2026', '17 November 2026'],
      structure:
        'An interactive training session exploring creative concept development, idea generation, and practical exercises.',
      delivery: 'Online',
      capacity: 'Up to 12 participants',
      teamBuilding: 'Yes',
      contact: {
        email: 'carrie.dennes@gmail.com',
        formLabel: 'contact form',
      },
    },
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

    modal: {
      price: '€350',
      nextDates: ['27 October 2026', '24 November 2026'],
      structure:
        'A mentoring-based training programme focused on developing copywriting skills through practical feedback and guided exercises.',
      delivery: 'In person',
      capacity: 'Up to 8 participants',
      teamBuilding: 'Yes',
      contact: {
        email: 'carrie.dennes@gmail.com',
        formLabel: 'contact form',
      },
    },
  },
];
