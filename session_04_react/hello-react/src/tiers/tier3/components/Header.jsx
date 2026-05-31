function Header() {
    return (
        <header
            style={{
                background: "#2c3e50",
                color: "white",
                padding: "16px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h1 style={{ margin: 0, fontSize: "1.4rem" }}>📱 Cửa hàng điện thoại</h1>
            <nav style={{ display: "flex", gap: "20px" }}>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>Trang chủ</a>
                <a href="/about" style={{ color: "white", textDecoration: "none" }}>Giới thiệu</a>
                <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Liên hệ</a>
            </nav>
        </header>
    );
}

export default Header;