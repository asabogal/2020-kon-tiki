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

  const PASSWORD_VALIDATORS = [
    {
      type: 'require',
      error: "can't be blank."
    },
    {
      type: 'minLength',
      error: 'must be at least 8 characters long.'
    }
  ];

  const EMAIL_VALIDATORS = [
    {
      type: 'require',
      error: "can't be blank."
    },
    {
      type: 'emailFormat',
      error: 'format is invalid.'
    }
  ];

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const validateInput = (e) => {
    const {name, value, type} = e.target;

    if (type === 'text') {
      for (const validator of TEXT_VALIDATORS) {
        if (validator.type === 'require' && value.trim().length <= 0) {
          setInputErrors({
            ...inputErrors,
            [name]: {
              isValid: false,
              errors: [`${name} ${validator.error}`]
            }
          })
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
    };

    if (type === 'email') {
      console.log(validEmail(value))
      for (const validator of EMAIL_VALIDATORS) {
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
        if (validator.type === 'emailFormat' && !validEmail(value)) {
          setInputErrors({
            ...inputErrors,
            [name]: {
              isValid: false,
              errors: [`${name} ${validator.error}`]
            }
          })
        }   
      }
    };

    if (type === 'password') {
      for (const validator of PASSWORD_VALIDATORS) {
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
        if (validator.type === 'minLength' && value.trim().length <= 7) {
          setInputErrors({
            ...inputErrors,
            [name]: {
              isValid: false,
              errors: [`${name} ${validator.error}`]
            }
          })
        }   
      }
    };

  }

  
  return [userInput, handleChange, reset, inputErrors, validateInput];
};

export default useInputcontrol;