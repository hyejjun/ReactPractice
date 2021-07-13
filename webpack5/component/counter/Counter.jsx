import React, { useState } from 'react'
import { UP,DOWN,reducer } from './reducer'

/*
const Counter = () => {
    const [number, setNumber] = useState(0)
    const onUp = () => {
        setNumber((prevNumber)=>prevNumber+1)
    }
    const onDown = () => {
        setNumber((prevNumber)=>prevNumber-1)
    }
    return (
        <>
            <h2>{number}</h2>
            <button onClick={onUp}>+1</button>
            <button onClick={onDown}>-1</button>
        </>
    )
}
*/

const Counter = () => {
    const [number, dispatch] = React.useReducer(reducer, 0)
    const onUp = () => {
        dispatch({ type: UP })
    }
    const onDown = () => {
        dispatch({ type: DOWN })
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onUp}>+1</button>
            <button onClick={onDown}>-1</button>
        </div>
    )
}

export default Counter