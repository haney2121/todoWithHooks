import React, { useState, useEffect } from 'react';

const Clicker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked count ${count} times!`;
  }, [count])

  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  )
}

export default Clicker;