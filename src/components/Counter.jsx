import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '2rem' }}>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={reset} style={{ margin: '0 1rem' }}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
