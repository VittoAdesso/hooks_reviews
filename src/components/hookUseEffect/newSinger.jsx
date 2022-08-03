import React, { useState} from 'react';
import NavBar from '../navBar/navBar';
// import React from 'react';

const NewSinger = () => {
    const [singer, setSinger] = useState('');

    // remeber i can use mini componets insde components but woth put exports it, using inside like clidrems
    function HandleSinger(singer) { // this is a components ... remember .. 
        switch (singer.value) {
        case 'Vittorio':
            return <h1>Beter try again, have to practice 🤣</h1>
        case 'Silvia':
            return <h1>¡Is born a STAR!</h1>
        case 'Aquiles':
            return<h1>Don't give up, maybe one day you become a SINGER 🏋️‍♀️</h1>
        case 'try':
            return <h1>Mmmm 🦄</h1>
        case 'JoseMa':
            return <h1>Try Again</h1>
        default:
            return <h1>Invalid Input</h1>
        }
    };
    return (
    <div> 
    <NavBar/>
        <h2>Write a NamE 👨‍💻</h2>
        <input type="text" onChange={(inputText) => setSinger(inputText.target.value)}/>
            <h1 style={{color: "red"}}><HandleSinger value= {singer} /></h1> 
            <h3>Using switch statement CORRECTLY</h3>
            {/* above hace a component child to use in it  */}
    </div>
    );
}

export default NewSinger;
