import { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

export default function List() {
    const [artists, setArtists] = useState(initialArtists);
    const [list, setList] = useState(initialArtists);

    function handelClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <h3>Updating array in state</h3>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(artists.filter(a => a.id !== artist.id));
                        }}> Delete</button>


                    </li>
                ))}
            </ul>
            <br></br>
            <ul>
                {list.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
            <button onClick={handelClick}>Reverse</button>
        </>
    );
}