import { FC, useState } from 'react';

import AppContext from '../../context/AppContext';
import styles from './App.module.scss';
import { Header, Main, Footer, Cover } from '../';

const App: FC = () => {
  const [isCover, setIsCover] = useState(false);

  function toggleCover () {
    setIsCover(!isCover);
  }

  return (
    <AppContext.Provider value={{ isCover, toggleCover }}>
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
        <Cover />
      </div>
    </AppContext.Provider>
  );
};

export default App;
