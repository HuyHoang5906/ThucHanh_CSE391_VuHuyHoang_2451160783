import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    // Thử thách: thêm email
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        if (name.trim() === "") {
            alert("Vui lòng nhập tên!");
            return;
        }
        // Thử thách: validate tuổi > 0 và < 100
        if (age === "" || Number(age) <= 0 || Number(age) >= 100) {
            alert("Tuổi phải từ 1 đến 99!");
            return;
        }
        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setEmail("");
        setAge("");
        setIsStudent(false);
        setSubmitted(false);
    }

    const inputStyle = {
        padding: "6px 10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginLeft: "8px",
    };

    const rowStyle = { marginBottom: "12px" };

    return (
        <div style={{ padding: "20px", maxWidth: "420px" }}>
            <h2>📋 Form đăng ký</h2>

            {!submitted ? (
                <div>
                    {/* Tên */}
                    <div style={rowStyle}>
                        <label>Tên: </label>
                        <input
                            style={inputStyle}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nguyễn Văn Huy"
                        />
                        {/* Thử thách: xin chào realtime */}
                        {name && (
                            <span style={{ marginLeft: "10px", color: "#3498db", fontSize: "0.9rem" }}>
                                Xin chào {name}!
                            </span>
                        )}
                    </div>

                    {/* Thử thách: Email */}
                    <div style={rowStyle}>
                        <label>Email: </label>
                        <input
                            style={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="huy@tlu.edu.vn"
                        />
                    </div>

                    {/* Tuổi */}
                    <div style={rowStyle}>
                        <label>Tuổi: </label>
                        <input
                            style={{ ...inputStyle, width: "70px" }}
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            min={1}
                            max={99}
                        />
                        {age && (Number(age) <= 0 || Number(age) >= 100) && (
                            <span style={{ marginLeft: "8px", color: "#e74c3c", fontSize: "0.85rem" }}>
                                Tuổi phải từ 1–99
                            </span>
                        )}
                    </div>

                    {/* Checkbox sinh viên */}
                    <div style={rowStyle}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                            />
                            {" "}Là sinh viên Đại học Thủy Lợi
                        </label>
                    </div>

                    <button
                        onClick={handleSubmit}
                        style={{
                            background: "#3498db",
                            color: "white",
                            border: "none",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Đăng ký
                    </button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "16px", borderRadius: "6px" }}>
                    <h3 style={{ marginTop: 0 }}>✅ Đăng ký thành công!</h3>
                    <p><strong>Tên:</strong> {name}</p>
                    <p><strong>Email:</strong> {email || "(không có)"}</p>
                    <p><strong>Tuổi:</strong> {age}</p>
                    <p><strong>Sinh viên:</strong> {isStudent ? "Có" : "Không"}</p>
                    <button
                        onClick={handleReset}
                        style={{
                            background: "#6c757d",
                            color: "white",
                            border: "none",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Đăng ký lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;