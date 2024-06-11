import { useState } from 'react';
import Profile from './Components/Profile';
import Example from './Components/Example';
import Map from './Components/Map';
import Event from './Components/Event';
import Rform from './Components/Rform';


const Person: { name: string, age: number, image: string } = {
  name: "sjhks",
  age: 80,
  image: "https://i.imgur.com/7vQD0fPs.jpg"
};

type Iabc = {
  name: string,
  isWild: boolean
  
}

function Animal({ name, isWild }: Iabc) {
  if (isWild) {
    return <li>{name} is wild</li>
  } else {
    return <li>{name} is not wild</li>
  }
}

function App() {
  const [count, setCount] = useState(0); // Move useState hook inside the component function


  return (
    <>
    
      <h1>Welcome</h1>
      <Profile />
      <h3>{Person.name} is {Person.age} years old </h3>
      <img src={Person.image} alt='sea' />

      <h3>Using Props</h3>
      <Example name="Shikha" age={20} />

      <h2>Conditional Rendering</h2>
      <ul>
        <Animal isWild={true} name='Tiger' />
        <Animal isWild={true} name='Lion' />
        <Animal isWild={false} name='Cow' />
      </ul>

      <h5>Rendering list</h5>
      <Map />

      <Event />

      <h1>{count}</h1>
      <div>
      <button onClick={() => {
        // setCount(count=> count + 1);
        // setCount(n=>n+1);
        // setCount(n=>n+1);
        setCount(count+3)
        // setCount(42);
        
      }}>+3</button>
     
      <button onClick={() => {
        // setCount(count=>count-1);
        // setCount(n=>n-1);
        // setCount(n=>n-1);
        setCount(count-3);

        // setCount(0);

      }}>-3</button>
      </div>

        <br></br>
     <Rform/>


     
    </>
  );
}

export default App;
