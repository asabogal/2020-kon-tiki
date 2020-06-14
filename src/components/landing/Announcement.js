import React from 'react';
import styled from 'styled-components';

const Announcement = (props) => {
  return (
    <HeroContainer image={props.image}> 
      {props.children}
    </HeroContainer> 
  );
};

export default Announcement;

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  background: url(${props => props.image}) no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 2;
  height: 30vh;
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

