import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props) => {

    let counterValue = useContext(counterContext);
    console.log(counterValue);

    return (
        <div>
            <h2>This is the first Child using Counter Context</h2>
            <h4>Counter value is: {counterValue[0]}</h4>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increament Reducer</button>
        </div>
    )
}


export default Child;