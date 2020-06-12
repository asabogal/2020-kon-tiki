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
  height: auto;
  width: 100vw;
  @media (max-width: 599px) {
    height: auto;
  }
`;

