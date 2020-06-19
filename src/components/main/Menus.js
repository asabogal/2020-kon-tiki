import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import drinkMenu from '../../images/drink_menu.png';
import foodMenu from '../../images/food_menu.png';

export const DrinkMenu = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <PageContainer>
      <NavContainer>
        <Link to='/'><span>&larr;</span> Back</Link>
      </NavContainer>
      <MenuContainer>
        <img src={drinkMenu} alt='drink-menu'/>
      </MenuContainer>
  </PageContainer>
  )
}

export const FoodMenu = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <PageContainer>
      <NavContainer>
        <Link to='/'><span>&larr;</span> Back</Link>
      </NavContainer>
      <MenuContainer>
        <img src={foodMenu} alt='food-menu'/>
      </MenuContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const NavContainer = styled.div`
  margin: 20px;
  z-index: 1;
  position: relative;
  display: inline-block;
  a {
    text-decoration: none;
    color: #cc82a1;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MenuContainer = styled.div`
  margin: 0 auto;
  height: 900px;
  z-index: 800;
  img {
    width: 100%;
    height: 100%;
  }
`;
