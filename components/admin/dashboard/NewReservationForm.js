import {useState, useEffect} from 'react';
import useInputControl from '../../../hooks/useInputControl';
import useSubmitForm from '../../../hooks/useSubmitForm';
import {InputWrapper, Input, SubmitButton, Error, FormErrors} from '../../utils/Forms';
import styled from 'styled-components';

const NewuserInputForm = () => {

  const [userInput, handleChange, reset, inputErrors, validateInput] = useInputControl();
  const [submitForm] = useSubmitForm(userInput);
  const [formErrors, setFormErrors] = useState('');

  const validateForm = () => {
    const form = {
      erros: '',
      isValid: true
    };

    const {guest, phone, date, guests} = userInput;
    if (!guest || !phone || !date || !guests) {
      form.errors = 'guest name, phone number, date, and number of guests must be entered'
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
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = validateForm();
    if (!form.isValid) {
      setFormErrors(form.errors);
      alert ('invalid form')
    } else {
      submitForm();
      reset();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Reservation</h2>
      <Form>
        <InputWrapper>
          <Input
            placeholder="guest name"
            type="text"
            name="guest"
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.guest ? true : inputErrors.guest.isValid}
        />
          {inputErrors.guest && <Error>{inputErrors.guest.errors}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="phone number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.phone ? true : inputErrors.phone.isValid}
        />
        {inputErrors.phone && <Error>{inputErrors.phone.errors}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="date"
            type="datetime-local"
            name="date"
            value={userInput.value}
            onChange={handleChange}
            isValid
        />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="number of guests"
            type="number"
            min="1"
            name="guests"
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            isValid={!inputErrors.guests ? true : inputErrors.guests.isValid}
        />
          {inputErrors.guests && <Error>{inputErrors.guests.errors}</Error>}
        </InputWrapper>
        <SelectField>
          <label>
            Seating Peference  :
          <select
            placeholder="seating"
            name="seating"
            value={userInput.value}
            onChange={handleChange}
          >
            <option value="indoor">Indoor</option>
            <option value="garden">Garden</option>
            <option value="patio">Patio</option>
          </select>
        </label>
        </SelectField>
        <TextAreaField>
          <Input
            placeholder='add notes'
            type='textarea'
            name='notes'
            rows="6"
            width='95%'
            value={userInput.value}
            onChange={handleChange}
          />
        </TextAreaField>
        <ButtonField>
          <SubmitButton label='Add Reservation'/>
        </ButtonField>
        <FormErrorsSection>
          <FormErrors>
            <p>{formErrors}</p> 
          </FormErrors>
        </FormErrorsSection>
      </Form>
    </FormContainer>
  );
};

export default NewuserInputForm;

const FormContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  padding-top: 3rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SelectField = styled.div`
  select {
    margin-left: 20%;
    padding: 0 20px;
  }
  grid-area: 3 / 1 / 3 / 3; 
`;

const TextAreaField = styled.div`
  width: 100%;  
  grid-area: 4 / 1 / 4 / 3;
`;

const ButtonField = styled.div`
  grid-area: 5 / 1 / 5 / 3;
`;

const FormErrorsSection = styled.div`
  grid-area: 6 / 1 / 6 / 3;
`


