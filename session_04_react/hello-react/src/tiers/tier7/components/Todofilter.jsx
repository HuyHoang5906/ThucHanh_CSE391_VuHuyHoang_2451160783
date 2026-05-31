function TodoFilter({ filter, setFilter, counts }) {
    const filters = [
        { key: "all",       label: "Tất cả",     count: counts.all },
        { key: "active",    label: "Chưa xong",  count: counts.active },
        { key: "completed", label: "Hoàn thành", count: counts.completed },
    ];

    return (
        <div style={{ display: "flex", marginBottom: "15px", gap: "6px" }}>
            {filters.map((f) => (
                <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    style={{
                        flex: 1,
                        padding: "8px",
                        background: filter === f.key ? "#3498db" : "#f0f0f0",
                        color: filter === f.key ? "white" : "#555",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: filter === f.key ? "bold" : "normal",
                        transition: "all 0.15s",
                    }}
                >
                    {f.label}
                    {/* Thử thách Level 1: tổng số todos theo filter */}
                    <span
                        style={{
                            marginLeft: "6px",
                            background: filter === f.key ? "rgba(255,255,255,0.3)" : "#ddd",
                            borderRadius: "10px",
                            padding: "1px 7px",
                            fontSize: "0.8rem",
                        }}
                    >
                        {f.count}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;