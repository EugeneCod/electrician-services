import { Routes, Route } from 'react-router-dom'

import { Home, Services, AboutUs } from '../../pages'
import styles from './Main.module.scss';
import { ROUTES } from '../../utils/constants';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
      </Routes>
      
    </main>
  )
}

export default Main