import { FC, useState } from 'react';

import AppContext from '../../context/AppContext';
import styles from './App.module.scss';
import { Header, Main, Footer, Cover, Popup } from '../';

const App: FC = () => {
  const [isCover, setIsCover] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  function toggleCover () {
    setIsCover(!isCover);
  }

  return (
    <AppContext.Provider value={{ isCover, toggleCover, popupIsOpen, setPopupIsOpen }}>
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
        <Cover />
        <Popup />
      </div>
    </AppContext.Provider>
  );
};

export default App;
