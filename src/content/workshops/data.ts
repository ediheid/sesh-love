import type { Workshop } from './types';
import haiku from '../workshops/images/haiku.webp';
import naming from '../workshops/images/naming.webp';
import writing from '../workshops/images/writing.webp';
import astro from '../workshops/images/astro2.webp';

export const workshops: Workshop[] = [
  {
    title: 'hello, haiku',
    imageSrc: haiku,
    altText: '',
    description:
      'Cupcake ipsum dolor sit amet. Cookie jelly powder cake cotton candy dessert liquorice fruitcake. Sesame snaps cookie sweet pie muffin dragée jelly. Apple pie jelly beans brownie pudding tootsie roll topping lemon drops.',
    whoFor: 'Beginners',
    skillLevel: 'All levels',
    imageClassName: 'scale-130',

    modal: {
      price: '€250',
      nextDates: ['12 October 2026', '9 November 2026'],
      structure:
        'A two-hour practical workshop exploring the fundamentals of haiku...',
      delivery: 'Online',
      capacity: 'Up to 12 participants',
      teamBuilding: 'Yes',
      contact: 'hello@example.com',
      pdfUrl: '/pdfs/hello-haiku.pdf',
    },
  },
  {
    title: 'naming simulator',
    imageSrc: naming,
    altText: '',
    description:
      'Jelly-o chocolate bar jujubes ice cream sugar plum danish powder. Gummi bears cotton candy chocolate cake fruitcake biscuit I love. I love macaroon wafer I love marzipan carrot cake I love. Toffee ice cream I love ice cream cake. Candy tart ice cream I love icing brownie soufflé.   ',
    whoFor: 'Experienced practitioners',
    skillLevel: 'Advanced',
    imageClassName: 'scale-135 translate-y-[15px]',

    modal: {
      price: '€350',
      nextDates: ['20 October 2026'],
      structure:
        'A full-day workshop focused on naming processes and practical exercises...',
      delivery: 'Online',
      capacity: 'Up to 10 participants',
      teamBuilding: 'Yes',
      contact: 'hello@example.com',
      pdfUrl: '/pdfs/naming-simulator.pdf',
    },
  },
  {
    title: 'writing challenge',
    imageSrc: writing,
    altText: '',
    description:
      'Lollipop chocolate cake I love. I love cookie liquorice cake. I love macaroon wafer I love marzipan carrot cake I love. Toffee ice cream I love ice cream cake. Candy tart ice cream I love icing brownie soufflé. ',
    whoFor: 'Everyone',
    skillLevel: 'All levels',
    imageClassName: 'scale-80',

    modal: {
      price: '€350',
      nextDates: ['20 October 2026'],
      structure:
        'A full-day workshop focused on naming processes and practical exercises...',
      delivery: 'In person',
      capacity: 'Up to 10 participants',
      teamBuilding: 'Yes',
      contact: 'hello@example.com',
      pdfUrl: '/pdfs/writing-challenge.pdf',
    },
  },
  {
    title: 'astro witch',
    imageSrc: astro,
    altText: '',
    description:
      'Lollipop chocolate cake I love. I love cookie liquorice cake. I love macaroon wafer I love marzipan carrot cake I love. Toffee ice cream I love ice cream cake. Candy tart ice cream I love icing brownie soufflé. ',
    whoFor: 'Everyone',
    skillLevel: 'All levels',
    imageClassName: 'scale-80',

    modal: {
      price: '€350',
      nextDates: ['20 October 2026'],
      structure:
        'A full-day workshop focused on naming processes and practical exercises...',
      delivery: 'In person',
      capacity: 'Up to 10 participants',
      teamBuilding: 'Yes',
      contact: 'hello@example.com',
      pdfUrl: '/pdfs/astro-witch.pdf',
    },
  },
];
