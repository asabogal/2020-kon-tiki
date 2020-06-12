import React from 'react';
import styled from 'styled-components';
import SocialBar from '../utils/SocialBar';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <a href='#'>631-477-4000</a>
        <a href='#'>437 Main Street - Greenport, NY 11944</a>
        <SocialBar
          color='white'
          size='2x'
        />
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: black;
  height: auto;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 720px) {
    flex-direction: column;
    a {
      padding-bottom: 20px;
    }
  }
`;