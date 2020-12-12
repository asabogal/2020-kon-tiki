import {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// components
import MenuCard from '../../../components/admin/menus/MenuCard';
// data
import {dinnerMenuData} from '../../../dummyData/DinnerMenu';
import {drinkMenuData} from '../../../dummyData/DrinkMenu';

const Menus = () => {

  const [menuData, setMenuData] = useState(dinnerMenuData);

  const changeDinnerMenu = () => {
   setMenuData(drinkMenuData);
  }

  const changeDrinkMenu = () => {
    setMenuData(dinnerMenuData);
  }

  const renderMenuItems = () => {
    return menuData.map(item => {
      return (
        <MenuCard 
          key={item.id}
          itemName={item.itemName}
          ingredients={item.ingredients}
          price={item.price}
          options={item.options}
        />
      )
    })
  }

  return (
    <AdminMenuContainer>
      <LinksContainer>
        <NavLink>
          <Link href='/admin/dashboard'><a>...Back to Admin Dashboard</a></Link>
        </NavLink>
        <MenuLinks>
          <p onClick={changeDrinkMenu}>DINNER MENU</p>
          <p onClick={changeDinnerMenu}>DRINK MENU</p>
        </MenuLinks>
      </LinksContainer>
      <AdminMenuContent>
        {renderMenuItems()}
      </AdminMenuContent>
      {/* <Link as='/admin/menus/dinner/1/new' href='/admin/menus/[type]/[id]/new'><a>Testing</a></Link>
      Menus Index */}
    </AdminMenuContainer>
  );
};

export default Menus;

const AdminMenuContainer = styled.div`
  background-color: #191b30;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  p, a {
    color: white;
    font-size: 30px;
    padding: 0px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavLink = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: aqua;
    font-size: 20px;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AdminMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70vw;
`;

