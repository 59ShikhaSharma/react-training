import React, { useState } from 'react';

interface FormInputs {
    username: string;
    age: number | '';
}

function Form() {

    const [inputs, setInputs] = useState<FormInputs>({
        username: '',
        age: '',
    });



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: name === 'age' ? parseInt(value, 10) || '' : value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Username: ${inputs.username}\nAge: ${inputs.age}`);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />
            </label>
            <br />
            
            <input type="submit" value="Submit" />
        </form>
        <p>Username: {inputs.username} <br></br>Age: {inputs.age}</p>
        </>
    );
}

export default Form;
