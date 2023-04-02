import { FC } from "react";

import styles from "./App.module.scss";
import { Header, Main, Footer } from "../";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
