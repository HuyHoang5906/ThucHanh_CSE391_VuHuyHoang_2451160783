// Component con — nhận props bằng destructuring
function Greeting({ name, age }) {
    return (
        <div
            style={{
                border: "1px solid #3498db",
                borderRadius: "8px",
                padding: "12px 20px",
                margin: "8px",
                background: "#eaf4fb",
            }}
        >
            <h2 style={{ margin: "0 0 4px 0" }}>Xin chào {name}!</h2>
            <p style={{ margin: 0, color: "#555" }}>Tuổi: {age}</p>
        </div>
    );
}

export default Greeting;