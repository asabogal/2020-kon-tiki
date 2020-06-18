import React from 'react';
import styled from 'styled-components'
import LandingImage from '../components/main/LandingImage';
import Announcement from '../components/main/Announcement';
import OutdoorSeating from '../components/main/OutdoorSeating';
import TakeOut from '../components/main/TakeOut';
import Quotes from '../components/main/Quotes';
import FollowUs from '../components/main/FollowUs';
import Footer from '../components/navigation/Footer';

const LandingPage = () => {
  return (
    <div>
      <LandingImage/>
      <Content>
        <Announcement/>
        <OutdoorSeating/>
        <TakeOut/>
        <Quotes/>
        <FollowUs/>
      </Content>
      <Footer/>
    </div>
  );
};

export default LandingPage;

const Content = styled.div`
  padding: 0px 10px 20px 10px; 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
`;