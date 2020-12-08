import useInputControl from '../../../hooks/useInputControl';
import useSubmitForm from '../../../hooks/useSubmitForm';
import {Input, SubmitButton} from '../../utils/Forms';
import styled from 'styled-components';

const NewuserInputForm = () => {

  const [userInput, handleChange, reset] = useInputControl();
  const [submitForm] = useSubmitForm(userInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Reservation</h2>
      <Form>
        <Input
          placeholder="name"
          type="text"
          name="name"
          value={userInput.value}
          onChange={handleChange}
        />
        <Input
          placeholder="phone"
          type="text"
          name="phone"
          value={userInput.value}
          onChange={handleChange}
        />
        <Input
          placeholder="date"
          type="datetime-local"
          name="date"
          value={userInput.value}
          onChange={handleChange}
        />
        <Input
          placeholder="guests"
          type="text"
          name="guests"
          value={userInput.value}
          onChange={handleChange}
        />
        <SelectField>
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
  grid-area: 3 / 1 / 3 / 3; 
`;

const TextAreaField = styled.div`
  width: 100%;  
  grid-area: 4 / 1 / 4 / 3;
`;

const ButtonField = styled.div`
  grid-area: 5 / 1 / 5 / 3;
`;


