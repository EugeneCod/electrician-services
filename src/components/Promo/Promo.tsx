import styles from './Promo.module.scss';
import photoOne from '../../assets/images/promo-1.jpg';
import photoTwo from '../../assets/images/promo-2.jpg';
import iconOne from '../../assets/images/promo_icon-1.svg';
import iconTwo from '../../assets/images/promo_icon-2.svg';
import iconThree from '../../assets/images/promo_icon-3.svg';

const Promo = () => {
  return (
    <section className={styles.promo}>
      <p className={styles.promoLine}>Качество - наша гарантия!</p>
      <div className={styles.container}>
        <div className={styles.photoSection}>
          <img className={styles.photoBasic} src={photoOne} alt="Изображение" />
          <img className={styles.photoAdditional} src={photoTwo} alt="Изображение" />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Добро пожаловать в "Электрика сервис"!</h1>
          <p className={styles.subTitle}>Мы предлагаем только лучшие решения. </p>
          <p className={styles.text}>
            Оптимальное расположение розеток, выключателей и осветительных приборов имеют важнейшую
            роль для обеспечения нормальной эксплуатации помещений. Модернизация электрической
            системы принесет комфорт и безопасность в каждый уголок Вашего дома. И в этом мы готовы
            прийти на помощь!
          </p>
        </div>
        <ul className={styles.advantagesList}>
          <li className={styles.advantage}>
            <div className={styles.advantageIconContainer}>
              <img className={styles.advantageIcon} src={iconOne} alt="Иконка" />
            </div>
            <p className={styles.advantageText}>Профессионализм</p>
          </li>
          <li className={styles.advantage}>
            <div className={styles.advantageIconContainer}>
              <img className={styles.advantageIcon} src={iconTwo} alt="Иконка" />
            </div>
            <p className={styles.advantageText}>24/7 Доступность</p>
          </li>
          <li className={styles.advantage}>
            <div className={styles.advantageIconContainer}>
              <img className={styles.advantageIcon} src={iconThree} alt="Иконка" />
            </div>
            <p className={styles.advantageText}>Разумная цена</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;
