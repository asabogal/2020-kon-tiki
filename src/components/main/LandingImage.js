import React from 'react';
import styled from 'styled-components';
import {ImageContainer} from './ImageContainer';
import gif from '../../images/kt_gif_big.gif';

const LandingImage = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={gif} alt='kon-tiki-logo'/>
      </ImageContainer>
    </Container>
  );
};

export default LandingImage;

const Container = styled.div`
  display: grid;
  height: 90vh;
  width: 100vw;
  padding-bottom: 20px;
  background-color: black;
  animation: SlideUp 1s ease forwards 2.4s;
  @media (max-width: 599px) {
    height: 75vh;
  }
  @keyframes SlideUp {
  from {
    transform: translateY(0);
  } to {
    transform: translateY(-100%);
  }
}
`;

