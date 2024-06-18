import React, { useEffect, useRef, useState } from 'react'

function DomRefs() {
    const [inputValue, setInputValue]=useState('');
    const prevoiusInputValue=useRef('');

    useEffect(()=> {
        prevoiusInputValue.current = inputValue;

    },[inputValue]);

  return (
    <div>
        <label>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </label>
         <h2>Current Input value : {inputValue}</h2>
         <h2>Previous Input value : {prevoiusInputValue.current}</h2>
    </div>
  )
}

export default DomRefs
