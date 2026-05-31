import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    // Thử thách: lỗi realtime
    const [errors, setErrors] = useState({});

    function validate(name, value) {
        const newErrors = { ...errors };

        if (name === "email") {
            if (value && !value.includes("@")) {
                newErrors.email = "Email phải có ký tự @";
            } else {
                delete newErrors.email;
            }
        }

        if (name === "confirmPassword") {
            if (value && value !== formData.password) {
                newErrors.confirmPassword = "Mật khẩu không khớp";
            } else {
                delete newErrors.confirmPassword;
            }
        }

        if (name === "password" && formData.confirmPassword) {
            if (formData.confirmPassword !== value) {
                newErrors.confirmPassword = "Mật khẩu không khớp";
            } else {
                delete newErrors.confirmPassword;
            }
        }

        setErrors(newErrors);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validate(name, value);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Ngăn reload trang

        if (!formData.name || !formData.email) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if (!formData.email.includes("@")) {
            alert("Email không hợp lệ!");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setFormData({ name: "", email: "", password: "", confirmPassword: "", message: "" });
        setErrors({});
        setSubmitted(false);
    }

    const inputStyle = {
        padding: "7px 10px",
        width: "280px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginLeft: "8px",
    };

    const rowStyle = { marginBottom: "12px" };

    const errorStyle = {
        color: "#e74c3c",
        fontSize: "0.8rem",
        marginLeft: "8px",
    };

    return (
        <div style={{ padding: "20px", maxWidth: "480px" }}>
            <h2>📬 Form liên hệ</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {/* Tên */}
                    <div style={rowStyle}>
                        <label>Tên: </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Nguyễn Văn Huy"
                            required
                        />
                    </div>

                    {/* Email + validate realtime */}
                    <div style={rowStyle}>
                        <label>Email: </label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                ...inputStyle,
                                borderColor: errors.email ? "#e74c3c" : "#ccc",
                            }}
                            placeholder="huy@tlu.edu.vn"
                            required
                        />
                        {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>

                    {/* Mật khẩu */}
                    <div style={rowStyle}>
                        <label>Mật khẩu: </label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Xác nhận mật khẩu + validate realtime */}
                    <div style={rowStyle}>
                        <label>Xác nhận: </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={{
                                ...inputStyle,
                                borderColor: errors.confirmPassword ? "#e74c3c" : "#ccc",
                            }}
                            placeholder="••••••••"
                        />
                        {errors.confirmPassword && (
                            <span style={errorStyle}>{errors.confirmPassword}</span>
                        )}
                        {formData.confirmPassword &&
                            !errors.confirmPassword && (
                                <span style={{ ...errorStyle, color: "#27ae60" }}>✅ Khớp</span>
                            )}
                    </div>

                    {/* Tin nhắn */}
                    <div style={rowStyle}>
                        <label>Tin nhắn: </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ ...inputStyle, width: "280px", resize: "vertical" }}
                            placeholder="Nhập tin nhắn..."
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            background: "#3498db",
                            color: "white",
                            border: "none",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginRight: "8px",
                        }}
                    >
                        Gửi
                    </button>
                    <button type="button" onClick={handleReset}>
                        Xóa
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "16px", borderRadius: "6px" }}>
                    <h3 style={{ marginTop: 0 }}>✅ Đã gửi thành công!</h3>
                    <p><strong>Tên:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Tin nhắn:</strong> {formData.message || "(không có)"}</p>
                    <button onClick={handleReset}>Gửi lại</button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;