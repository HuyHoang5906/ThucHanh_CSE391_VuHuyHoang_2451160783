import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    // Thử thách: bóng đèn
    const [isLightOn, setIsLightOn] = useState(false);
    // Thử thách: accordion
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const themeStyle = {
        backgroundColor: isDarkMode ? "#2c3e50" : "#fff",
        color: isDarkMode ? "#ecf0f1" : "#2c3e50",
        padding: "20px",
        minHeight: "200px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
    };

    return (
        <div style={themeStyle}>
            <h2>Toggle Demo</h2>

            {/* Toggle ẩn/hiện */}
            <div style={{ marginBottom: "16px" }}>
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? "🙈 Ẩn nội dung" : "👁️ Hiện nội dung"}
                </button>
                {isVisible && (
                    <div style={{ marginTop: "8px", padding: "10px", border: "1px solid #ddd", borderRadius: "6px" }}>
                        <p style={{ margin: 0 }}>Đây là nội dung có thể ẩn/hiện!</p>
                    </div>
                )}
            </div>

            <hr />

            {/* Toggle dark mode */}
            <div style={{ marginBottom: "16px" }}>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <hr />

            {/* Toggle like */}
            <div style={{ marginBottom: "16px" }}>
                <button onClick={() => setIsLiked(!isLiked)}>
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
            </div>

            <hr />

            {/* Thử thách: bóng đèn */}
            <div style={{ marginBottom: "16px" }}>
                <button onClick={() => setIsLightOn(!isLightOn)}>
                    {isLightOn ? "💡 Tắt đèn" : "💡 Bật đèn"}
                </button>
                <span style={{ marginLeft: "12px", fontSize: "1.8rem" }}>
                    {isLightOn ? "🌟" : "⚫"}
                </span>
            </div>

            <hr />

            {/* Thử thách: accordion */}
            <div>
                <button
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    style={{ width: "100%", textAlign: "left", padding: "10px" }}
                >
                    {isAccordionOpen ? "▲" : "▼"} Accordion — React là gì?
                </button>
                {isAccordionOpen && (
                    <div
                        style={{
                            padding: "12px",
                            background: isDarkMode ? "#34495e" : "#f9f9f9",
                            borderRadius: "0 0 6px 6px",
                        }}
                    >
                        React là thư viện JavaScript để xây dựng giao diện người dùng,
                        được phát triển bởi Meta. React sử dụng component và virtual DOM
                        để cập nhật giao diện hiệu quả.
                    </div>
                )}
            </div>
        </div>
    );
}

export default BooleanState;