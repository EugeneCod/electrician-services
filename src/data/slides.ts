import imageOne from '../assets/images/promo__light.jpg';
import imageTwo from '../assets/images/promo__panel.jpg';
import imageThree from '../assets/images/promo__tools.jpg';

interface slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const data: slide[] = [
  {
    id: 1,
    image: imageOne,
    title: 'Текст заголовка 1',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium?',
  },
  {
    id: 2,
    image: imageTwo,
    title: 'Текст заголовка 2',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium?',
  },
  {
    id: 3,
    image: imageThree,
    title: 'Текст заголовка 3',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium?',
  }
]

export default data;
