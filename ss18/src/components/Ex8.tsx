import { useState, useEffect } from "react";
import "./Ex7.css";

type Todo = { id: string; title: string };
const STORAGEKEY = "ex7Todos";

export default function Ex7() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem(STORAGEKEY);
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGEKEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        const title = input.trim();
        if (title) {
            const newTodo = { id: String(Date.now()), title };
            setTodos([...todos, newTodo]);
            setInput("");
        }
    };

    const deleteTodo = (id: string) => {
        if (window.confirm("Ban co muon xoa cong viec khong")) {
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };

    return (
        <div className="ex7">
            <input
                className="todo-input"
                placeholder="Nhap ten cong viẹc"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") addTodo();
                }}
            />
            <ul className="todo-list">
                {todos.map((t) => (
                    <li key={t.id} className="todo-item">
                        <span className="todo-title">{t.title}</span>
                        <button className="btn-delete" onClick={() => deleteTodo(t.id)}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}