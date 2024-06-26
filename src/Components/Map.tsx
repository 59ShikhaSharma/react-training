const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];


const Map = () => {
    const listItems = people.map(person =>
        <li>{person}</li>
    );
    return (
        <div>
            <h5>Rendering list</h5>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Map

