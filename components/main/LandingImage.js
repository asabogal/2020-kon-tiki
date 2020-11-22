import styled from 'styled-components';
import gif from '../../public/images/kt_gif_big.gif';

const LandingImage = ({handleGifLoad}) => {
  return (
    <Container>
      <ImageContainer>
        <img onLoad={handleGifLoad} src={gif} alt='kon-tiki-logo'/>
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
  @media (max-width: 599px) {
    height: 75vh;
  }
`; 

const ImageContainer = styled.div`
width: 50%;
height: 80%;
align-self: center;
justify-self: center;
img {
  width: 100%;
  height: 100%;
}
@media (max-width: 599px) {
  width: 90%;
  height: 50%;
}
`;