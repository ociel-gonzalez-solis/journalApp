import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';

import { startRegisterWithEmailAndPassword } from '../store/auth/thunk';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    // console.log(formState);
    dispatch(startRegisterWithEmailAndPassword(formState));
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onSubmit,
    ...formValidation,
    isFormValid,
    formSubmitted,
  };
};
