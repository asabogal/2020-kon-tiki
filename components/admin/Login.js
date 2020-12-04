import React, {useReducer, useState, useEffect} from 'react';
import useSubmitForm from '../../hooks/useSubmitForm';
import styled from 'styled-components';

const Login = () => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
  {
    user: '',
    password: ''
  }  
);

  const [submitForm] = useSubmitForm(userInput);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <FormContainer>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
      <input
        placeholder="user"
        type="text"
        name="user"
        value={userInput.value}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={userInput.value}
        onChange={handleChange}
      />
      <Button type='submit'>
        Submit
      </Button>
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
  input {
    border: 1px thin black;
    height: 20px;
    font-size: 1rem;
    padding: 5px;
  }
  a {
    &:hover {
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 5vh;
  background-color: black;
  color: white;
  cursor: pointer;
`;