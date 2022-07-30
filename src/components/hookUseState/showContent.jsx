import React, { useState } from 'react';

const ShowContent = ({message}) => {

    const [show, setShow] = useState(false); 

    return (
        <div>
            <h3>UseState</h3>
            <button onClick={() => setShow(true)}>Show message</button>
            <h2>{show && message}</h2>
            <button onClick={() => setShow(false)}>Hide message</button>
        </div>
    );
}

export default ShowContent;
