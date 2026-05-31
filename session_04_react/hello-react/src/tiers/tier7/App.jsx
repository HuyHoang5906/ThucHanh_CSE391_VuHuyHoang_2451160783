import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    // ===== CREATE =====
    function addTodo() {
        if (inputValue.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            done: false,
            // Thử thách Level 1: ngày tạo
            createdAt: new Date().toLocaleString("vi-VN"),
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") addTodo();
    }

    // ===== TOGGLE =====
    function toggleTodo(id) {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    }

    // ===== DELETE =====
    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // ===== FILTER =====
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active")    return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });

    // ===== COUNTS =====
    const activeCount    = todos.filter((t) => !t.done).length;
    const completedCount = todos.filter((t) =>  t.done).length;
    const counts = { all: todos.length, active: activeCount, completed: completedCount };

    // Thử thách Level 1: placeholder theo filter
    const placeholderMap = {
        all:       "Nhập công việc mới...",
        active:    "Thêm việc chưa xong...",
        completed: "Thêm việc đã xong...",
    };

    return (
        <div
            style={{
                maxWidth: "520px",
                margin: "40px auto",
                padding: "24px",
                fontFamily: "Arial, sans-serif",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                background: "#fff",
            }}
        >
            {/* Header */}
            <h1 style={{ textAlign: "center", marginTop: 0, color: "#2c3e50" }}>
                📋 Todo List
            </h1>
            <p style={{ textAlign: "center", color: "#aaa", marginTop: "-12px", fontSize: "0.85rem" }}>
                Huy @ Đại học Thủy Lợi
            </p>

            {/* Input */}
            <div style={{ display: "flex", marginBottom: "16px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholderMap[filter]}
                    style={{
                        flex: 1,
                        padding: "10px 14px",
                        fontSize: "15px",
                        border: "2px solid #ddd",
                        borderRadius: "6px 0 0 6px",
                        outline: "none",
                    }}
                />
                <button
                    onClick={addTodo}
                    style={{
                        padding: "10px 20px",
                        fontSize: "15px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "0 6px 6px 0",
                        cursor: "pointer",
                    }}
                >
                    Thêm
                </button>
            </div>

            {/* Filter */}
            <TodoFilter filter={filter} setFilter={setFilter} counts={counts} />

            {/* Todo list */}
            {filteredTodos.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px", color: "#bbb" }}>
                    {todos.length === 0
                        ? "📝 Chưa có công việc nào"
                        : "Không có công việc phù hợp"}
                </div>
            ) : (
                filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))
            )}

            {/* Footer */}
            {todos.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "16px",
                        padding: "10px 12px",
                        background: "#f8f9fa",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                        color: "#555",
                    }}
                >
                    <span>🔵 {activeCount} việc chưa xong</span>
                    {completedCount > 0 && (
                        <span>✅ {completedCount} việc đã xong</span>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;