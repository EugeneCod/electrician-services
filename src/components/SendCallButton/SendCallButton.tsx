import { FC } from 'react';
import styles from './SendCallButton.module.scss';

const SendCallButton: FC = () => {

  function handleCLick() {
    
  }

  return (
    <button onClick={handleCLick} className={styles.buttonCall}>Заказать звонок</button>
  )
}

export default SendCallButton