import { FC, ChangeEvent } from 'react';

import styles from './FormTextArea.module.scss';

type FormTextAreaProps = {
  name: string;
  placeholder: string;
  maxLength: number;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
};

const FormTextArea: FC<FormTextAreaProps> = ({ name, placeholder, maxLength, value, onChange }) => {

  function handleChange(evt: any) {
    onChange(evt);
  }

  return (
    <textarea
      value={value}
      onChange={handleChange}
      className={styles.textarea}
      name={name}
      id={name}
      placeholder={placeholder}
      maxLength={maxLength}></textarea>
  );
};

export default FormTextArea;
