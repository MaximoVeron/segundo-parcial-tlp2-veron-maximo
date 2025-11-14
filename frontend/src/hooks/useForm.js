import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initialState);
  };

  return {
    formState,
    handleChange,
    handleReset,
  };
};
