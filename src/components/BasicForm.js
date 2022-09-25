import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirtNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHanlder: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHanlder: lastNameBlurHandler,
    reset: resetlastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHanlder: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if (enteredFirtNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const fromSubmittedHandler = (event) => {
    event.preventDefault();
    if (
      !enteredFirtNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }
    resetFirstNameInput();
    resetlastNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={fromSubmittedHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name Must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name Must not be empty.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email Must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
