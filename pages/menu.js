import styled from 'styled-components';
// components
import MenuCard from '../components/menus/MenuCard';

// data
import {dinnerMenuData} from '../dummyData/DinnerMenu';

const Menu = () => {

  const renderMenuItems = () => {
    return dinnerMenuData.map(item => {
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
    <MenuContainer>
      {renderMenuItems()}
      <Warning>
        * Consuming raw of undercooked meats, poultry, seafood, shellfish, or eggs, may increase your risk of foodborne illness.
        <br></br>
        <br></br>
        Before placing your order, please inform us if you or a person in your party has a food allergy.
     </Warning>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: 5vh;
  margin: 10vh 10vw;
  padding:  5vh 10vw;
  border: 2px solid #cc82a1;;
`;

const Warning = styled.div`
  font-style: italic;
  font-weight: 300;
`;