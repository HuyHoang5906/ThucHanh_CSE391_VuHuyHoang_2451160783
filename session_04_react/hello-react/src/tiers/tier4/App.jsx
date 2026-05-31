import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";
import MultipleStates from "./components/MultipleStates";

function App() {
    return (
        <div style={{ fontFamily: "sans-serif", padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>⚡ Tier 4 — useState cơ bản</h1>
            <p style={{ color: "#888" }}>Huy @ Đại học Thủy Lợi</p>

            <hr />

            <section>
                <h2>📝 Bài 4.1 — useState với số</h2>
                <NumberState />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 4.2 — useState với chuỗi</h2>
                <StringState />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 4.3 — useState với boolean</h2>
                <BooleanState />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 4.4 — Kết hợp nhiều useState</h2>
                <MultipleStates />
            </section>
        </div>
    );
}

export default App;