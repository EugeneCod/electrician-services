import { FC } from 'react';

import styles from './PopupWIthNotification.module.scss';
import imageApproval from '../../assets/images/popup__info-image_approval.svg';
import imageFailure from '../../assets/images/popup__info-image_failure.svg';
import { Popup } from '../';

type PopupWithNotificationProps = {
  isOpen: boolean;
  onClose: () => void;
  options: {
    IMAGE_NAME: 'approval' | 'failure';
    TEXT: string
  };
};

type Images = {
  approval: string;
  failure: string;
}

const PopupWithNotification: FC<PopupWithNotificationProps> = ({ isOpen, onClose, options }) => {
  const images: Images = { approval: imageApproval, failure: imageFailure };

  return (
    <Popup isOpen={isOpen} onClose={onClose} name="info">
      <div className={styles.root}>
        <img className={styles.image} src={images[options.IMAGE_NAME]} alt="Инфографика" />
        <p className={styles.text}>{options.TEXT}</p>
      </div>
    </Popup>
  );
};

export default PopupWithNotification;
