import { useRouter } from 'next/router';
// components
import MenuForm from '../../../../components/admin/menus/MenuForm';
// styled
import { MenusPageContainer, MenuFormContainer } from '../../../../components/styled/pages';
// data (these should be fetched from backend)
import { dinnerMenuData } from '../../../../dummyData/DinnerMenu';
import { drinkMenuData } from '../../../../dummyData/DrinkMenu';


const New = ({ type, menuData }) => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <MenusPageContainer>
      {console.log('new form menudata is', menuData)}
      <MenuFormContainer>
        <h2>Add New {capitalize(type)} Menu Item</h2>
        <MenuForm formType='new' menuData={menuData} />
      </MenuFormContainer>
    </MenusPageContainer>
  );
};

export default New;

New.getInitialProps = async ({ query }) => {
  let menuData;
  const { type } = query
  if (type === 'dinner') {
    menuData = dinnerMenuData
  } else if (type === 'drink') {
    menuData = drinkMenuData
  }

  return { type, menuData };
}