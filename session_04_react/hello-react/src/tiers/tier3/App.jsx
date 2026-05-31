import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

// ── Dữ liệu ──────────────────────────────────────────────
const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" },
];

const users = [
    { id: 1, name: "Huy", email: "huy@tlu.edu.vn", avatar: "https://i.pravatar.cc/60?img=1" },
    { id: 2, name: "An", email: "an@tlu.edu.vn", avatar: "https://i.pravatar.cc/60?img=2" },
    { id: 3, name: "Linh", email: "linh@tlu.edu.vn", avatar: "https://i.pravatar.cc/60?img=3" },
];

// ── App ───────────────────────────────────────────────────
function App() {
    return (
        <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
            <Header />

            <main style={{ padding: "24px 32px" }}>

                {/* Bài 3.3 — Greeting props */}
                <section>
                    <h2>👋 Lời chào (Greeting Props)</h2>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <Greeting name="Huy" age={20} />
                        <Greeting name="An" age={21} />
                        <Greeting name="Linh" age={19} />
                    </div>
                </section>

                <hr style={{ margin: "32px 0" }} />

                {/* Bài 3.2 — ProductCard */}
                <section>
                    <h2>📱 Sản phẩm (ProductCard)</h2>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </section>

                <hr style={{ margin: "32px 0" }} />

                {/* Thử thách — UserCard */}
                <section>
                    <h2>👤 Sinh viên Thủy Lợi (UserCard)</h2>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {users.map((user) => (
                            <UserCard
                                key={user.id}
                                name={user.name}
                                email={user.email}
                                avatar={user.avatar}
                            />
                        ))}
                    </div>
                </section>

                <hr style={{ margin: "32px 0" }} />

                {/* Thử thách — PriceTag */}
                <section>
                    <h2>🏷️ Giá khuyến mãi (PriceTag)</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "8px" }}>
                        <PriceTag originalPrice={25000000} salePrice={21500000} />
                        <PriceTag originalPrice={22000000} salePrice={18000000} />
                        <PriceTag originalPrice={15000000} salePrice={12900000} />
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;