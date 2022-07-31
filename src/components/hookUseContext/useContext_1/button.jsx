// step 3
import React, { useContext } from 'react';
import UserContext from './userContext';

function Button() {
  const { email } = useContext(UserContext);
    return (
    <button type="button">
      {email}
    </button>
  );
};

export default Button;