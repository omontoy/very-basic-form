import { useReducer } from "react";

const initialState = {
  value: "",
  valueTouched: false,
};

const InputReducer = (state, action) => {
  if (action.type === "INPUT_VALUE") {
    return {
      value: action.payload,
      valueTouched: state.valueTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      valueTouched: true,
    };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      valueTouched: false,
    };
  }

  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(InputReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const valueIsInvalid = !valueIsValid && inputState.valueTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT_VALUE", payload: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetForm = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    resetForm,
  };
};

export default useInput;
