import { FC, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Popup.module.scss';
import AppContext from '../../context/AppContext';

const cx = classNames.bind(styles);

type PopupProps = {
  children?: JSX.Element;
}

const Popup: FC<PopupProps> = (props) => {
  const {children} = props;

  const { popupIsOpen, setPopupIsOpen } = useContext(AppContext);

  const rootClassName = cx({
    root: true,
    opened: popupIsOpen,
  });

  useEffect(() => {
    function handleEscClose(evt: any) {
      if (evt.key === 'Escape') {
        setPopupIsOpen && setPopupIsOpen(false);
      }
    }

    popupIsOpen && document.addEventListener('keyup', handleEscClose);
    return () => document.removeEventListener('keyup', handleEscClose);
  }, [popupIsOpen, setPopupIsOpen])

  return <div className={rootClassName}>{children}</div>;
};

export default Popup;
