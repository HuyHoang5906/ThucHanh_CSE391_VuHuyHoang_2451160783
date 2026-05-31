import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);

    // Thử thách: email validation
    const [email, setEmail] = useState("");
    const isEmailValid = email.includes("@");

    // Thử thách: đếm số từ
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
        setCharCount(newValue.length);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Input Events</h2>

            {/* Code mẫu */}
            <input
                value={text}
                onChange={handleChange}
                placeholder="Nhập gì đó..."
                maxLength={100}
                style={{ padding: "8px", width: "300px" }}
            />
            <p style={{ color: charCount > 80 ? "#e74c3c" : "#555" }}>
                Ký tự: {charCount}/100
                {charCount > 80 && " ⚠️ Sắp hết ký tự!"}
            </p>

            {/* Thử thách: đếm số từ */}
            <p>Số từ: {wordCount}</p>

            {/* Thử thách: preview realtime */}
            {text && (
                <div style={{ background: "#f0f0f0", padding: "10px", borderRadius: "6px", marginBottom: "16px" }}>
                    📝 Preview: <em>{text}</em>
                </div>
            )}

            <hr />

            {/* Thử thách: email validation */}
            <h3>📧 Nhập Email</h3>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                onFocus={() => console.log("Input focused")}
                onBlur={() => console.log("Input blurred")}
                style={{
                    padding: "8px",
                    width: "300px",
                    borderColor: email ? (isEmailValid ? "#27ae60" : "#e74c3c") : "#ccc",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "4px",
                    outline: "none",
                }}
            />
            {email && (
                <span style={{ marginLeft: "10px", color: isEmailValid ? "#27ae60" : "#e74c3c" }}>
                    {isEmailValid ? "✅ Email hợp lệ" : "❌ Chưa có @"}
                </span>
            )}
        </div>
    );
}

export default InputEvents;