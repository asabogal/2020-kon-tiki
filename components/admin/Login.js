import useInputControl from '../../hooks/useInputControl';
import useSubmitForm from '../../hooks/useSubmitForm';
import styled from 'styled-components';
import {InputWrapper, Input, SubmitButton, Error} from '../utils/Forms';

const Login = () => {

  const [userInput, handleChange, reset, inputErrors, validateInput] = useInputControl();
  const [submitForm] = useSubmitForm(userInput);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    reset();
  };

  return (
    <FormContainer>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
      <InputWrapper>
      <Input
        placeholder="username"
        type="text"
        name="username"
        value={userInput.value}
        onChange={handleChange}
        onBlur={validateInput}
        isValid={!inputErrors.username ? true : inputErrors.username.isValid}
      />
        {inputErrors.username && <Error>{inputErrors.username.errors}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="password"
          type="password"
          name="password"
          value={userInput.value}
          onChange={handleChange}
          onBlur={validateInput}
          isValid={!inputErrors.password ? true : inputErrors.password.isValid}
        />
          {inputErrors.password && <Error>{inputErrors.password.errors}</Error>}
      </InputWrapper>
      <SubmitButton label='Login'/>
      </form>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  margin: 10vh auto;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-content: center;
  h1 {
    color: white;
  }
  form {
    display: grid;
    grid-gap: 10px
  }
`;
