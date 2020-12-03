import styled from 'styled-components';

const Intro = () => {
  return (
    <Container>
      <h1>WELCOME!</h1>
      <p>KonTiki is one of the North Fork’s most intriguing restaurants and bars.</p>
      <p>Spearheaded by <strong style={{fontSize: '22px'}}>Chef Cheo</strong>, our unique approach to cusine sets us apart from any culinary experience in the area.</p>
      <p>Located at the beautiful Gallery Hotel in Greenport, NY, we welcome you to join us and experience it for yourself!</p>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  height: 45vh; 
  text-align: center;
  margin-bottom: 5vh;
  width: 60%;
  justify-content: center;
  margin: 0 auto;
  h1 {
    margin-block-end: 5vh;
  }
  p {
    font-size: 20px;
    margin-block-start: 2vh;
    margin-block-end: 2vh;
  }
  @media (max-width: 499px) {
    height: 55vh;
  }
`;