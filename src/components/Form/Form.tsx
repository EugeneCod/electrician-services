import { useContext, FC, FormEvent } from 'react';
import classNames from 'classnames/bind';

import AppContext from '../../context/AppContext';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

type FormProps = {
  children?: JSX.Element|JSX.Element[];
  name: string;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  title: string;
  buttonText: string;
  isValid: boolean;
  notification: string;
}

const Form: FC<FormProps> = ({ children, name, onSubmit, title, buttonText, isValid, notification }) => {
  const { isLoading } = useContext(AppContext);

  const buttonClassName = cx({
    button: true,
    inactive: !isValid || isLoading,
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      name={name}
      className={styles.form}
      id={name} >
      <fieldset className={styles.fieldset} form={name}>
        <legend className={styles.legend}>{title}</legend>
        <div className={styles.inputsStack}>{children}</div>
        <p className={styles.notificationBlock}>{notification}</p>
        <button
          type="submit"
          className={buttonClassName}
          disabled={!isValid || isLoading}>
          {buttonText}
        </button>
      </fieldset>
    </form>
  );
}

export default Form;