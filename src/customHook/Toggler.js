import React from 'react';
import useToggle from '../hooks/useToggle';

const Toggler = props => {
  //custom hook in hooks folder useToggle
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isLove, toggleIsLove] = useToggle(false);
  const [isFruit, toggleFruit] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? '😁' : '🙁'}</h1>
      <h1 onClick={toggleIsLove}>{isLove ? '💓' : '💔'}</h1>
      <h1 onClick={toggleFruit}>{isFruit ? 'Apples' : 'Bananas'}</h1>
    </div>
  )
}

export default Toggler;


