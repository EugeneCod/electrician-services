import { useState, useCallback, ChangeEvent, FocusEvent } from 'react';

interface IValues {
  name?: string;
  phone?: string;
  email?: string;
}
interface IErrors {
  name?: string;
  phone?: string;
  email?: string;
}
interface IInputsValidity {
  name?: boolean;
  phone?: boolean;
  email?: boolean;
}

export default function useFormAndValidation(validity: boolean) {
  const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState<IErrors>({});
  const [inputsValidity, setInputsValidity] = useState<IInputsValidity>({});
  const [isValid, setIsValid] = useState(validity);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setInputsValidity({ ...inputsValidity, [name]: true });
    const validatedForm = evt.target.closest('form');
    if (!validatedForm) {
      return;
    } else {
      setIsValid(validatedForm.checkValidity());
    }
  };

  const hadleShiftFocus = (evt: FocusEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setInputsValidity({ ...inputsValidity, [name]: evt.target.validity.valid });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    setValues,
    handleChange,
    hadleShiftFocus,
    errors,
    setErrors,
    inputsValidity,
    setInputsValidity,
    isValid,
    setIsValid,
    resetForm,
  };
}
