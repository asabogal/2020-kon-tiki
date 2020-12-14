import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #191b30;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardContent = styled.div`
  display: flex;
`;

export const MenusPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #191b30;
`;

export const MenuFormContainer = styled.div`
  margin: 0 auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  h2 {
    color: white;
    text-align: center;
    margin-block-end: 0px;
  }
`;
