import React, {useEffect} from 'react';
import styled from 'styled-components';
import covid from '../../images/COVID_menu.png';

export const CovidMenu = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <MenuContainer>
      <img src={covid} alt='june-menu'/>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: grid;
  justify-items: center;
  height: 1000px;
  z-index: 999;
  img {
    width: 100%;
    height: 100%;
  }
`;