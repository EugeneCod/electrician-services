import { FC } from 'react';
import iconRocket from '../../assets/images/advantages_rocket-svgrepo-com.svg';
import iconCoin from '../../assets/images/advantages_ruble-svgrepo-com.svg';
import iconLightBulb from '../../assets/images/advantages_light-bulb-13-svgrepo-com.svg';
import iconMedal from '../../assets/images/advantages_medal-svgrepo-com.svg';
import iconCalendar from '../../assets/images/advantages_calendar-svgrepo-com.svg';

import styles from './AboutUs.module.scss';

const AboutUs: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h1 className={styles.title}>О нас</h1>
        </div>
        <div className={styles.focusContainer}>
          <h2 className={styles.focusTitle}>Наши главные цели</h2>
          <ul className={styles.focusList}>
            <li className={styles.focusListItem}>
              ...постоянное стремление к максимизации доверия клиентов.
            </li>
            <li className={styles.focusListItem}>
              ...приложение всех усилий, чтобы понять и оценить потребности клиента в любой
              ситуации.
            </li>
          </ul>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionTitle}>Электрика Сервис</h2>
          <p className={styles.descriptionText}>
            Мы являемся коллективом квалифицированных специалистов в области электрики. Выполняем
            заказы на территории Еланского района Волгоградской области. Каждый наш сотрудник имеет
            необходимую компетенцию, разряд и группу по электробезопасности, позволяющие выполнять
            различные задачи. Если Вам требуется монтаж системы электроснабжения с нуля либо
            устранение неисправностей в старой? Обращайтесь по телефону, указанному на сайте, или
            воспользуйтесь формой заказа звонка. Принимаем обращения ежедневно, можем
            проконсультировать по возникшим вопросам.
          </p>
        </div>
        <div className={styles.advantagesContainer}>
          <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
          <ul className={styles.advantagesList}>
            <li className={styles.advantagesListItem}>
              <img className={styles.advantagesIcon} src={iconRocket} alt="Изображение" />
              <p className={styles.advantagesText}>
                Возможность срочного аварийного вызова - мастер прибудет в кратчайшие сроки.
              </p>
            </li>
            <li className={styles.advantagesListItem}>
              <img className={styles.advantagesIcon} src={iconCoin} alt="Изображение" />
              <p className={styles.advantagesText}>
                Доступные цены и скидки. Оплата за работу принимается после ее завершения.
              </p>
            </li>
            <li className={styles.advantagesListItem}>
              <img className={styles.advantagesIcon} src={iconLightBulb} alt="Изображение" />
              <p className={styles.advantagesText}>
                Професиональный и индивидуальный подход к работе. Для каждой проблемы мы быстро
                найдём решение.
              </p>
            </li>
            <li className={styles.advantagesListItem}>
              <img className={styles.advantagesIcon} src={iconMedal} alt="Изображение" />
              <p className={styles.advantagesText}>
                Мы даём гарантию на все выполненные нами работы.
              </p>
            </li>
            <li className={styles.advantagesListItem}>
              <img className={styles.advantagesIcon} src={iconCalendar} alt="Изображение" />
              <p className={styles.advantagesText}>
                Будем рады ответить на Ваш звонок в любой день недели.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
