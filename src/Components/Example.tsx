type Ixyz = {
    name:string,
    age:number
}

const Example = ({name,age }:Ixyz) => {
  return (
    <div>
      <h1>Example</h1>
      <h3>Name : {name}</h3>

      
    </div>
  )
}

export default Example
