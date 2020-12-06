import Link from 'next/link';
import styled from 'styled-components';
import garden from '../../public/images/garden.jpeg';
import bar from '../../public/images/bar2.png';

const Seating = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Indoor & Outdoor Seating</h1>
        <p>Food and Cocktails</p>
        <p>Service from 5pm - 10pm, Friday & Saturday</p>
        <LinkContainer>
          <Link href='/menu'><a>MENU</a></Link>
        </LinkContainer>
      </TextContainer>
      <ImagesContainer>
        <img src={bar} alt='indoor-bar'/>
        <img src={garden} alt='outdoor-garden'/>
      </ImagesContainer>
    </Container>
  );
};

export default Seating;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 20px;
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

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  img {
    /* height: 100%; */
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5%;
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    row-gap: 4vh;
    img {
      height: auto;
    }
  }
`;