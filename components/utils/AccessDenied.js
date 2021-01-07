import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {LoginPageContainer} from '../../components/styled/pages';

const AccessDenied = () => {
  return (
    <LoginPageContainer>
      <TextContainer>
       <h1>You must be logged in to access this page.</h1>
       <Link href='/admin'><a>Login</a></Link>
      </TextContainer>
    </LoginPageContainer>
  );
};

export default AccessDenied;

const TextContainer = styled.div`
  text-align: center;
  color: white;
  margin-top: 25vh;
  a {
    color: aqua;
    font-size: 2rem;
  }
`;