import ClickEvents from "./components/ClickEvents";
import InputEvents from "./components/InputEvents";
import KeyboardEvents from "./components/KeyboardEvents";
import FormEvents from "./components/FormEvents";

function App() {
    return (
        <div style={{ fontFamily: "sans-serif", padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>⚡ Tier 5 — Events cơ bản</h1>
            <p style={{ color: "#888" }}>Huy @ Đại học Thủy Lợi</p>

            <hr />

            <section>
                <h2>📝 Bài 5.1 — Click Events</h2>
                <ClickEvents />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 5.2 — Input Events</h2>
                <InputEvents />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 5.3 — Keyboard Events</h2>
                <KeyboardEvents />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 5.4 — Form Events</h2>
                <FormEvents />
            </section>
        </div>
    );
}

export default App;