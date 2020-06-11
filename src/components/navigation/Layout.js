import React from 'react';
import styled from 'styled-components';
import NavHeader from './NavHeader';


const Layout = () => {
  return (
    <Container>
      <NavHeader/>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;