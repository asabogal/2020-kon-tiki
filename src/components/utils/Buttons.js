import React from 'react';
import styled from 'styled-components';

export const MenuButton = ({dark}) => {
  return (
    <MenuBtn dark>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </MenuBtn>
  )
};

const MenuBtn = styled.div`
  cursor: pointer;
  div {
    width: 50px;
    height: 2px;
    background-color: ${props => props.dark ? '#ce6897' : 'black'};
    margin: 6px 0;
    transition: 0.4s;
  } 
  &:hover {
    div {
      height: 3px;
      margin: 7px 0;
    }
  }
  @media (max-width: 500px) {
    div {
      width: 35px;
      height: 1px;
      margin: 6px 0;
      transition: 0.4s;
    } 
    &:hover {
      div {
        height: 2px;
        margin: 7px 0;
      }
    }
  }
`;