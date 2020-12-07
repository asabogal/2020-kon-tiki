import useInputControl from '../../hooks/useInputControl';
import useSubmitForm from '../../hooks/useSubmitForm';
import styled from 'styled-components';
import {Input, SubmitButton} from '../utils/Forms';

const Login = () => {

  const [userInput, handleChange, reset] = useInputControl();
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
      <Input
        placeholder="username"
        type="textarea"
        name="username"
        value={userInput.value}
        onChange={handleChange}
      />
      <Input
        placeholder="password"
        type="password"
        name="password"
        value={userInput.value}
        onChange={handleChange}
      />
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
    width: 300px;
    display: grid;
    grid-gap: 10px
  }
`;
