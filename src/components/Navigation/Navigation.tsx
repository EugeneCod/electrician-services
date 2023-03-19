import {FC} from 'react';
import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import mainPageLogo from '../../assets/images/logo_main-page.svg';
import servicesLogo from '../../assets/images/logo_services.svg';
import calcLogo from '../../assets/images/logo_calculator.svg';
import aboutUsLogo from '../../assets/images/logo_about-us.svg';

let cx = classNames.bind(styles);

type NavigationProps = {
  isMenuOpen: boolean;
};

const Navigation:FC<NavigationProps> = (props) => {
  const {isMenuOpen} = props;

  const navClassName = cx({
    navigation: true,
    isMenuOpen,
  });

  return (
    <nav className={navClassName}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a className={styles.link} href="#main-page">
            <img className={styles.linkIcon} src={mainPageLogo} alt="Главная" />
            <p className={styles.linkText}>Главная</p>
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="#services">
            <img className={styles.linkIcon} src={servicesLogo} alt="Все услуги" />
            <p className={styles.linkText}>Все услуги</p>
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="#calc">
            <img className={styles.linkIcon} src={calcLogo} alt="Калькулятор" />
            <p className={styles.linkText}>Калькулятор</p>
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="#about-us">
            <img className={styles.linkIcon} src={aboutUsLogo} alt="О нас" />
            <p className={styles.linkText}>О нас</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation