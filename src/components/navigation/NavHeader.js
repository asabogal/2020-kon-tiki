import React from 'react';
import styled from 'styled-components';
import SocialBar from '../utils/SocialBar';

const NavHeader = () => {
  return (
    <Container>
        <a href="tel: +1-631-477-4007">631-477-4007</a>
        <Hours>
          <p>Fri, Sat, Sun</p>
          <p>12-9pm</p>
        </Hours>
        <SocialBar
          color='white'
          size='lg'
        />
    </Container>
  );
};
export default NavHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 900;
  height: auto;
  padding: 10px 0px;
  background-color: black;
  z-index: 900;
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;  
    &:hover {
      text-decoration: underline;
    }
  }

`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    padding: 0;
    margin: 0;
    text-align: center;
    justify-items: center;
    font-size: 14px;
    color: white;
  }
`;

const LogoContainer = styled.div`
  padding-left: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
  a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding-right: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// const MenuBtnContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding-right: 40px;
// `;