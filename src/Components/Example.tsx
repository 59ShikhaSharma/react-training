type Prop = {
    name: string,
    age: number
}

const Example = ({ name, age }: Prop) => {
    return (
        <div>
            <h3>Using Props</h3>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
        </div>
    )
}

export default Example
