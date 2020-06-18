import React from 'react';
import styled from 'styled-components';

const Announcement = () => {
  return (
    <Container>
      <h1>WE ARE OPEN!!</h1>
      <h2>Visit us for full-service outdoor seating or window pick up</h2>
      <p>
        KonTiki is one of the North Fork’s most intriguing restaurants and bars.<br></br>
	      Spearheaded by Chef Cheo, our unique approach to cusine sets us apart from any culinary experience in the area.<br></br>
	      Located at the beautiful Gallery Hotel in Greenport, NY, we welcome you to join us and experience it for yourself!<br></br>
      </p>
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  display: grid;
  height: 45vh; 
  text-align: center;
  margin-bottom: 5vh;
  p {
    font-size: 20px;
  }
`;