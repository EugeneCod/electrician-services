import { useEffect, FC } from 'react'
import classNames from 'classnames/bind';

import closeIcon from '../../assets/images/popup__close-icon.svg';
import styles from './Popup.module.scss';
const cx = classNames.bind(styles);

type PopupProps = {
  children?: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

const Popup: FC<PopupProps> = ({ children, isOpen, onClose, name }) => {
  useEffect(() => {
    function handleEscClose(evt: any) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    isOpen && document.addEventListener('keyup', handleEscClose);
    return () => document.removeEventListener('keyup', handleEscClose);
  }, [isOpen, onClose])

  const rootClassName = cx({
    root: true,
    opened: isOpen,
  });

  const containerClassName = cx({
    container: true,
    clientForm: name === "clientForm",
  });

  return (
    <div onMouseDown={onClose} className={rootClassName}>
      <div onMouseDown={(e) => e.stopPropagation()} className={containerClassName}>
        <button onClick={onClose} type="button" className={styles.closeButton}>
          <img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup