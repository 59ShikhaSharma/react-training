import React, { useState } from 'react';


function Rform() {
    const [sent, setSent] = useState(false);
    if (sent) {
        alert("sent successfully!!!");
    }
    const handleSubmit = (event:any) => {
        event.preventDefault(); // Prevent default form submission behavior  
        setSent(true);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name:<input type='text'/><br/>
                Age: <input type='text'/><br/>
                <textarea placeholder='Hiiii' /> <br />
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Rform
