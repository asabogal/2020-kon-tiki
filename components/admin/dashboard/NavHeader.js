import styled from 'styled-components';

const NavHeader = () => {
  return (
    <HeaderContainer>
      <h2>Kon Tiki Admin</h2>
      <BoxesContainer>
        <Box>
          <p>Reservations</p>
        </Box>
        <Box>
          <p>Sign Out</p>
        </Box>
      </BoxesContainer>
    </HeaderContainer>
  );
};

export default NavHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0 1rem;
`;

const BoxesContainer = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 4vw;
  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
  p {
    font-size: 1.2em;
  }
`;
