// components
import NavHeader from '../../components/admin/dashboard/NavHeader';
import SideBar from '../../components/admin/dashboard/SideBar';
import NewReservationForm from '../../components/admin/dashboard/NewReservationForm';
// styled 
import {LoginPageContainer, DashboardContainer, DashboardContent} from '../../components/styled/pages';

const Dashboard = () => {
  return (
    <LoginPageContainer>
      <DashboardContainer>
        <NavHeader/>
        <DashboardContent>
          <SideBar/>
          <NewReservationForm/>
        </DashboardContent>
      </DashboardContainer>
    </LoginPageContainer>
  );
};

export default Dashboard;