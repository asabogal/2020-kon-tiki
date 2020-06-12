import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const SocialBar = (props) => {
  return (
    <Container>
      <a href="https://www.instagram.com/kontiki.gp/">
      <FontAwesomeIcon 
        icon={faInstagram} 
        size={props.size}
        color={props.color} 
       />
      </a>

      <a href="mailto:kontiki@galleryhotelny.com">
      <FontAwesomeIcon 
        icon={faEnvelopeSquare} 
        size={props.size}
        color={props.color} 
       />
      </a>
    </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  a {
    padding-left: 10px;
  }
`;
