import React from 'react';
import styled from 'styled-components';
import Logo from '../utils/Logo';

const Footer = () => {
  return (
    <Container>
      <Logo/>
      <ContactUs>
        <h3>CONTACT US</h3>
        <a href="tel: +1-631-477-4007">631-477-4007</a>
        <a href="https://www.google.com/maps?saddr=My+Location&daddr=437+Main+Street+Greenport+NY+11944" target="_blank" rel="noopener noreferrer">437 Main Street - Greenport, NY 11944</a>
        <a href="mailto:kontiki@galleryhotelny.com">kontiki@galleryhotelny.com</a>
      </ContactUs>
      <Hours>
        <h3>HOURS</h3>
        <p>Thu - Mon</p>
        <p>5pm - 10pm</p>
      </Hours>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px;
  background-color: black;
  height: auto;
  text-align: center;
  color: white;
  h3 {
    margin-block-end: 14px;
    text-decoration: underline;
    letter-spacing: 1.8px;
  }
  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 0px;
    margin-block-end: 8px;
    margin-block-start: 0px;
    letter-spacing: 1.2px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactUs = styled.div`
`;

const Hours = styled.div`
    p {
      margin-block-end: 0px;
      margin-block-start: 0px;
    }
`;