import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';
import mainLogo from '../../assets/images/logo_color.svg';
import iconFhone from '../../assets/images/icon_phone.svg';
import iconMapLocation from '../../assets/images/icon_map-location.svg';
import iconMail from '../../assets/images/icon_mail.svg';
import { ROUTES } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <NavLink to={ROUTES.HOME} className={styles.linkLogo} >
            <img className={styles.logo} src={mainLogo} alt="Логотип" />
            <p className={styles.logoText}>Электрика сервис</p>
          </NavLink>
          <div className={styles.contactsBlock}>
            <h2 className={styles.contactsTitle}>Контакты</h2>
            <ul className={styles.contactsList}>
              <li className={styles.contactsListItem}>
                <img className={styles.contactsIcon} src={iconFhone} alt="Телефон" />
                <p className={styles.contactsText}>+7(888)888-88-88</p>
                <p className={styles.contactsText}>+7(888)888-88-88</p>
              </li>
              <li className={styles.contactsListItem}>
                <img className={styles.contactsIcon} src={iconMapLocation} alt="Адрес" />
                <p className={styles.contactsText}>
                  403732, Россия, Волгоградская область, р.п. Елань, ул. Ленина, д. 121
                </p>
              </li>
              <li className={styles.contactsListItem}>
                <a href="mailto:electrician_service@yandex.ru">
                  <img className={styles.contactsIcon} src={iconMail} alt="Электронная почта" />
                  <p className={styles.contactsText}>electrician_service@yandex.ru</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyRight}>© 2023 · EugeneCod</p>
        </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
