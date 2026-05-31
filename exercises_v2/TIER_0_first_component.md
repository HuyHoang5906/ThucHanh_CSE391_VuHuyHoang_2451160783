# Tier 0 — Component đầu tiên (Làm quen cú pháp React)

## 🎯 Mục tiêu
- Viết component React đầu tiên
- Hiểu React Component là gì
- Làm quen với JSX
- Biết sự khác nhau giữa HTML và JSX

---

# 📝 Bài 0.1 — Chạy React đầu tiên

## Bước 1: Tạo project

```bash
npm create vite@latest hello-react -- --template react

cd hello-react

npm install

npm run dev
```

---

## Bước 2: Xem file `src/App.jsx`

```jsx
// Đây là một React Component

function App() {
    return (
        <div>
            <h1>Xin chào React!</h1>
            <p>Đây là component đầu tiên của bạn</p>
        </div>
    );
}

export default App;
```

---

## 🧠 Giải thích

### React Component là gì?

React Component là một function trả về giao diện.

Ví dụ:

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

Component giống như một “máy tạo giao diện”.

---

## `.jsx` khác `.js` ở đâu?

File `.jsx` cho phép viết HTML bên trong JavaScript.

Ví dụ:

```jsx
<h1>Hello</h1>
```

JS thuần không hiểu cú pháp này.

React sẽ chuyển JSX thành JavaScript bình thường.

---

## Tại sao phải `export default App`?

Vì file khác cần import component này.

Ví dụ trong `main.jsx`:

```jsx
import App from './App.jsx';
```

Nếu không export:
→ React sẽ không lấy được component App.

---

## Nếu xóa `export default` thì sao?

Sẽ xuất hiện lỗi:

```text
does not provide an export named 'default'
```

Vì file khác không thể import App.

---

# 📝 Bài 0.2 — JSX là HTML "xịn hơn"

## So sánh HTML và JSX

### HTML thuần

```html
<div class="card">
    <img src="avatar.jpg" alt="Avatar">

    <h2>Nguyễn Văn Minh</h2>

    <p>Sinh viên năm 3</p>

    <label for="email">Email:</label>

    <input type="email" id="email">
</div>
```

---

### JSX

```jsx
function StudentCard() {
    return (
        <div className="card">

            <img
                src="avatar.jpg"
                alt="Avatar"
            />

            <h2>Nguyễn Văn Minh</h2>

            <p>Sinh viên năm 3</p>

            <label htmlFor="email">
                Email:
            </label>

            <input
                type="email"
                id="email"
            />
        </div>
    );
}

export default StudentCard;
```

---

# 🔥 Các điểm khác nhau quan trọng

| HTML | JSX |
|---|---|
| class | className |
| for | htmlFor |
| `<img>` | `<img />` |
| `<input>` | `<input />` |

---

# 📝 Bài tập 1 — UserProfile

## Đề bài

Viết lại HTML sau thành JSX:

```html
<div class="profile">
    <h1>Hồ sơ cá nhân</h1>

    <img src="photo.jpg" alt="Ảnh đại diện">

    <table>
        <tr>
            <td>Họ tên:</td>
            <td>Minh</td>
        </tr>

        <tr>
            <td>Email:</td>
            <td>minh@example.com</td>
        </tr>
    </table>
</div>
```

---

## Lời giải

```jsx
function UserProfile() {
    return (
        <div className="profile">

            <h1>Hồ sơ cá nhân</h1>

            <img
                src="photo.jpg"
                alt="Ảnh đại diện"
            />

            <table>
                <tr>
                    <td>Họ tên:</td>
                    <td>Minh</td>
                </tr>

                <tr>
                    <td>Email:</td>
                    <td>minh@example.com</td>
                </tr>
            </table>

        </div>
    );
}

export default UserProfile;
```

---

# 📝 Bài tập 2 — ProductInfo

## Đề bài

Viết lại HTML sau thành JSX:

```html
<div class="product">

    <h2>iPhone 15</h2>

    <p class="price">
        25.000.000đ
    </p>

    <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
    </ul>

    <button>Mua ngay</button>

</div>
```

---

## Lời giải

```jsx
function ProductInfo() {
    return (
        <div className="product">

            <h2>iPhone 15</h2>

            <p className="price">
                25.000.000đ
            </p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>

        </div>
    );
}

export default ProductInfo;
```

---

# 🚨 Các lỗi người mới hay gặp

## ❌ Quên return

Sai:

```jsx
function App() {
    <h1>Hello</h1>
}
```

Đúng:

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

---

## ❌ Quên đóng thẻ

Sai:

```jsx
<img>
```

Đúng:

```jsx
<img />
```

---

## ❌ Return nhiều thẻ cùng lúc

Sai:

```jsx
return (
    <h1>Hello</h1>
    <p>Hi</p>
)
```

Đúng:

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>Hi</p>
    </div>
)
```

---

# ✅ Checklist

- [x] Tạo project React thành công
- [x] Hiểu React Component là gì
- [x] Hiểu JSX là gì
- [x] Biết `class → className`
- [x] Biết `for → htmlFor`
- [x] Biết phải đóng thẻ `<img />`
- [x] Viết được component đầu tiên

---

# 🎯 Tổng kết

- React Component = Function trả về JSX
- JSX gần giống HTML
- JSX chỉ khác HTML ở vài quy tắc nhỏ
- React giúp tạo giao diện bằng JavaScript

---

# 🚀 Chuẩn bị cho Tier 1

Tier tiếp theo sẽ học:

- React render như thế nào
- Re-render là gì
- Luồng hoạt động cơ bản của React
- Vì sao component chạy lại