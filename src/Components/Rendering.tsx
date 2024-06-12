type Prop = {
    name: string,
    isWild: boolean
  }
  
function Animal({ name, isWild }: Prop) {
    if (isWild) {
      return <li>{name} is wild</li>
    } else {
      return <li>{name} is not wild</li>
    }
  }
  

function Rendering() {
  return (
    <div>
       <h2>Conditional Rendering</h2>
      <ul>
        <Animal isWild={true} name='Tiger' />
        <Animal isWild={true} name='Lion' />
        <Animal isWild={false} name='Cow' />
      </ul>
    </div>
  )
}

export default Rendering
