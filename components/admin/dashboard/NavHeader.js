import styled from 'styled-components';

const NavHeader = () => {

  return (
    <HeaderContainer>
      <h2>Kon Tiki Admin</h2>
      <BoxesContainer>
        <Box>
          <a>Reservations<span>3</span></a>
        </Box>
        <Box>
          <a>Sign Out</a>
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
  padding: 0 4vw;
  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
  a {
    font-size: 1.2em;
    display: flex;
    align-items: center;
    align-content: center;
  }
  span {
      padding: 0.35rem 0.6rem;
      background-color: #e4aa7b;
      border-radius: 50%;
      margin-left: 0.2rem;
      margin-bottom: 1.2rem;
      align-self: center;
      font-size: 1rem;
    }

`;
