import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// components
import MenuForm from '../../../../../components/admin/menus/MenuForm';
import Loader from '../../../../../components/utils/Loader';
// styled
import { MenusPageContainer, MenuFormContainer } from '../../../../../components/styled/pages';

// data
import { dinnerMenuData } from '../../../../../dummyData/DinnerMenu';
import { drinkMenuData } from '../../../../../dummyData/DrinkMenu';
import { parse } from '@fortawesome/fontawesome-svg-core';

const Edit = ({ id, type, menuData }) => {

  const itemId = parseInt(id);
  const editItem = menuData.find(item => item.id === itemId);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <MenusPageContainer>
      <MenuFormContainer>
        <h2>Edit {capitalize(type)} Menu Item</h2>
        <MenuForm formData={editItem} />
      </MenuFormContainer>
    </MenusPageContainer>
  );
};

export default Edit;

Edit.getInitialProps = async ({ query }) => {
  let menuData;
  const { id, type } = query
  if (type === 'dinner') {
    menuData = dinnerMenuData
  } else if (type === 'drink') {
    menuData = drinkMenuData
  }

  return { id, type, menuData };
}