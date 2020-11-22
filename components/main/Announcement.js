import styled from 'styled-components';

const Announcement = () => {
  return (
    <Container>
      <h1>WE ARE OPEN!!</h1>
      <h2>Visit us for full-service, outdoor seating or window pick up</h2>
      <p>KonTiki is one of the North Fork’s most intriguing restaurants and bars.</p>
      <p>Spearheaded by <strong style={{fontSize: '22px'}}>Chef Cheo</strong>, our unique approach to cusine sets us apart from any culinary experience in the area.</p>
      <p>Located at the beautiful Gallery Hotel in Greenport, NY, we welcome you to join us and experience it for yourself!</p>
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  display: grid;
  height: 45vh; 
  text-align: center;
  margin-bottom: 5vh;
  width: 60%;
  justify-content: center;
  margin: 0 auto;
  p {
    font-size: 20px;
    margin-block-start: 3px;
    margin-block-end: 3px;
  }
  @media (max-width: 499px) {
    height: 110vh;
  }
`;