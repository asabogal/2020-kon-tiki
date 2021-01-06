import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from '../../hooks/useLocalStorage';
// components
import NavHeader from '../../components/admin/dashboard/NavHeader';
import SideBar from '../../components/admin/dashboard/SideBar';
import NewReservationForm from '../../components/admin/dashboard/NewReservationForm';
import AccessDenied from '../../components/utils/AccessDenied';
// styled 
import { LoginPageContainer, DashboardContainer, DashboardContent } from '../../components/styled/pages';

const Dashboard = () => {
  const [authenticated, setIsAuthenticated] = useLocalStorage("isLoggedIn", true);
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    authenticated ? setAuthorized(true) : setAuthorized(false);
  }, [authenticated]);
 
  return (
    <LoginPageContainer>
    { authorized ? 
      <DashboardContainer >
        <NavHeader />
        <DashboardContent>
          <SideBar />
          <NewReservationForm />
        </DashboardContent>
      </DashboardContainer>
    :
      <AccessDenied/>
    }

    </LoginPageContainer>
  );
};

export default Dashboard;