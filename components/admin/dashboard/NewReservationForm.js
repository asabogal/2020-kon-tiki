import {useReducer} from 'react';
import useSubmitForm from '../../../hooks/useSubmitForm';
import styled from 'styled-components';

const NewReservationForm = () => {

  const [reservation, setReservation] = useReducer((state, newState) => ({...state, ...newState}),
    {
      name: '',
      phone: '',
      date: '',
      guests: '',
      seating: '',
      notes: ''
    }
  );

  const [submitForm] = useSubmitForm(reservation);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setReservation({
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Reservation</h2>
      <Form>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={reservation.value}
          onChange={handleChange}
        />
        <input
          placeholder="phone"
          type="text"
          name="phone"
          value={reservation.value}
          onChange={handleChange}
        />
        <input
          placeholder="date"
          type="datetime-local"
          name="date"
          value={reservation.value}
          onChange={handleChange}
        />
        <input
          placeholder="guests"
          type="text"
          name="guests"
          value={reservation.value}
          onChange={handleChange}
        />
        <SelectField>
          <select
            placeholder="seating"
            name="seating"
            value={reservation.value}
            onChange={handleChange}
          >
            <option value="indoor">Indoor</option>
            <option value="garden">Garden</option>
            <option value="patio">Patio</option>
          </select>
        </SelectField>
        <TextAreaField>
          <textarea
            placeholder='add notes'
            name='notes'
            rows="6"
            value={reservation.value}
            onChange={handleChange}
          />
        </TextAreaField>
        <ButtonField>
          <button type='submit'>
            Add Reservation
          </button>
        </ButtonField>
      </Form>
    </FormContainer>
  );
};

export default NewReservationForm;

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
  input {
    height: 1.5rem;
    font-size: 16px;
  }
  textarea {
    width: 100%;
    font-size: 16px;
  }
  button {
    width: 100%;
    height: 2rem;
    cursor: pointer;
  }
`;

const SelectField = styled.div`
  grid-area: 3 / 1 / 3 / 3; 
`;

const TextAreaField = styled.div`
  grid-area: 4 / 1 / 4 / 3;
`;

const ButtonField = styled.div`
  grid-area: 5 / 1 / 5 / 3;
`;


