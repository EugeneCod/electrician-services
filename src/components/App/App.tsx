import { FC } from "react";

import styles from "./App.module.scss";
import { Header, Main } from "../";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
