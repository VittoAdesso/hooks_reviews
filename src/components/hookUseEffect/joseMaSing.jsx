import React, { useState, useEffect } from 'react';

const JoseMaSing = () => {
    const [singer, setSinger] = useState('');

    useEffect(() => {
        // with it, you ca see, how act the useEffect
        console.log(singer);
    }, [singer]);

    function handleSinger() {
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




