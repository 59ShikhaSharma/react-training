import React from 'react'
import { useRef } from 'react';

function Reference() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('Hello ' + ref.current + ' times!');
    }

    return (
        <div>
            <button onClick={handleClick}> Click me!</button>
        </div>
    )
}

export default Reference
