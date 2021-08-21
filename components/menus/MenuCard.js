
import styled from 'styled-components';

const MenuCard = ({ itemName, ingredients, price, options }) => {

  const renderOptions = (options) => {
    return options.map(option => {
      return (
        <OptionsContainer key={option.id}>
          {option.name && <h3><strong><u>{option.name}</u></strong></h3>}
          <h3>{option.ingredients}</h3>
          <h4>{option.price}</h4>
        </OptionsContainer>
      );
    })
  };

  return (
    <MenuCardContainer>
      <h2>{itemName}</h2>
      {
        ingredients.length === 0 ? renderOptions(options) :
          <h3>{ingredients}</h3>
      }
      {ingredients.length !== 0 &&
        <>
          <h4>{price}</h4>
          {renderOptions(options)}
        </>
      }
    </MenuCardContainer>
  );
};

export default MenuCard;

const MenuCardContainer = styled.div`
  text-align: center;
  h2 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: italic;
    font-weight: 500;
  }
  h3 {
    margin-block-start: 4px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 300;
  }
  h4 {
    margin-block-start: 3px;
    margin-block-end: 15px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const OptionsContainer = styled.div`
`;