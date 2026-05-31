function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                margin: "5px 0",
                background: todo.done ? "#f0fff0" : "#fff",
                border: `1px solid ${todo.done ? "#a9dfbf" : "#eee"}`,
                borderRadius: "6px",
                transition: "all 0.2s",
            }}
        >
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                style={{ marginRight: "10px", width: "16px", height: "16px", cursor: "pointer" }}
            />
            <div style={{ flex: 1 }}>
                <span
                    style={{
                        textDecoration: todo.done ? "line-through" : "none",
                        color: todo.done ? "#999" : "#2c3e50",
                        fontSize: "1rem",
                    }}
                >
                    {todo.text}
                </span>
                {/* Thử thách Level 1: ngày tạo */}
                <div style={{ fontSize: "0.72rem", color: "#bbb", marginTop: "2px" }}>
                    {todo.createdAt}
                </div>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "5px 9px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                }}
            >
                🗑
            </button>
        </div>
    );
}

export default TodoItem;