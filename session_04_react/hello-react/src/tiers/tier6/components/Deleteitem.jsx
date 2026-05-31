import { useState, useEffect } from "react";

const INITIAL_ITEMS = [
    { id: 1, name: "Nguyễn Văn Huy" },
    { id: 2, name: "Trần Thị An" },
    { id: 3, name: "Lê Văn Linh" },
    { id: 4, name: "Phạm Thị Mai" },
];

function DeleteItem() {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [deleteMsg, setDeleteMsg] = useState("");

    // Thử thách: hoàn tác trong 5 giây
    const [undoItem, setUndoItem] = useState(null);
    const [undoCountdown, setUndoCountdown] = useState(0);

    useEffect(() => {
        if (undoCountdown <= 0) { setUndoItem(null); return; }
        const timer = setTimeout(() => setUndoCountdown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [undoCountdown]);

    function handleDelete(item) {
        // Thử thách: confirm trước khi xóa
        if (!window.confirm(`Xóa "${item.name}"?`)) return;

        setItems((prev) => prev.filter((i) => i.id !== item.id));
        setDeleteMsg(`🗑️ Đã xóa "${item.name}"`);
        setUndoItem(item);
        setUndoCountdown(5);
    }

    function handleUndo() {
        if (!undoItem) return;
        setItems((prev) => [...prev, undoItem]);
        setUndoItem(null);
        setUndoCountdown(0);
        setDeleteMsg("");
    }

    function handleDeleteAll() {
        if (window.confirm("Xóa tất cả?")) {
            setItems([]);
            setDeleteMsg("🗑️ Đã xóa tất cả");
            setUndoItem(null);
            setUndoCountdown(0);
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Xóa sinh viên</h2>

            {/* Thông báo + hoàn tác */}
            {deleteMsg && (
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <span style={{ color: "#e74c3c", fontSize: "0.9rem" }}>{deleteMsg}</span>
                    {undoItem && undoCountdown > 0 && (
                        <button
                            onClick={handleUndo}
                            style={{ background: "#f39c12", color: "white", border: "none", padding: "4px 10px", borderRadius: "4px", cursor: "pointer" }}
                        >
                            ↩ Hoàn tác ({undoCountdown}s)
                        </button>
                    )}
                </div>
            )}

            {items.length > 0 && (
                <button
                    onClick={handleDeleteAll}
                    style={{ marginBottom: "12px", background: "#e74c3c", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                    🗑 Xóa tất cả
                </button>
            )}

            {items.length === 0 ? (
                <p style={{ color: "#999" }}>Danh sách trống</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px 12px",
                            margin: "5px 0",
                            background: "#f9f9f9",
                            borderRadius: "4px",
                        }}
                    >
                        <span>{item.name}</span>
                        <button
                            onClick={() => handleDelete(item)}
                            style={{ background: "#e74c3c", color: "white", border: "none", padding: "4px 10px", borderRadius: "4px", cursor: "pointer" }}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default DeleteItem;