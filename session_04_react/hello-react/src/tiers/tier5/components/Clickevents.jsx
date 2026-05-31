import { useState } from "react";

// Màu ngẫu nhiên helper
function randomColor() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);

    // Thử thách: đổi màu ngẫu nhiên
    const [bgColor, setBgColor] = useState("#ecf0f1");

    // Thử thách: đếm riêng từng nút
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    // Thử thách: toggle like
    const [isLiked, setIsLiked] = useState(false);

    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString("vi-VN"));
        setClickCount(clickCount + 1);
    }

    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Click Events</h2>

            {/* Code mẫu */}
            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>
            <button onClick={handleClick} style={{ marginRight: "8px" }}>Click me!</button>
            <button onClick={handleReset}>Reset</button>

            <hr />

            {/* Thử thách 1: Đổi màu ngẫu nhiên */}
            <h3>🎨 Đổi màu ngẫu nhiên</h3>
            <div
                style={{
                    background: bgColor,
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "10px",
                }}
            >
                {bgColor}
            </div>
            <button onClick={() => setBgColor(randomColor())}>🎲 Đổi màu</button>

            <hr />

            {/* Thử thách 2: Đếm riêng từng nút */}
            <h3>🔢 Đếm riêng từng nút</h3>
            <p>Nút A: {countA} lần &nbsp;|&nbsp; Nút B: {countB} lần</p>
            <button onClick={() => setCountA(countA + 1)} style={{ marginRight: "8px" }}>
                Nút A
            </button>
            <button onClick={() => setCountB(countB + 1)}>Nút B</button>

            <hr />

            {/* Thử thách 3: Like toggle */}
            <h3>❤️ Like</h3>
            <button onClick={() => setIsLiked(!isLiked)} style={{ fontSize: "1.4rem", background: "none", border: "none", cursor: "pointer" }}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default ClickEvents;