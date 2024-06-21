
import { useRef, useState } from 'react'
import { createContext, useContext } from "react";


const UserContext = createContext('');

function Test() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Jesse Hall");

  const inputElement = useRef<HTMLInputElement>(null);

  function onHandleClick() {
    setCount(count => count + 1);
  }

  // useEffect(() => {
  //     setTimeout(() => {
  //         setCount(count=>count+1);
  //     },1000);
  // })

  const focusInput = () => {

    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (

    <div>
      <h1>Learning Hooks</h1>
      <button onClick={onHandleClick}>Click Me </button>
      <h1>I have rendered {count}</h1>
      <hr />
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
      <hr />
      <h2>Focus the Input </h2>
      <label>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </label>
    </div>
  )
}


function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />

    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 5</h3>
      <h4>{`Hello ${user} again!`}</h4>

    </>
  );
}


export default Test
