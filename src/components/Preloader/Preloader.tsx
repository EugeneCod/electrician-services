import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './Preloader.module.scss'
import logo from '../../assets/images/logo_color.svg'

const cx = classNames.bind(styles);

type PreloaderProps = {
  isActive: boolean;
}

const Preloader: FC<PreloaderProps> = ({isActive}) => {

  const rootClassName = cx({
    root: true,
    active: isActive,
  });

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.round} />
      </div>
    </div>
  );
};

export default Preloader;
