import { useState } from 'react';

const useFormState = (intitalValue) => {
  //call useState
  const [value, setValue] = useState(intitalValue)
  //return piece of state and a function to toggle
  const handleChange = (e) => {
    setValue(e.target.value);

  }
  const reset = () => {
    setValue('');
  }
  return [value, handleChange, reset];
}

export default useFormState;