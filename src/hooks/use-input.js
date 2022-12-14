import { useState, useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === 'RESET') {
    return {
      isTouched: false,
      value: '',
    };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  //   const [enteredValue, setEnteredValue] = useState('');
  //   const [isTouched, setIsTouched] = useState(false);
  //   const [enteredValue, setEnteredValue] = useReducer('');
  //   const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
    //setEnteredValue(event.target.value);
  };

  const inputBlurHanlder = () => {
    dispatch({ type: 'BLUR', isTouched: true });
    //setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHanlder,
    reset,
  };
};

export default useInput;
