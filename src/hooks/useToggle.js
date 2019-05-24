import { useState } from 'react';

const useToggle = (intitalValue = false) => {
  //call useState
  const [state, setState] = useState(intitalValue)
  //return piece of state and a function to toggle
  const toggle = () => {
    setState(!state)
  }
  return [state, toggle];
}

export default useToggle;