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
      <h2>New Reservation</h2>
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
        <textarea
          placeholder='add notes'
          name='notes'
          rows="5"
          value={reservation.value}
          onChange={handleChange}
        />
        <button type='submit'>
          Add Reservation
        </button>
      </Form>
    </FormContainer>
  );
};

export default NewReservationForm;

const FormContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  width: 30vw;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  input {
    height: 2rem;
  }
`;



