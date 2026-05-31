import { useState, useEffect } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Nguyễn Văn Huy", age: 20 },
        { id: 2, name: "Trần Thị An", age: 21 },
        { id: 3, name: "Lê Văn Linh", age: 19 },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");

    // Thử thách: thông báo "Đã lưu!"
    const [savedMsg, setSavedMsg] = useState("");
    useEffect(() => {
        if (!savedMsg) return;
        const t = setTimeout(() => setSavedMsg(""), 2000);
        return () => clearTimeout(t);
    }, [savedMsg]);

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }

    function saveEdit() {
        // Thử thách: không lưu nếu tên trống
        if (editName.trim() === "" || editAge === "") return;

        setItems(items.map((item) =>
            item.id === editingId
                ? { ...item, name: editName.trim(), age: parseInt(editAge) }
                : item
        ));
        setSavedMsg(`✅ Đã lưu "${editName.trim()}"`);
        setEditingId(null);
    }

    function cancelEdit() {
        setEditingId(null);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }

    // Thử thách: validate tên trống inline
    const nameError = editName.trim() === "" ? "Tên không được trống" : "";

    return (
        <div style={{ padding: "20px" }}>
            <h2>Sửa thông tin sinh viên</h2>

            {savedMsg && (
                <p style={{ color: "#27ae60", fontSize: "0.9rem", margin: "0 0 10px" }}>{savedMsg}</p>
            )}

            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        padding: "10px 12px",
                        margin: "6px 0",
                        background: editingId === item.id ? "#eaf4fb" : "#f9f9f9",
                        borderRadius: "6px",
                        border: editingId === item.id ? "2px solid #3498db" : "2px solid transparent",
                        transition: "all 0.2s",
                    }}
                >
                    {editingId === item.id ? (
                        // Chế độ sửa
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                    style={{
                                        padding: "5px 8px",
                                        borderRadius: "4px",
                                        border: nameError ? "1px solid #e74c3c" : "1px solid #3498db",
                                        outline: "none",
                                    }}
                                    placeholder="Tên sinh viên"
                                />
                                {/* Thử thách: lỗi realtime */}
                                {nameError && <span style={{ color: "#e74c3c", fontSize: "0.75rem" }}>{nameError}</span>}
                            </div>

                            <input
                                type="number"
                                value={editAge}
                                onChange={(e) => setEditAge(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{ padding: "5px 8px", width: "65px", borderRadius: "4px", border: "1px solid #3498db", outline: "none" }}
                                placeholder="Tuổi"
                            />

                            <button
                                onClick={saveEdit}
                                disabled={!!nameError}
                                style={{
                                    background: nameError ? "#bdc3c7" : "#27ae60",
                                    color: "white",
                                    border: "none",
                                    padding: "5px 10px",
                                    borderRadius: "4px",
                                    cursor: nameError ? "not-allowed" : "pointer",
                                }}
                            >
                                ✓ Lưu
                            </button>
                            <button
                                onClick={cancelEdit}
                                style={{ background: "#95a5a6", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
                            >
                                ✕ Hủy
                            </button>
                            <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Enter để lưu, Esc để hủy</span>
                        </div>
                    ) : (
                        // Chế độ xem
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>
                                {item.name}{" "}
                                <span style={{ color: "#888", fontSize: "0.9rem" }}>— {item.age} tuổi</span>
                            </span>
                            <button
                                onClick={() => startEdit(item)}
                                style={{ background: "#3498db", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
                            >
                                ✏️ Sửa
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;