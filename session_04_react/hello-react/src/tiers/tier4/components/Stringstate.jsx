import { useState } from "react";

const MAX_LENGTH = 100;

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // Thử thách: ẩn/hiện mật khẩu
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Thử thách: kiểm tra email hợp lệ
    const isEmailValid = email.includes("@");

    return (
        <div style={{ padding: "20px" }}>
            <h2>Nhập thông tin</h2>

            {/* Tên */}
            <div style={{ marginBottom: "10px" }}>
                <label>Tên: </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                    maxLength={MAX_LENGTH}
                />
                {/* Thử thách: đếm ký tự */}
                <span style={{ marginLeft: "8px", color: "#888", fontSize: "0.85rem" }}>
                    {name.length}/{MAX_LENGTH}
                </span>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "10px" }}>
                <label>Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                />
                {/* Thử thách: validate email */}
                {email && (
                    <span
                        style={{
                            marginLeft: "8px",
                            color: isEmailValid ? "#27ae60" : "#e74c3c",
                            fontSize: "0.85rem",
                        }}
                    >
                        {isEmailValid ? "✅ Email hợp lệ" : "❌ Chưa có @"}
                    </span>
                )}
            </div>

            {/* Thử thách: input mật khẩu ẩn/hiện */}
            <div style={{ marginBottom: "10px" }}>
                <label>Mật khẩu: </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                />
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ marginLeft: "8px" }}
                >
                    {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                </button>
            </div>

            {/* Preview realtime */}
            <h3>Thông tin đã nhập:</h3>
            <p>Tên: {name || "(chưa nhập)"}</p>
            <p>Email: {email || "(chưa nhập)"}</p>

            {name && (
                <p style={{ background: "#f0f0f0", padding: "10px", borderRadius: "6px" }}>
                    Xin chào <strong>{name}</strong>!{" "}
                    {email ? `Email của bạn là ${email}` : ""}
                </p>
            )}
        </div>
    );
}

export default StringState;