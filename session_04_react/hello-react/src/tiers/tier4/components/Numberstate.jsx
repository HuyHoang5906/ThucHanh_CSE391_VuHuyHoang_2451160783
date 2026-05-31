import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    const countColor =
        count > 0 ? "#27ae60" : count < 0 ? "#e74c3c" : "#2c3e50";

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{ fontSize: "2rem", color: countColor }}>
                Bộ đếm: {count}
            </h2>

            {/* Thử thách: hiển thị dấu hiệu số */}
            <p style={{ color: countColor, fontWeight: "bold" }}>
                {count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Bằng 0"}
            </p>

            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                {/* Thử thách: nút Tăng 5 */}
                <button onClick={() => setCount(count + 5)}>Tăng (+5)</button>
                <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default NumberState;