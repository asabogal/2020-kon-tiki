import styled from 'styled-components';
import Link from 'next/link';

const MenuCard = ({id, itemName, ingredients, price, options, menuType}) => {

  const renderOptions = (options) => {
    return options.map(option => {
      return (
       <OptionsContainer key={option.id}>
       <p>{option.ingredients} --</p>
       <p>{option.price}</p>
      </OptionsContainer>
      );
    })
   };

  return (
    <CardContainer key={id}>
      <InfoContainer>
        <p><strong>{itemName}</strong> </p>
        <p><strong>Ingredients:</strong> {ingredients}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Options:</strong></p>{renderOptions(options)}
      </InfoContainer>
      <Buttons>
        <Link as={`menus/${menuType}/${id}/edit`} href='/admin/menus/[type]/[id]/edit'><button style={{backgroundColor: 'aqua'}}>EDIT</button></Link> 
        <button style={{backgroundColor: 'pink'}}>DELETE</button>
      </Buttons>
    </CardContainer>
  );
};

export default MenuCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  border: 1px solid aqua;
  margin-bottom: 2vh;
  padding: 0px 2vw;
  p {
    background-color: lightgray;
  }
`;

const InfoContainer = styled.div`
  align-self: center;
`;

const Buttons = styled.div`
   align-self: center;
  button {
     padding: 1vh 1vw;
     margin-left: 2vw;
     cursor: pointer;
   }
   a {
     color: inherit;
     text-decoration: none;
   }
`;

const OptionsContainer = styled.div`
  display: flex;
  P {
    padding-left: 2vw;
  }
`;