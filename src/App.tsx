import Profile from './Components/Profile';
import Example from './Components/Example';

const Person: { name: string, age: number, image:string} = {
  name: "sjhks",
  age: 80,
  image :"https://i.imgur.com/7vQD0fPs.jpg"
};





function App() {
  return (
    <>
    <h1>Welcome</h1>
    <Profile />
    <h3>{Person.name} is {Person.age} years old </h3>
    <img src={Person.image} alt='sea'/>


    <Example name="Shikha" age={20}/>
    </>
  );
}

export default App;
