type Ixyz = {
    name: string,
    age: number
}

const Example = ({ name, age }: Ixyz) => {
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
        </div>
    )
}

export default Example
