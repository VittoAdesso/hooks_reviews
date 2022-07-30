import React, { useState, useEffect } from 'react';

const JoseMaSing = () => {
    const [singer, setSinger] = useState('');

    // useEffect(() => {
    //     // return () => {
    //         <h1>{singer}</h1>
    //     // };
    // }, [singer]);

    function handleSinger() {
        // e.preventDefault();
        switch (singer) {
            case 'Silvia':
                setSinger('¡Is born a STAR!');
                break;
            case 'Aquiles':
                setSinger("Don't give up, maybe one day you become a SINGER");
                break;
            case 'try':
                setSinger("Mmmm");
                break;
            case 'Vittorio':
                setSinger("Beter try again, have to practice 🤣");
                break;
            case 'JoseMa':
                setSinger("BoooOoOo");
                break;
            case '':
                setSinger("Try Again");
                break;
            default:
                // TODO: check how i manage this end
                return('Invalid Input')
        }
    }; 

    return (
        <div>
            <input type="text" onChange={(inputText) => setSinger(inputText.target.value)}/>
            <button onClick={handleSinger}> Is a Singer ?  </button>
            <h3>{singer}</h3>
        </div>
    );
}

export default JoseMaSing;




