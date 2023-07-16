import { FC, FormEvent, useState, ChangeEvent } from 'react';

import { Form, FormInput, FormTextArea } from '../';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { Popup } from '../';

type PopupWithClientFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSendCall: (name: string, phone: string, message: string) => void;
  notification: string;
};

const PopupWithClientForm: FC<PopupWithClientFormProps> = ({
  isOpen,
  onClose,
  onSendCall,
  notification,
}) => {
  const { values, handleChange, hadleShiftFocus, errors, inputsValidity, isValid } =
    useFormAndValidation(false);

  const [messageValue, setMessageValue] = useState('');

  function handleMessageChange(evt: ChangeEvent<HTMLInputElement>) {
    setMessageValue(evt.target.value);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (values.name && values.phone && messageValue) {
      onSendCall(values.name, values.phone, messageValue);
    }
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose} name="clientForm">
      <Form
        name="sendCall"
        onSubmit={handleSubmit}
        title="Благодарим за оказанное доверие! Пожалуйста, укажите контактную информацию."
        buttonText="Отправить"
        isValid={isValid}
        notification={notification}>
        <FormInput
          value={values.name || ''}
          error={errors.name || ''}
          isValid={inputsValidity.name || false}
          onChange={handleChange}
          onBlur={hadleShiftFocus}
          type="text"
          name="name"
          label="Имя"
          minLength={2}
          maxLength={15}
          pattern=""
        />
        <FormInput
          value={values.phone || ''}
          error={errors.phone || ''}
          isValid={inputsValidity.phone || false}
          onChange={handleChange}
          onBlur={hadleShiftFocus}
          type="tel"
          name="phone"
          label="Телефон"
          minLength={10}
          maxLength={12}
          pattern=""
        />
        <FormTextArea
          value={messageValue}
          onChange={handleMessageChange}
          name="message"
          placeholder="Отправьте сообщение (по желеанию)"
          maxLength={210}
        />
      </Form>
    </Popup>
  );
};

export default PopupWithClientForm;
