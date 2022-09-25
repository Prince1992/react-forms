import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHanlder = (event) => {
    setEnteredName(event.target.value);
  };
  const fromSubmittedHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName('');
  };
  const nameInputClass = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';
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
        {!enteredNameIsValid && (
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
