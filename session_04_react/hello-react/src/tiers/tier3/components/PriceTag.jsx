// Thử thách: Component PriceTag nhận originalPrice, salePrice
function PriceTag({ originalPrice, salePrice }) {
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

    return (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            {/* Giá gốc bị gạch */}
            <span style={{ textDecoration: "line-through", color: "#aaa", fontSize: "0.95rem" }}>
                {originalPrice.toLocaleString("vi-VN")}đ
            </span>

            {/* Giá sale */}
            <span style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "1.1rem" }}>
                {salePrice.toLocaleString("vi-VN")}đ
            </span>

            {/* Badge % giảm */}
            <span
                style={{
                    background: "#e74c3c",
                    color: "white",
                    fontSize: "0.75rem",
                    padding: "2px 7px",
                    borderRadius: "4px",
                }}
            >
                -{discount}%
            </span>
        </div>
    );
}

export default PriceTag;