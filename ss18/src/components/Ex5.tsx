import React, { useReducer } from 'react'

type State = string;
type Action = { type: string, payload: string };

export default function Ex5() {
    const reducer = (state: State, action: Action) => {
        if (action.type === 'show') {
            return action.payload;
        }
        return state;
    }
    const [state, setState] = useReducer(reducer, '');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ type: 'show', payload: e.target.value })
    }
    return (
        <div>
            {state}
            <br />
            <input type="text" placeholder='Nhập Nội Dung' onChange={handleChange} />
        </div>
    )
}
