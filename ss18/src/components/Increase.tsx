import React from 'react'

export default function Increase() {
    const initialState = {
        count: 0
    }
    const countReducer = (state: any, action: any) => {
        console.log("action", action)
        if (action.type === "up") {
            return { count: state.count + action.payload }
        }
        return state
    };
    const [state, dispatch] = React.useReducer(countReducer, initialState)
    console.log(0,state)
    const up = () => {
        dispatch({type:"up", payload: 1})
    }
  return (

    <div>
      <p>{state.count}</p>
      <button onClick={up}>Increase</button>
    </div>
  )
}
