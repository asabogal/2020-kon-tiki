import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import takeout from '../../images/takeout.png';

const TakeOut = () => {
  return (
    <Container>
      <TextContainer>
        <h1>TAKE OUT</h1>
        <p>Food and Cocktails</p>
        <p>From 12pm - 8pm, Friday-Sunday</p>
        <Link to='/menu'>Menu</Link>
      </TextContainer>
      <ImageContainer>
        <img src={takeout} alt='garden'/>
      </ImageContainer>

    </Container>
  );
};

export default TakeOut;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
  padding: 20px 50px;
`;

const ImageContainer = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  align-self: center;
  text-align: center;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
  }
  a {
    color: #cc82a1;
    font-size: 30px;
  }
`;