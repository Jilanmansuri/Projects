import { useState } from "react";

function Counter({initialValue}) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="card">
      <h2>Count: {count}</h2>

      <div className="countrock">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}


export default Counter;
