import React, { useState } from 'react'

function Updateform() {
    const [person, setPerson] = useState({
        name: 'Leo',
        summary: {
            title: 'Scientist',
            city: 'Europe',
            image: 'https://i.imgur.com/7vQD0fPs.jpg'
        }
    });

    function handleNameChange(e: any) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }


    function handleTitleChange(e: any) {
        setPerson({
            ...person,
            summary: {
                ...person.summary,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e: any) {
        setPerson({
            ...person,
            summary: {
                ...person.summary,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e: any) {
        setPerson({
            ...person,
            summary: {
                ...person.summary,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <div>
            <h3>Update state</h3>
                <label> Name:<input value={person.name} onChange={handleNameChange} /></label><br />
                <label> Title: <input value={person.summary.title} onChange={handleTitleChange} /></label><br />
                <label> City:<input value={person.summary.city} onChange={handleCityChange} /></label><br />
                <label> Image:<input value={person.summary.image} onChange={handleImageChange} /></label>

                <p>{person.summary.title} {' name '}
                    {person.name} {' from '} {person.summary.city} <br />
                    <img src={person.summary.image} alt='man' /></p>
            </div>


        </>
    )
}

export default Updateform
