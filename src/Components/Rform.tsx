import React, { useState } from 'react';

function Rform() {
    const [sent, setSent] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    if (sent) {
        alert("sent successfully!!!");
    }
    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevent default form submission behavior  
        setSent(true);
    };

    return (
        <>
            <div>
                <h3>Form Handling</h3>
                <form onSubmit={handleSubmit}>
                   <label>Name:<input type='text' /></label> <br />
                   <label>Age: <input type='text' /></label> <br />
                    <textarea placeholder='Hiiii' /> <br />

                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div
                onPointerMove={e => {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                }}
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black'
                }}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }} />
            </div>
        </>
    )
}

export default Rform
