import {useState, useEffect} from 'react';
import styled from 'styled-components';
// components
import MenuCard from '../components/menus/MenuCard';
// data
import {dinnerMenuData} from '../dummyData/DinnerMenu';
import {drinkMenuData} from '../dummyData/DrinkMenu';
// images
import palmsBackground from '../public/images/kontiki_palms_background.jpg';

const Menu = () => {

  useEffect(() => {
  });

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
    <PageContainer>
      <NavContainer>
        <p onClick={changeDrinkMenu}>DINNER MENU</p>
        <p onClick={changeDinnerMenu}>DRINK MENU</p>
      </NavContainer>
      <MenuContainer>
        {renderMenuItems()}
        <Warning>
          * Consuming raw of undercooked meats, poultry, seafood, shellfish, or eggs, may increase your risk of foodborne illness.
          <br></br>
          <br></br>
          Before placing your order, please inform us if you or a person in your party has a food allergy.
      </Warning>
      </MenuContainer>
    </PageContainer>
  );
};

export default Menu;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: url(${palmsBackground}) no-repeat;
  background-position: center center;
  background-size: cover;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: #cc82a1;
    font-size: 30px;
    padding: 0px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MenuContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: 5vh;
  margin: 0 20vw;
  padding:  5vh 10vw;
  border: 2px solid #cc82a1;
  background-color: rgba(243, 237, 230, 0.7);
  z-index: 999;
  @media (max-width: 599px) {
    margin: 0 10vw;
    padding: 5vh 10vw;
  }
`;

const Warning = styled.div`
  font-style: italic;
  font-weight: 300;
`;