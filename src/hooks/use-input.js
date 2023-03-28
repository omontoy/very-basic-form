import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !valueIsValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredValueTouched(true);
  };

  const resetForm = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    resetForm,
  };
};

export default useInput;
