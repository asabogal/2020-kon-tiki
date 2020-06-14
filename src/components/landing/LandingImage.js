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
  @media (max-width: 599px) {
    height: 75vh;
  }
`;

