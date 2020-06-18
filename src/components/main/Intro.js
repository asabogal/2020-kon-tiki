import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <Container>
      <h3>WELCOME!</h3>
      <h3>We are open for service on our gorgeous garden.</h3>
      <p>
        KonTiki is one of the North Fork’s most intriguing restaurants and bars.<br></br>
	      Spearheaded by Chef Cheo, our unique approach to cusine sets us apart from any culinary experience in the area.<br></br>
	      Located at the beautiful Gallery Hotel in Greenport, NY, we welcome you to join us and experience it for yourself!<br></br>
      </p>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  color: black;
  display: grid;
  color: white;
  grid-template-columns: 50%;
  justify-content: center;
  text-align: center;
  padding: 40px 0px;
  z-index: 3;
  text-shadow: 2px 2px 2px rgba(0,0,0,.45);
  h3 {
    font-size: 50px;
  }
  p {
    font-weight: 200;
  }
`;