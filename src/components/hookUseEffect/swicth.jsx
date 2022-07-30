import React from 'react'

const Swicth = () => {

    function WeekDays(props) {
        switch (props.value) {
        case 1:
            return <h1>Today is Saturday</h1>
        case 2:
            return <h1>Today is Sunday</h1>
        case 3:
            return<h1>Today is Monday</h1>
        case 4:
            return <h1>Today is Tuesday</h1>
        case 5:
            return <h1>Today is Wednesday</h1>
        case 6:
            return <h1>Today is Thursday</h1>
        case 7:
            return <h1>Today is Friday</h1>
        default:
            return <h1>Invalid Input</h1>
        }
    }
    return (
    <div className="container"> 
    <h3>Using switch statement</h3>
        <WeekDays value={2} />
    </div>
    );
};

export default Swicth;
