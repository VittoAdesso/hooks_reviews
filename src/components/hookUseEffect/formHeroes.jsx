import React, { useState, useEffect } from 'react';

const FormHeroes = () => {
    const [name, setName] = useState('');
    const [heroeName, setHeroeName] = useState('');

    useEffect(() => {
        // return () => {
            <h1>{name}</h1>
        // };
    }, [name]);

    useEffect(() => {
        // return () => {
            <h1>{heroeName}</h1>
        // };
    }, [heroeName]);

    return (
        <div>
            <input onChange={(event) => setName(event.target.value)}/>{name}
            <br></br>
            <input onChange={(e) => setHeroeName(e.target.value)}/>{heroeName}
        </div>
    );
}

export default FormHeroes;
