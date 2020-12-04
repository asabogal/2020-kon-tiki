const useSubmitForm = (userInput) => {

  const submitForm = () => {
    console.log('params are', userInput)
    alert('submitted wit hook');
  }
  return [submitForm];
 }

export default useSubmitForm; 