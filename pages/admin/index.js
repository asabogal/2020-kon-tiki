// components
import Login from '../../components/admin/Login';

// styles 
import {AdminPageContainer} from '../../components/styled/pages';

const index = () => {
  return (
    <AdminPageContainer>
      <Login/>
    </AdminPageContainer>
  );
};

export default index;