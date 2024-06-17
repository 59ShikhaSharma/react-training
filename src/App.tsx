import Example from './Components/Example';
import Map from './Components/Map';
import Event from './Components/Event';
import Rform from './Components/Rform';
import Updateform from './Components/Updateform';
import List from './Components/List';
import Rendering from './Components/Rendering';
import Stateseries from './Components/Stateseries';
import Reactstate from './Components/Reactstate';
import InputState from './Components/InputState';
import StateStructure from './Components/StateStructure';
import SharingState from './Components/SharingState';
import ResettingState from './Components/ResettingState';
import './Components/ResettingState.css';
import './Components/Reference';
import Reference from './Components/Reference';
import StopWatch from './Components/StopWatch';

import Section from './UseContext/Section';
import Heading from './UseContext/Heading';

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
      <Reactstate />
      <br></br>
      <InputState />
      <br></br>
      <StateStructure />
      <br></br>
      <SharingState />
      <br></br>
      <ResettingState />
      <br></br>
      <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    <br></br>
    <Reference/>
    <br></br>
    <StopWatch/>
    </>
  );
}

export default App;
