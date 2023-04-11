import { FC } from 'react';
import styles from './AboutServices.module.scss';
import imageWires from '../../assets/images/services-1.jpg';
import imagePrice from '../../assets/images/services-2.jpg';
import imageSale from '../../assets/images/services-3.jpg';

const AboutServices: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Услуги электрика</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img className={styles.image} src={imageWires} alt='Изображение' />
            <p className={styles.text}>Желаете обезопасить свой дом от нежелательных последствий износа электросистемы? Желаете провести модернизацию электропроводки для приведения ее в соответствии с действующей нагрузкой? С нашей помощью Вы сможете осуществить задуманное в разумные сроки.</p>
          </li>
          <li className={styles.listItem}>
            <img className={styles.image} src={imagePrice} alt='Изображение' />
            <p className={styles.text}>Мы не увеличиваем цены искусственно во время выполнения работ. Стоимость формируется согласно прайс-листу, размещенному на данной странице, с которым Вы можете ознакомиться.</p>
          </li>
          <li className={styles.listItem}>
            <img className={styles.image} src={imageSale} alt='Изображение' />
            <p className={styles.text}>При долгосрочном сотрудничестве предусмотрены скидки на услуги в зависимости от стоимости ранее выполненных работ, устанавливаемые в индивидуальном порядке.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutServices;
