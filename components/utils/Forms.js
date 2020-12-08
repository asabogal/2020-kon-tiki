import styled from 'styled-components';

export const Input = ({placeholder, type, name, value, rows, width, onChange, onBlur, isValid, error}) => {
  return (
    <>
      {
        type === 'textarea' ? (
          <TextArea
            placeholder={placeholder}
            name={name}
            rows={rows || "3"}
            width={width}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isValid={isValid}
            error={error}
          />
        )
        :
        (
          <InputField
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isValid={isValid}
            error={error}
          />
        )
      }
    </>
  )
};

export const SubmitButton = ({label}) => {
  return (
    <Button type='sbumit'>
      {label}
    </Button>
  );
}

export const Error = styled.p`
  color: aqua;
  font-size:  0.8rem;
  margin-block-start: 5px;
  margin-block-end: 0px;
  @media (max-width: 575.98px) { 
    font-size: 0.6rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  position: relative;
  border: ${((props) => !props.isValid ? '2px solid red' : '1px solid black')};
  height: 20px;
  font-size: 1rem;
  padding: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: ${(props => props.width || 'none')};
`;

const Button = styled.button`
  width: 100%;
  height: 5vh;
  background-color: black;
  color: white;
  cursor: pointer;
`;
