import { FC } from "react";

import styles from "./App.module.scss";
import { Header } from "../";
import { Home } from "../../pages/";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
