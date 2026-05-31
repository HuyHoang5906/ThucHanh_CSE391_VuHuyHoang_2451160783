import { useState, useEffect } from "react";

// Danh sách phím cần đoán
const KEY_LIST = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function randomKey() {
    return KEY_LIST[Math.floor(Math.random() * KEY_LIST.length)];
}

function KeyboardEvents() {
    const [lastKey, setLastKey] = useState("");
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Thử thách 1: game đoán phím
    const [targetKey, setTargetKey] = useState(randomKey);
    const [gameResult, setGameResult] = useState(""); // "win" | "lose" | ""
    const [score, setScore] = useState(0);

    // Thử thách 2: di chuyển ô vuông
    const [pos, setPos] = useState({ x: 100, y: 100 });

    // Thử thách 3: Ctrl+D đổi màu nền
    const [bgColor, setBgColor] = useState("#ffffff");

    // Global keydown để bắt Ctrl+D
    useEffect(() => {
        function handleGlobal(e) {
            if (e.ctrlKey && e.key === "d") {
                e.preventDefault();
                const colors = ["#ffeaa7", "#dfe6e9", "#fd79a8", "#55efc4", "#74b9ff"];
                setBgColor(colors[Math.floor(Math.random() * colors.length)]);
            }
        }
        window.addEventListener("keydown", handleGlobal);
        return () => window.removeEventListener("keydown", handleGlobal);
    }, []);

    function handleKeyDown(event) {
        setLastKey(event.key);
        setLog((prev) => [...prev.slice(-4), event.key]);

        // Di chuyển ô vuông bằng mũi tên
        const STEP = 20;
        if (event.key === "ArrowUp")    setPos((p) => ({ ...p, y: Math.max(0, p.y - STEP) }));
        if (event.key === "ArrowDown")  setPos((p) => ({ ...p, y: Math.min(260, p.y + STEP) }));
        if (event.key === "ArrowLeft")  setPos((p) => ({ ...p, x: Math.max(0, p.x - STEP) }));
        if (event.key === "ArrowRight") setPos((p) => ({ ...p, x: Math.min(540, p.x + STEP) }));
    }

    function handleInputKeyDown(event) {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            alert("Bạn nhập: " + inputValue);
            setInputValue("");
        }
        if (event.key === "Escape") setInputValue("");
    }

    // Game đoán phím
    function handleGameKey(event) {
        const pressed = event.key.toLowerCase();
        if (pressed === targetKey) {
            setGameResult("win");
            setScore((s) => s + 1);
        } else {
            setGameResult("lose");
        }
    }

    function nextRound() {
        setTargetKey(randomKey());
        setGameResult("");
    }

    return (
        <div
            style={{ padding: "20px", background: bgColor, minHeight: "100px", borderRadius: "8px" }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <h2>Keyboard Events</h2>
            <p style={{ fontSize: "0.8rem", color: "#888" }}>
                💡 Click vào vùng này rồi nhấn phím để thử. Nhấn <kbd>Ctrl+D</kbd> để đổi màu nền.
            </p>

            <p>Phím cuối cùng: <strong>{lastKey || "Chưa nhấn"}</strong></p>
            <p>Log: {log.join(" → ") || "—"}</p>

            <hr />

            {/* Nhập Enter */}
            <h3>⌨️ Nhập và nhấn Enter</h3>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Nhập rồi nhấn Enter..."
                style={{ padding: "8px", width: "300px" }}
            />
            <p style={{ fontSize: "12px", color: "#666" }}>Nhấn Escape để xóa</p>

            <hr />

            {/* Thử thách 1: Game đoán phím */}
            <h3>🎮 Game đoán phím (điểm: {score})</h3>
            <p>Nhấn phím: <kbd style={{ fontSize: "2rem", padding: "4px 12px", background: "#2c3e50", color: "white", borderRadius: "6px" }}>{targetKey}</kbd></p>
            <input
                onKeyDown={handleGameKey}
                placeholder="Click đây rồi nhấn phím..."
                style={{ padding: "8px", width: "220px" }}
                readOnly
            />
            {gameResult === "win" && (
                <p style={{ color: "#27ae60" }}>
                    ✅ Đúng rồi! <button onClick={nextRound}>Tiếp tục</button>
                </p>
            )}
            {gameResult === "lose" && (
                <p style={{ color: "#e74c3c" }}>
                    ❌ Sai! <button onClick={nextRound}>Thử lại</button>
                </p>
            )}

            <hr />

            {/* Thử thách 2: Di chuyển ô vuông */}
            <h3>🕹️ Di chuyển ô vuông (↑↓←→)</h3>
            <div
                style={{
                    position: "relative",
                    width: "580px",
                    height: "300px",
                    border: "2px dashed #bdc3c7",
                    borderRadius: "6px",
                    background: "#f9f9f9",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: pos.x,
                        top: pos.y,
                        width: "40px",
                        height: "40px",
                        background: "#3498db",
                        borderRadius: "6px",
                        transition: "left 0.1s, top 0.1s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.2rem",
                    }}
                >
                    🟦
                </div>
            </div>
        </div>
    );
}

export default KeyboardEvents;