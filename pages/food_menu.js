import {useRouter} from 'next/router';
// components
import Menu from '../components/menus/Menu';

const FoodMenu = () => {

  const router = useRouter();   
  const path = router.pathname.replace(/\\|\//g,'');

  return (
    <>
      <Menu path={path}/>
    </>
  );
};

export default FoodMenu;