import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// components
import MenuCard from '../../../components/admin/menus/MenuCard';
// data (these should be fetched from backend on render; useEffect??)
import { dinnerMenuData } from '../../../dummyData/DinnerMenu';
import { drinkMenuData } from '../../../dummyData/DrinkMenu';

const Menus = () => {

  const [menuData, setMenuData] = useState(dinnerMenuData);

  const changeDinnerMenu = () => {
    setMenuData(drinkMenuData);
  };

  const changeDrinkMenu = () => {
    setMenuData(dinnerMenuData);
  };

  const renderMenuItems = () => {
    return menuData.map(item => {
      return (
        <MenuCard
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          ingredients={item.ingredients}
          price={item.price}
          options={item.options}
          menuType={item.menuType}
        />
      )
    })
  };

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
      <MenuLinks>
        <Link as='/admin/menus/dinner/new' href='/admin/menus/[type]/new'><button>Add New Dinner Item</button></Link>
        <Link as='/admin/menus/drink/new' href='/admin/menus/[type]/new'><button>Add New Drink Item</button></Link>
      </MenuLinks>
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
  padding-bottom: 5vh;
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
  button {
    background-color: black;
    color: white;
    padding: 2vh 2vw;
    text-align: center;
    font-size: 1.2rem;
    margin: 2vh 2vw;
    cursor: pointer;
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

