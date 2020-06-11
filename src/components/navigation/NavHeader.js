import React from 'react';
import styled from 'styled-components';
import Logo from '../utils/Logo';
import {MenuButton} from '../utils/Buttons';

const NavHeader = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <MenuBtnContainer>
        <MenuButton dark/>
      </MenuBtnContainer>
    </Container>
  );
};
export default NavHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  z-index: 900;
  width: 100vw;
  height: 90px;
`;

const LogoContainer = styled.div`
  padding-left: 40px;
`;

const MenuBtnContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;