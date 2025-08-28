// import React from 'react'
// type Job = {
//     id: number;
//     name: string;
//     completed: boolean;
// }
// export default function ToDo() {
//     const initialState = {
//         jobs: [
//             {
//                 id: 1,
//                 name: "html",
//                 completed: false
//             },
//             {
//                 id: 2,
//                 name: "backend",
//                 completed: true
//             }
//         ]
//     }
//     const todoReducer = (state: any, action: any) => {
//         console.log("action", action);
//         switch (action.type) {
//             case "ADD_TODO":
//                 return {
//                     ...state,
//                     jobs: [...state.jobs, action.payload]
//                 };
//             default:
//                 return state;
//         }
//     }
//     const addTodo = () => {
//         const newJob: Job = {
//             id: state.jobs.length + 1,
//             name: state.taskName,
//             completed: false
//         };
//         dispatch({ type: "ADD_TODO", payload: newJob });
//     }
//     const [state, dispatch] = React.useReducer(todoReducer, initialState)
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         state.taskName = e.target.value;
//         console.log(state.taskName);
//     }
//     return (
//         <div>
//             <input type="text"
//                 placeholder="Add a new task"
//                 onChange={handleChange}
//             />
//             <button onClick={addTodo}>Add</button>
//             <h2>Danh sách công việc</h2>
//             {
//                 <div className="jobs map">
//                     {state.jobs.map((job: any, index: number) => (
//                         <div key={job.id}>
//                             <h3>{job.name}</h3>
//                             <p>{job.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</p>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </div>
//     )
// }
