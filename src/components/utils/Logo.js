import React from 'react';
import styled from 'styled-components';
import logo from '../../images/nav_logo.png';

const Logo = () => {
  return (
    <Container>
      <img src={logo}/>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
