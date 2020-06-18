import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// images
import poke from '../../images/instagram/poke.png';
import drink from '../../images/instagram/drink.png';
import garden from '../../images/instagram/garden.png';
import ceviche from '../../images/instagram/ceviche.png';

const InstagramSection = () => {
  return (
    <Container>
      <Heading>
      <a href='https://www.instagram.com/kontiki.gp/' target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size='4x' color='#cc82a1'/>
        <h3>Follow Us on Instagram</h3>
        
          <p>@kontiki.gp</p>
        </a>
      </Heading>
      <Gallery>
        <ImageContainer>
          <a href='https://www.instagram.com/kontiki.gp/' target="_blank" rel="noopener noreferrer">
            <img src={poke} alt='poke-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/kontiki.gp/' target="_blank" rel="noopener noreferrer">
            <img src={drink} alr='drink-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/kontiki.gp/' target="_blank" rel="noopener noreferrer">
            <img src={garden} alt='garden-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/kontiki.gp/' target="_blank" rel="noopener noreferrer">
            <img src={ceviche} alt='ceviche-image'/>
          </a> 
        </ImageContainer>
      </Gallery>
    </Container>
  );
};

export default InstagramSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 50px 0px;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 15px;
    h3 {
      font-size: 30px;
    }
    a {
      color: inherit;
      text-decoration: none;
      
    }
    p {
      padding-left: 10px;
      font-size: 24px;
    }
    @media (max-width: 599px) {
    flex-direction: column;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
  } 
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
`;

const ImageContainer = styled.div`
  align-self: center;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;