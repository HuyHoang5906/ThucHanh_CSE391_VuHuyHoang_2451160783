import ListBasics from "./components/ListBasics";
import CreateItem from "./components/Createitem.jsx";
import DeleteItem from "./components/DeleteItem";
import UpdateItem from "./components/UpdateItem";

function App() {
    return (
        <div style={{ fontFamily: "sans-serif", padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>⚡ Tier 6 — Lists & CRUD</h1>
            <p style={{ color: "#888" }}>Huy @ Đại học Thủy Lợi</p>

            <hr />

            <section>
                <h2>📝 Bài 6.1 — Render danh sách</h2>
                <ListBasics />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 6.2 — Thêm phần tử (CREATE)</h2>
                <CreateItem />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 6.3 — Xóa phần tử (DELETE)</h2>
                <DeleteItem />
            </section>

            <hr />

            <section>
                <h2>📝 Bài 6.4 — Sửa phần tử (UPDATE)</h2>
                <UpdateItem />
            </section>
        </div>
    );
}

export default App;