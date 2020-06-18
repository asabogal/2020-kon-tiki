import React from 'react';
import styled from 'styled-components';
import image from '../../images/garden.jpeg';
import {MainButton} from '../utils/Buttons';
import {Link} from 'react-router-dom';

const GardenHero = () => {
  return (
    <HeroContainer>
      <Link to='/menu'>
        <MainButton>MENU</MainButton>
      </Link>
    </HeroContainer>
  );
};

export default GardenHero;

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: flex-end;
  background: url(${image}) no-repeat;
  background-position: center center;
  background-size: cover;
  height: 50vh;
  z-index: 2;
  &::after {
    content: '';
    position: absolute;
    top: 0%;
    bottom: 0;
    width: 100%;
    background: rgba(57, 81, 82, 0.3);
    z-index: 1;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 20px 40px;
  color: #5ccedd;
  text-align: center;
  z-index: 2;
  h3, h4 {
    margin-block-start: 5px;
    margin-block-end: 10px;
    text-shadow: 2px 2px 2px rgba(0,0,0,.45);
  }
`;  

const Hours = styled.div`
  display: flex;
  justify-content: space-evenly;
`;