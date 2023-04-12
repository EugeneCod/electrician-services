import { FC, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Cover.module.scss';
import AppContext from '../../context/AppContext';

const cx = classNames.bind(styles);

type CoverProps = {
  children?: JSX.Element;
}

const Cover: FC<CoverProps> = (props) => {
  const {children} = props;

  const { isCover } = useContext(AppContext);

  const rootClassName = cx({
    root: true,
    opened: isCover,
  });

  // useEffect(() => {
  //   function handleEscClose(evt: any) {
  //     if (evt.key === 'Escape') {
  //       toggleCover && toggleCover();
  //     }
  //   }

  //   isCover && document.addEventListener('keyup', handleEscClose);
  //   return () => document.removeEventListener('keyup', handleEscClose);
  // }, [isCover, toggleCover])

  return <div className={rootClassName}>{children}</div>;
};

export default Cover;
