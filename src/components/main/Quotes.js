import React from 'react';
import styled from 'styled-components';

const Quotes = () => {
  return (
    <Container>
      <h1>"This Restaurant Will Make You Want to Go to Greenport Right Now"</h1>
      <p>-edible East End</p>
    </Container>
  );
};

export default Quotes;

const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h1 {
    margin-block-end: 0px;
  }
`;