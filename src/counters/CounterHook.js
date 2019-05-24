import React, { useState } from 'react';

const CounterHook = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      {counter}
      <div>
        <button onClick={inc}>Add 1</button>
      </div>
    </div>
  )
}

export default CounterHook;