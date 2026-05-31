// Thử thách: Component UserCard nhận name, email, avatar
function UserCard({ name, email, avatar }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                width: "300px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
        >
            <img
                src={avatar}
                alt={name}
                style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
            <div>
                <h3 style={{ margin: "0 0 4px 0" }}>{name}</h3>
                <p style={{ margin: 0, color: "#888", fontSize: "0.85rem" }}>{email}</p>
            </div>
        </div>
    );
}

export default UserCard;