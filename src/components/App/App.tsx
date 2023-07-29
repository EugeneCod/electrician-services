import { FC, useState } from 'react';

import AppContext from '../../context/AppContext';
import styles from './App.module.scss';
import { Header, Main, Footer, Cover, PopupWithClientForm, PopupWithNotification, Preloader } from '../';
import { sendCall } from '../../utils/api';
import { MESSAGES, NOTIFICATION_OPTIONS } from '../../utils/constants';


const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCover, setIsCover] = useState(false);
  const [popupWithClientFormIsOpen, setPopupWithClientFormIsOpen] = useState(false);
  const [popupWithNotificationIsOpen, setPopupWithNotificationIsOpen] = useState(false);
  const [preloaderIsActive, setPreloaderIsActive] = useState(false)
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [notificationOptions, setNotificationOptions] = useState(NOTIFICATION_OPTIONS.FAILURE);

  function handleSendCall(name: string, phone: string, message: string) {
    setIsLoading(true);
    setPreloaderIsActive(true);
    setFormErrorMessage('');

    sendCall(name, phone, message)
      .then(() => {
        closePopups()
        setNotificationOptions(NOTIFICATION_OPTIONS.CALL_REQUEST_SENT);
        setPopupWithNotificationIsOpen(true);
      })
      .catch(() => {
        setFormErrorMessage(MESSAGES.UNDEFINED);
      })
      .finally(() => {
        setIsLoading(false);
        setPreloaderIsActive(false)
      });
  }

  function toggleCover() {
    setIsCover(!isCover);
  }

  function openClientForm() {
    setPopupWithClientFormIsOpen(true);
  }

  function closePopups() {
    setPopupWithClientFormIsOpen(false);
    setPopupWithNotificationIsOpen(false);
  }

  return (
    <AppContext.Provider value={{ isCover, toggleCover, openClientForm, isLoading }}>
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
        <Cover />
        <PopupWithClientForm
          isOpen={popupWithClientFormIsOpen}
          onClose={closePopups}
          onSendCall={handleSendCall}
          notification={formErrorMessage}
        />
        <PopupWithNotification
          isOpen={popupWithNotificationIsOpen}
          onClose={closePopups}
          options={notificationOptions}
        />
        <Preloader 
          isActive={preloaderIsActive}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
