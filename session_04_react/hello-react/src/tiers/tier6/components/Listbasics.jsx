import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);

    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 },
    ]);

    // Thử thách: tuổi trung bình
    const avgAge = (students.reduce((sum, s) => sum + s.age, 0) / students.length).toFixed(1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <h2>Danh sách sinh viên</h2>
            {/* Thử thách: tuổi trung bình */}
            <p style={{ color: "#888", fontSize: "0.9rem" }}>
                Tuổi trung bình: <strong>{avgAge}</strong>
            </p>

            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        padding: "8px 12px",
                        margin: "5px 0",
                        background: "#f9f9f9",
                        borderRadius: "4px",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                    }}
                >
                    {/* Thử thách: STT */}
                    <span style={{ color: "#aaa", minWidth: "24px" }}>{index + 1}.</span>

                    {/* Thử thách: màu xanh nếu tuổi >= 20 */}
                    <span style={{ color: student.age >= 20 ? "#27ae60" : "#2c3e50", fontWeight: student.age >= 20 ? "bold" : "normal" }}>
                        {student.name}
                    </span>
                    <span style={{ color: "#888" }}>{student.age} tuổi</span>
                    {student.age >= 20 && <span style={{ fontSize: "0.75rem", background: "#d5f5e3", color: "#27ae60", padding: "2px 6px", borderRadius: "4px" }}>≥ 20</span>}
                </div>
            ))}
        </div>
    );
}

export default ListBasics;