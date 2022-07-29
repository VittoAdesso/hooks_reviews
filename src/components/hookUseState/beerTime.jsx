import React, { useState } from 'react';

const BeerTime = ({message}) => {
    const [counter, setCounter] = useState(5);

    function handleDecrement() {
        
        if(counter === 0){
            alert('My friend, you have to reset the counter to continue and take an other BEER 🧪');
        } else {
            setCounter((prevCount) => Math.max(0, prevCount - 1));
        }
    }; 
    
    return (
        <div>
            <button onClick={handleDecrement}> - </button>
            <button onClick={()=> setCounter(5)}>Reset</button>
            {/* into the solution bellow, i cannot control the counter */}
            {/* <button onClick={() => setCounter(counter - 1)}>Click me</button> */} 
            <h3>{counter ? counter : message}</h3>
        </div>
    );
}

export default BeerTime;
