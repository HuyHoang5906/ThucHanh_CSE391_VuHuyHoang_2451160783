import { useState, useRef, useEffect } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
    ]);
    const [newName, setNewName] = useState("");
    // Thử thách: thông báo thêm thành công
    const [successMsg, setSuccessMsg] = useState("");

    // Thử thách: focus lại input sau khi thêm
    const inputRef = useRef(null);

    // Tự ẩn thông báo sau 2 giây
    useEffect(() => {
        if (!successMsg) return;
        const timer = setTimeout(() => setSuccessMsg(""), 2000);
        return () => clearTimeout(timer);
    }, [successMsg]);

    function handleAdd() {
        // Thử thách: validate tên trống
        if (newName.trim() === "") return;

        const newItem = { id: Date.now(), name: newName.trim() };
        setItems([...items, newItem]);
        setSuccessMsg(`✅ Đã thêm "${newName.trim()}" thành công!`);
        setNewName("");

        // Thử thách: focus lại input
        inputRef.current?.focus();
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") handleAdd();
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thêm môn học</h2>

            <div style={{ marginBottom: "10px", display: "flex", gap: "8px" }}>
                <input
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", flex: 1, maxWidth: "280px" }}
                />
                <button
                    onClick={handleAdd}
                    style={{ padding: "8px 16px", background: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                    ➕ Thêm
                </button>
            </div>

            {/* Thử thách: thông báo */}
            {successMsg && (
                <p style={{ color: "#27ae60", fontSize: "0.9rem", margin: "4px 0 12px" }}>
                    {successMsg}
                </p>
            )}

            <h3>Danh sách ({items.length} môn):</h3>
            {items.length === 0 ? (
                <p style={{ color: "#aaa" }}>Chưa có môn học nào.</p>
            ) : (
                items.map((item, index) => (
                    <div
                        key={item.id}
                        style={{ padding: "8px 12px", borderBottom: "1px solid #eee", display: "flex", gap: "10px" }}
                    >
                        <span style={{ color: "#bbb" }}>{index + 1}.</span>
                        <span>{item.name}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default CreateItem;