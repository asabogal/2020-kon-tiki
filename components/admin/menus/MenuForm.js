import { useState } from 'react';
import useInputControl from '../../../hooks/useInputControl';
import useSubmitForm from '../../../hooks/useSubmitForm';
import { InputWrapper, Input, SubmitButton, Error, FormErrors } from '../../utils/Forms';
import styled from 'styled-components';

const MenuForm = ({ formType, menuData, formData }) => {

  const [userInput, handleChange, reset, inputErrors, validateInput] = useInputControl(formData || {});
  const [submitForm] = useSubmitForm(userInput);
  const [formErrors, setFormErrors] = useState('');
  const [options, setOptions] = useState(formData !== undefined ? formData.options : [
    { id: 1, ingredients: '', price: '' },
  ])

  const validateForm = () => {
    const form = {
      erros: '',
      isValid: true
    };

    const { itemName, ingredients, price } = userInput;
    if (!itemName || !ingredients || !price) {
      form.errors = 'item name, ingredients and price must be entered'
      form.isValid = false;
      return form;;
    }

    for (const error in inputErrors) {
      if (!inputErrors[error].isValid) {
        form.errors = ''
        form.isValid = false;
        return form;
      }
    }

    return form;
  };

  const renderOptions = () => {
    return options.map((options, index) => {
      return (
        <OptionsContainer key={index}>
          <OptionsInputs>
            <InputWrapper>
              <Input
                placeholder="Option Ingredients"
                type="textarea"
                name="ingredients"
                value={options.ingredients}
                onChange={(event) => handleOptionsChange(index, event)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                placeholder="Option Price"
                type="text"
                name="price"
                value={options.price}
                onChange={(event) => handleOptionsChange(index, event)}
                isValid
              />
            </InputWrapper>
          </OptionsInputs>
          <OptionsButtons>
            <h4 onClick={addOption}>+ Add Option</h4>
            <h4 onClick={() => removeOption(index)}>- Remove Option</h4>
          </OptionsButtons>
        </OptionsContainer>
      )
    })
  };

  const handleOptionsChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...options];
    values[index][name] = value;
    setOptions(values);
  };

  const addOption = () => {
    const optId = options[options.length - 1].id + 1;
    setOptions(options.concat({ id: optId, ingredients: '', price: '' }));
  };

  const removeOption = (index) => {
    const values = [...options];
    values.splice(index, 1);
    setOptions(values);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = validateForm();
    if (!form.isValid) {
      setFormErrors(form.errors);
      alert('invalid form');
    } else {
      const payload = userInput;
      payload.options = options;
      console.log('payload is', payload)
      submitForm();
      reset();
    }
  };


  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            placeholder="Item Name"
            type="text"
            name="itemName"
            value={userInput.itemName}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.itemName ? true : inputErrors.itemName.isValid}
          />
          {inputErrors.itemName && <Error>{inputErrors.itemName.errors}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Ingredients"
            type="text"
            name="ingredients"
            value={userInput.ingredients}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.ingredients ? true : inputErrors.ingredients.isValid}
          />
          {inputErrors.ingredients && <Error>{inputErrors.ingredients.errors}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Price"
            type="text"
            name="price"
            value={userInput.price}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.price ? true : inputErrors.price.isValid}
          />
          {inputErrors.price && <Error>{inputErrors.price.errors}</Error>}
        </InputWrapper>
        <h3>OPTIONS:</h3>
        {renderOptions()}
        <SubmitButton label={formType === 'new' ? 'Add Item' : 'Edit Item'} />
        <FormErrors>
          <p>{formErrors}</p>
        </FormErrors>
      </Form>
    </FormContainer>
  );
};

export default MenuForm;

const FormContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  padding: 3rem 0;
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 2vh;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 3vh;
  padding-bottom: 1vh;
  border-bottom: 1px solid white;
`;

const OptionsInputs = styled.div`
  flex: 0 ;
  display: grid;
  grid-gap: 2vh;
`;

const OptionsButtons = styled.div`
  margin-left: 5vw;
  display: grid;
  grid-gap: 1vh;
  align-self: center;
  h4 {
    color: black;
    margin-block-start: 0px;
    padding: 10px 15px;
    background-color: lightgray;
    cursor: pointer;
  }
`;