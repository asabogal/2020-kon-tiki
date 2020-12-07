import styled from 'styled-components';

export const Input = ({placeholder, type, name, value, rows, width, onChange, onBlur, error}) => {
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

const InputField = styled.input`
  border: 1px thin black;
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