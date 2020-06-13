import React from 'react';
import styled from 'styled-components';
import SocialBar from '../utils/SocialBar';

const NavHeader = () => {
  return (
    <Container>
        <a href="tel: +1-631-477-4007">631-477-4007</a>
        <Hours>
          <p>Fri, Sat, Sun</p>
          <p>12-8pm</p>
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
  height: 50px;
  padding: 0px 40px 10px 40px;
  background-color: black;
  z-index: 900;
  a {
    text-decoration: none;
    color: white;
    font-size: 14px;  
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 650px) {
    padding: 0px 10px 30px 10px;
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