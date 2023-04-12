import {useState, useEffect, useContext} from 'react';
import { NavLink } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import styles from './Header.module.scss';
import mainLogo from '../../assets/images/logo_color.svg';
import phoneLogo from '../../assets/images/icon_phone.svg';
import { Navigation } from '../';
import { ROUTES } from '../../utils/constants';


const Header = () => {

  const { isCover, toggleCover } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let bodyStyle = document.body.style;
    isMenuOpen ? (bodyStyle.overflow = 'hidden') : (bodyStyle.overflow = 'initial');
  }, [isMenuOpen]);

  useEffect(() => {
    function handleEscClose(evt: any) {
      if (evt.key === 'Escape') {
        toggleCover && toggleCover();
        setIsMenuOpen(!isMenuOpen);
      }
    }

    isCover && document.addEventListener('keyup', handleEscClose);
    return () => document.removeEventListener('keyup', handleEscClose);
  }, [isCover, toggleCover])

  function handleToggleMenu():void {
    setIsMenuOpen((prev) => !prev);
    toggleCover && toggleCover();
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={ROUTES.HOME} className={styles.linkLogo}>
          <img className={styles.logo} src={mainLogo} alt="Логотип" />
          <p className={styles.logoText}>Электрика сервис</p>
        </NavLink>
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
        <div onClick={handleToggleMenu} className={styles.burgerContainer}>
          <span className={styles.burger} />
        </div>
      </div>
      <Navigation isMenuOpen={isMenuOpen} onToggleMenu={handleToggleMenu} />
    </header>
  );
};

export default Header;
