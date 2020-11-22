import Link from 'next/link';
import styled from 'styled-components';
import garden from '../../public/images/garden.jpeg';

const OutdoorSeating = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={garden} alt='garden'/>
      </ImageContainer>
      <TextContainer>
        <h1>GARDEN SEATING</h1>
        <p>Food and Cocktails</p>
        <p>Service from 6pm - 10pm, Friday & Saturday</p>
        <p>Reservations strongly encouraged</p>
        <LinkContainer>
          <Link href='/food_menu'><a>FOOD MENU</a></Link>
          <Link href='/drink_menu'><a>DRINK MENU</a></Link>
        </LinkContainer>
      </TextContainer>
    </Container>
  );
};

export default OutdoorSeating;

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  padding: 20px 50px;
  @media (max-width: 999px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    padding: 30px 0px;
  }
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