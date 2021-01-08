import styled from 'styled-components';

const ReservationCard = ({name, phone, date, guests, seating, notes}) => {
  return (
    <Container>
      <InfoText>
        <h2>DateTime:</h2>
        <p>{date}</p>
      </InfoText>
      <InfoText>
        <h2>Guest Name:</h2>
        <p>{name}</p>
      </InfoText>
      <InfoText>
        <h2>Phone Number: </h2>
        <p>{phone}</p>
      </InfoText>
      <InfoText>
        <h2># of Guests: </h2>
        <p>{guests}</p>
      </InfoText>
      <InfoText>
        <h2>Seating Preference: </h2>
        <p>{seating}</p>
      </InfoText>
      <Notes>
        <h2>Notes</h2>
        <p>{notes}</p>
      </Notes>
      <Buttons>

      </Buttons>
    </Container>
  );
};

export default ReservationCard;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 150px), 250px, 150px;
  border: 1px solid red;
`;

const InfoText = styled.div`
  display: flex;
`;

const Notes = styled.div`
  display: flex;
`;

const Buttons = styled.div`
`;