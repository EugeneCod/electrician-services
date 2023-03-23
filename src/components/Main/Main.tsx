import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages'
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </main>
  )
}

export default Main