import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onSubmit,
  };
};
