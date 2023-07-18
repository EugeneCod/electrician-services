import { FC, useState } from 'react';

import AppContext from '../../context/AppContext';
import styles from './App.module.scss';
import { Header, Main, Footer, Cover, PopupWithClientForm } from '../';
import { sendCall } from '../../utils/api';
import { MESSAGES } from '../../utils/constants';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCover, setIsCover] = useState(false);
  const [popupWithClientFormIsOpen, setPopupWithClientFormIsOpen] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');

  function handleSendCall(name: string, phone: string, message: string) {
    setIsLoading(true);
    sendCall(name, phone, message)
      .then(() => {
        setFormErrorMessage('');
      })
      .catch(() => {
        setFormErrorMessage(MESSAGES.UNDEFINED);
      })
      .finally(() => {
        setIsLoading(false);
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
      </div>
    </AppContext.Provider>
  );
};

export default App;
