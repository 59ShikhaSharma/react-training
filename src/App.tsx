import Example from './Components/Example';
import Map from './Components/Map';
import Event from './Components/Event';
import Rform from './Components/Rform';
import Updateform from './Components/Updateform';
import List from './Components/List';
import Rendering from './Components/Rendering';
import Stateseries from './Components/Stateseries';
import Reactstate from './Components/Reactstate';


const PERSON: { name: string, age: number, image: string } = {
  name: "Shikha",                                                       
  age: 21,
  image: "https://i.imgur.com/7vQD0fPs.jpg"
};


function App() {
  return (
    <>
      <h3>{PERSON.name} is {PERSON.age} years old </h3>
      <img src={PERSON.image} alt='sea' />
      <Stateseries />
      <br></br>
      <Example name="Shikha" age={21} />
      <br></br>
      <Rendering />
      <br></br>
      <Map />
      <br></br>
      <Event />
      <br></br>
      <Rform />
      <br></br>
      <Updateform />
      <br></br>
      <List />
      <br></br>
      <Reactstate/>
    </>
  );
}

export default App;
