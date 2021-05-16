import Link from 'next/link';
import styled from 'styled-components';
import takeout from '../../public/images/takeout.png';

const TakeOut = () => {
  return (
    <Container>
      <TextContainer>
        <h1>TAKE OUT</h1>
        <p>Food and Cocktails</p>
        <p>From 5pm - 9pm, Thursday - Sunday</p>
        <LinkContainer>
          <Link href='/menu'><a>MENU</a></Link>
        </LinkContainer>
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
  grid-template-rows: auto auto;
  gap: 20px;
  margin-bottom: 10vh;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 2vh;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
    margin-block-start: 3px;
    margin-block-end: 3px;
  }
`;


const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    color: #cc82a1;
    font-size: 30px;
    padding: 0px 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  `;

const ImageContainer = styled.div`
  margin: 0 auto;
  height: 70vh;
  img {
    height: 100%;
    /* width: 100%; */
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5%;
  }
  @media (max-width: 1025px) {
    img {
      height: 75%;
    }
  }
  @media (max-width: 599px) {
    height: 40vh;
    img {
      height: 85%;
      max-width: 100%;
    }
  }
  `;