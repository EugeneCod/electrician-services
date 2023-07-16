import { FC, useContext } from 'react';

import AppContext from '../../context/AppContext';
import styles from './SendCallButton.module.scss';

const SendCallButton: FC = () => {
  const { openClientForm } = useContext(AppContext);

  return (
    <button onClick={openClientForm} className={styles.buttonCall}>Заказать звонок</button>
  )
}

export default SendCallButton