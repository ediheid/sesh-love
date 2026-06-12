import type { Workshop } from './types';
import haiku from '../workshops/images/haiku.webp';
import naming from '../workshops/images/naming.webp';
import writing from '../workshops/images/writing.webp';

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
  },
];
