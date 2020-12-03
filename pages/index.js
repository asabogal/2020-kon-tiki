import React, {useState} from 'react';
import styled from 'styled-components'
// components
import LandingImage from '../components/main/LandingImage';
import Intro from '../components/main/Intro';
// import Announcement from '../components/main/Announcement';
import Seating from '../components/main/Seating';
import TakeOut from '../components/main/TakeOut';
import Quotes from '../components/main/Quotes';
import FollowUs from '../components/main/FollowUs';
import Footer from '../components/navigation/Footer';

const Home = () => {

  const [gifLoading, setGifLoading] = useState(true);

  const handleGifLoad = () => {
    setGifLoading(false);
  }

  return  (
    <PageContainer>
      <LandingImage handleGifLoad={handleGifLoad}/>
      <Content loading={gifLoading.toString()}>
        {/* <Announcement/> */}
        <Intro/>
        <Seating/>
        <TakeOut/>
        <Quotes/>
        <FollowUs/>
      </Content>
      <Footer/>
    </PageContainer>
  )
}
export default Home;

const PageContainer = styled.div`
  animation: ${props => props.loading === 'true' ? 'none' : 'ContentUp 1s ease forwards 2.8s'};
  position: absolute;
  @keyframes ContentUp {
  from {
    transform: translateY(0);
  } to {
    transform: translateY(-90vh);
  }
} 
@media (max-width: 499px) {
  @keyframes ContentUp {
  from {
    transform: translateY(0);
  } to {
    transform: translateY(-80vh);
  }
} 
}
`;

const Content = styled.div`
  padding: 0px 10px 20px 10px; 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto), 150px;
  gap: 20px;
  margin: 0 2vw;
`;