import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import { ROUTES } from '../../utils/constants';
import mainPageLogo from '../../assets/images/logo_main-page.svg';
import servicesLogo from '../../assets/images/logo_services.svg';
import calcLogo from '../../assets/images/logo_calculator.svg';
import aboutUsLogo from '../../assets/images/logo_about-us.svg';


const cx = classNames.bind(styles);

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
          <NavLink to={ROUTES.HOME} className={styles.link} >
            <img className={styles.linkIcon} src={mainPageLogo} alt="Главная" />
            <p className={styles.linkText}>Главная</p>
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={ROUTES.SERVICES} className={styles.link}>
            <img className={styles.linkIcon} src={servicesLogo} alt="Все услуги" />
            <p className={styles.linkText}>Все услуги</p>
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={ROUTES.CALCULATOR} className={styles.link} >
            <img className={styles.linkIcon} src={calcLogo} alt="Калькулятор" />
            <p className={styles.linkText}>Калькулятор</p>
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={ROUTES.ABOUTUS} className={styles.link}>
            <img className={styles.linkIcon} src={aboutUsLogo} alt="О нас" />
            <p className={styles.linkText}>О нас</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation