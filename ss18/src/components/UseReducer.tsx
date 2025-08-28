import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState = {
        count: 0
    }
    const countReducer = (state: any, action: any) => {
        console.log("action", action)

        if (action.type == "increase") {
            return { count: state.count + action.payload }
        } else if (action.type == "decrease") {
            return { count: state.count - action.payload }
        }
        return state
    };

    const [state, dispatch] = useReducer(countReducer, initialState)
    console.log(11111, state)
    const increase = () => {
        dispatch({type:"increase", payload: 3})
    }

    const decrease = () => {
        dispatch({type:"decrease", payload: 2})
    }

    return (
        <div>
            <h1>UseReducer</h1>
            <p>Giá trị count: {state.count}</p>
            <button onClick={increase}>Tăng</button>
            <button onClick={decrease}>Giảm</button>
        </div>
    )
}
