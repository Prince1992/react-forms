import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name is valid !');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHanlder = (event) => {
    setEnteredName(event.target.value);
  };
  const fromSubmittedHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClass = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={fromSubmittedHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHanlder}
          value={enteredName}
          ref={nameInputRef}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name Must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
