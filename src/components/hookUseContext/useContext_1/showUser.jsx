// step 2
import React from 'react';
import UserContext from './userContext';
import Button from './button';

const userMock = {
    name: 'Hulk',
    email: 'avenger@outlook.com',
};

const ShowUser = () => {
    return (
        <UserContext.Provider value={userMock}>
            <Button />
        </UserContext.Provider>
    );
}

export default ShowUser;
