import React from 'react';
import styled from 'styled-components';
import logo from '../../images/nav_logo.png';

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt='kontiki-logo'/>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 18px;
  border: 2px solid white;
  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
