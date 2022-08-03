// step 2
import React from 'react';
import UserContext from './userContext';
import Button from './button';
import NavBar from '../../navBar/navBar';

const userMock = {
    name: 'Hulk',
    email: 'avenger@outlook.com',
};

const ShowUser = () => {
    return (
        <UserContext.Provider value={userMock}>
        <NavBar/>
            <Button />
        </UserContext.Provider>
    );
}

export default ShowUser;
