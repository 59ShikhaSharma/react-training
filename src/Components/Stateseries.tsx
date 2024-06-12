import React,{useState} from 'react'

function Stateseries() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => {
          // setCount(count=> count + 1);
          // setCount(n=>n+1);
          // setCount(n=>n+1);
          setCount(count + 3)
          // setCount(42);

        }}>+3</button>

        <button onClick={() => {
          // setCount(count=>count-1);
          // setCount(n=>n-1);
          // setCount(n=>n-1);
          setCount(count - 3);
          // setCount(0);

        }}>-3</button>
      </div>
    </div>
  )
}

export default Stateseries
