// components
import NavHeader from '../../components/admin/dashboard/NavHeader';
import SideBar from '../../components/admin/dashboard/SideBar';
import NewReservationForm from '../../components/admin/dashboard/NewReservationForm';
// styled 
import {AdminPageContainer, DashboardContainer, DashboardContent} from '../../components/styled/pages';

const Dashboard = () => {
  return (
    <AdminPageContainer>
      <DashboardContainer>
        <NavHeader/>
        <DashboardContent>
          <SideBar/>
          <NewReservationForm/>
        </DashboardContent>
      </DashboardContainer>
    </AdminPageContainer>
  );
};

export default Dashboard;