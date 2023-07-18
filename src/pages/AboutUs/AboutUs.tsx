import { FC } from 'react';

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
            <li className={styles.focusListItem}>...постоянное стремление к максимизации доверия клиентов.</li>
            <li className={styles.focusListItem}>...приложение всех усилий, чтобы понять и оценить потребности клиента в любой ситуации.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
