import {useReducer, useState} from 'react';

const useInputcontrol = () => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), 
    {}  
  );

  const [inputErrors, setInputErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  
    if (!inputErrors.name) {
      setInputErrors({
        ...inputErrors,
        [name]: {
          isValid: true,
          errors: ''
        }
      })
    }
  };

  const reset = () => {
    setUserInput("");
   };

// validations
  const TEXT_VALIDATORS = [
    {
      type: 'require',
      error: "can't be blank."
    },
    {
      type: 'minLength',
      error: 'must be at least 3 characters long.'
    }
  ];

  const validateTextInput = (e) => {
    const {name, value} = e.target;

    for (const validator of TEXT_VALIDATORS) {
      if (validator.type === 'require' && value.trim().length <= 0) {
        setInputErrors({
          ...inputErrors,
          [name]: {
            isValid: false,
            errors: [`${name} ${validator.error}`]
          }
        })
        return;
      }
      if (validator.type === 'minLength' && value.trim().length <= 3) {
        setInputErrors({
          ...inputErrors,
          [name]: {
            isValid: false,
            errors: [`${name} ${validator.error}`]
          }
        })
      }   
    }
  }

  
  return [userInput, handleChange, reset, inputErrors, validateTextInput];
};

export default useInputcontrol;