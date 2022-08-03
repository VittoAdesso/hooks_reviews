import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
        
             <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/state">
                <button>useState</button>
            </Link>
            <Link to="/state2">
                <button>useState2</button>
            </Link>
            <Link to="/effect">
                <button>useEffect</button>
            </Link>
            <Link to="/singers">
                <button>Singers</button>
            </Link> 
            <Link to="/swicth1">
                <button>swicth1</button>
            </Link>
            <Link to="/swicth2">
                <button>swicth2</button>
            </Link> 
            <Link to="/showUser">
                <button>ShowUser</button>
            </Link> 
            <Link to="/showName">
                <button>ShowName</button>
            </Link>
        </div>
    );
}

export default NavBar;
