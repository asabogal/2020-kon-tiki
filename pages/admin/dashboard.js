import styled from 'styled-components';

const dashboard = () => {
  return (
    <DashboardContainer>
      <HeaderContainer>
        HEADER
      </HeaderContainer>
      <MainContainer>
        SIDEBAR
      </MainContainer>
    </DashboardContainer>
  );
};

export default dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  min-height: 100%; 
`;

const HeaderContainer = styled.div`
`;

const MainContainer = styled.div`
`;
