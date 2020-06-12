import React from 'react';
import styled from 'styled-components';
import NavHeader from './NavHeader';

const Layout = ({children}) => {
  return (
    <Container>
      <NavHeader/>
        {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;