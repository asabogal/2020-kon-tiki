import {useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import drinkMenu from '../../public/images/drink_menu.png';
import foodMenu from '../../public/images/food_menu.png';

const Menu = ({path}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const menus = {
    food_menu: foodMenu,
    drink_menu: drinkMenu
  };

  const nextMenu = (path) => {
    const menuObj = {};
    if (path === 'food_menu') {
      menuObj['name'] = 'Drink Menu',
      menuObj['link'] = '/drink_menu'
    } else {
      menuObj['name'] = 'Food Menu',
      menuObj['link'] = '/food_menu'
    }

    return menuObj;
  };

  return (
    <PageContainer>
      <NavContainer>
        <Link href={nextMenu(path).link}><a>{`${nextMenu(path).name}`}</a></Link>
        <Link href='/'><a>Go Back</a></Link>
      </NavContainer>
      <MenuContainer>
        <img src={menus[path]} alt={`${path}`}/>
      </MenuContainer>
</PageContainer>
  );
};

export default Menu;

const PageContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const NavContainer = styled.div`
  margin: 20px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  a {
    color: #cc82a1;
    font-size: 20px;
    padding-bottom: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MenuContainer = styled.div`
  margin: 0 auto;
  height: 900px;
  z-index: 800;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1100px) {
    width: 70%;
  }
`;