import {useReducer} from 'react';

const useInputcontrol = () => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), 
    {}  
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  }

  const reset = () => {
   setUserInput("");
  }

  return [userInput, handleChange, reset];
};

export default useInputcontrol;