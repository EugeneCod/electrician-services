import imageOne from '../assets/images/promo__panel.jpg';
import imageTwo from '../assets/images/promo__tools.jpg';
import imageThree from '../assets/images/promo__light.jpg';

interface slide {
  id: number;
  image: string;
  text: string;
}

const data: slide[] = [
  {
    id: 1,
    image: imageOne,
    text: 'Мы - профессиональная команда специалистов в сфере электрики, готовые оказать качественные услуги по установке, ремонту и обслуживанию электрических систем и оборудования.',
  },
  {
    id: 2,
    image: imageTwo,
    text: 'Наша команда имеет большой опыт работы в данной сфере и использует только качественное оборудование, чтобы гарантировать безопасность и надежность наших услуг.',
  },
  {
    id: 3,
    image: imageThree,
    text: 'Мы предлагаем широкий спектр услуг, включая монтаж и диагностику электропроводки, замену электрооборудования, установку и настройку систем освещения.',
  }
]

export default data;
