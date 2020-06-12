import styled from 'styled-components';

export const ImageContainer = styled.div`
width: 50%;
height: 100%;
align-self: center;
justify-self: center;
img {
  width: 100%;
  height: 100%;
}
@media (max-width: 599px) {
  width: 90%;
  height: 100%;
}
`;