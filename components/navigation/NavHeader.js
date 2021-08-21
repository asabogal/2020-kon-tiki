import styled from 'styled-components';
import SocialBar from '../utils/SocialBar';

const NavHeader = () => {
  return (
    <Container>
      <ReserveContainer>
        <a href='https://resy.com/cities/grnp/kontiki?gclsrc=aw.ds&gclid=CjwKCAjwyIKJBhBPEiwAu7zll_TG4iYB0dv5w79KBWzRgFxD_zkcpyzewI2DmwgguMt6xzydAC4PmRoCnK0QAvD_BwE&date=2021-08-21&seats=2' target="_blank" rel="noopener noreferrer">Reserve a Table</a>
      </ReserveContainer>
      <Hours>
        <p>Wednesday - Sunday</p>
        <p>5pm - 10pm</p>
        <a href="tel: +1-631-477-4007">631-477-4007</a>
      </Hours>
      <SocialBar
        color='white'
        size='lg'
      />
    </Container>
  );
};
export default NavHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 900;
  height: 75px;
  padding-top: 20px;
  background-color: black;
  z-index: 900;
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;  
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 599px) {
    padding: 15px 0px;
  }
`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  p {
    padding: 0;
    margin: 0;
    text-align: center;
    justify-items: center;
    font-size: 18px;
    color: white;
  }
  a {
    padding-top: 10px;
    text-decoration: none;
    color: #cc82a1;
    font-size: 18px;  
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 599px) {
    padding: 15px 0px;
  }
`;

const ReserveContainer = styled.div`
    a {
    text-decoration: none;
    color: white;
    font-size: 20px;  
    &:hover {
      text-decoration: underline;
    }
  }
`;