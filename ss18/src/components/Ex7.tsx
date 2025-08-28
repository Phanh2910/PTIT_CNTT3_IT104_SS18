import { useState, useEffect } from "react";
import "./Ex7.css";

type Todo = { id: string; title: string };
const STORAGEKEY = "Todos";

export default function Ex7() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const rawInput = localStorage.getItem(STORAGEKEY);
        if (rawInput) {
            setTodos(JSON.parse(rawInput));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGEKEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!input.trim()) return;
        const newTodo = { id: String(Date.now()), title: input.trim() };
        setTodos([...todos, newTodo]);
        setInput(" ");
    };
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="ex7">
            <input
                className="todoInput"
                placeholder="Nhap ten cong viec"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") addTodo();
                }}
            />
            <ul className="todoList">
                {todos.map((t) => (
                    <li key={t.id} className="todoItem">
                        <span className="todoTitle">{t.title}</span>
                        <button className="btnDelete" onClick={() => deleteTodo(t.id)}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}