import React from 'react';
import styled from 'styled-components';
import image from '../../images/texture2.png'

const Announcement = () => {
  return (
    <HeroContainer> 
    <InfoContainer>   
      <h3>WE ARE OPEN!</h3>
      <Hours>
        <h4>Take-Out: 12-8pm</h4>
        <h4>Garden Seating: 3-9pm</h4>
      </Hours>
    </InfoContainer>
    </HeroContainer> 
  );
};

export default Announcement;

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  background: url(${image}) no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 2;
  &::after {
    content: '';
    position: absolute;
    top: 0%;
    bottom: 0;
    width: 100%;
    background: rgba(54, 25, 43, 0.5);
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