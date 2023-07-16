import { useContext, FC } from 'react';
import classNames from 'classnames/bind';

import AppContext from '../../context/AppContext';
import styles from './FormInput.module.scss';

const cx = classNames.bind(styles);

type FormInputProps = {
  value: string;
  error: string;
  isValid: boolean;
  onChange: (arg: any) => void;
  onBlur: (arg: any) => void;
  type: string;
  name: string;
  label: string;
  minLength: number;
  maxLength: number;
  pattern: string|undefined;
};

const FormInput: FC<FormInputProps> = ({
  value,
  error,
  isValid,
  onChange,
  onBlur,
  type,
  name,
  label,
  minLength,
  maxLength,
}) => {

  const inputClassName = cx({
    input: true,
    invalid: !isValid,
  });

  const { isLoading } = useContext(AppContext);

  function handleChange(evt: any) {
    onChange(evt);
  }

  function handleBlur(evt: any) {
    onBlur(evt);
  }
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        required
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={type}
        name={name}
        id={name}
        minLength={minLength}
        maxLength={maxLength}
        // pattern={pattern}
        readOnly={isLoading}
        className={inputClassName}
      />
      <span className={styles.inputError}>{error}</span>
    </div>
  );
};

export default FormInput;
