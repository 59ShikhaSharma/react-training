import { useState } from 'react';

export default function StateStructure() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e:any) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e:any) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check doctor availability</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br></br>
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your appointment will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
