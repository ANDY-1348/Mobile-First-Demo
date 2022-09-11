import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import prod1 from '../assets/images/prod1.png';
import prod2 from '../assets/images/prod2.png';
import prod3 from '../assets/images/prod3.png';

const categoriesData = [
  {
    id: 1,
    name: 'Equipments',
    image: img1,
  },
  {
    id: 2,
    name: 'Consumbales',
    image: img2,
  },
  {
    id: 3,
    name: 'Supplies',
    image: img2,
  },
];

const productsData = [
  {
    id: 1,
    name: 'Ivoclar Vivadent',
    price: 599,
    image: prod1,
  },
  {
    id: 2,
    name: 'Wall mount X Ray',
    price: 999,
    image: prod2,
  },
  {
    id: 3,
    name: 'Wall mount X Ray',
    price: 999,
    image: prod2,
  },
  {
    id: 4,
    name: 'Being Foshan Contra',
    price: 999,
    image: prod3,
    discount: 699,
  },
];

const searchResult = ['Surgical Tapes', 'Dialyzer', 'Ryles Tube'];

export { categoriesData, productsData, searchResult };
