import {useState} from 'react';

import styles from './Header.module.scss';
import mainLogo from '../../assets/images/logo_color.svg';
import phoneLogo from '../../assets/images/phone_icon.svg';
import { Navigation } from '../';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleBurgerClick() {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.linkLogo} href="#home">
          <img className={styles.logo} src={mainLogo} alt="Логотип" />
          <p className={styles.logoText}>Электрика сервис</p>
        </a>
        <div className={styles.phonesContainer}>
          <div className={styles.phoneBlock}>
            <img className={styles.phoneLogo} src={phoneLogo} alt={'Телефон'} />
            <p className={styles.phoneNumber}>+7(888)888-88-88</p>
          </div>
          <div className={styles.phoneBlock}>
            <img className={styles.phoneLogo} src={phoneLogo} alt={'Телефон'} />
            <p className={styles.phoneNumber}>+7(888)888-88-88</p>
          </div>
          <p className={styles.phoneInfo}>Ответим на звонок с 8:00 до 17:00</p>
        </div>
        <button className={styles.buttonCall}>Заказать звонок</button>
        <div onClick={() => handleBurgerClick} className={styles.burgerContainer}>
          <span className={styles.burger} />
        </div>
      </div>
      <Navigation isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
