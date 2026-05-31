# Tier 1 — Hiểu luồng hoạt động của React

## 🎯 Mục tiêu
- Hiểu React render như thế nào
- Hiểu re-render là gì
- Phân biệt biến bình thường và useState
- Hiểu luồng hoạt động cơ bản của React

---

# 🧠 Mental Model

```text
React = Function tạo giao diện

State thay đổi
→ Component chạy lại
→ JSX mới được tạo
→ UI cập nhật
```

---

# 🎯 Hôm nay bạn sẽ học

```text
Lần 1:
Component được tạo → Hiển thị lên màn hình (Mount)

Lần 2:
Dữ liệu thay đổi → UI cập nhật (Re-render)

Lần 3:
Component bị xóa → Biến mất khỏi màn hình (Unmount)
```

---

# 📝 Bài 1.1 — Component render lần đầu

## Giải thích

Khi React thấy:

```jsx
<App />
```

React sẽ:

1. Gọi function App()
2. Lấy JSX trong return
3. Hiển thị lên trình duyệt

---

# 📄 File: LifecycleDemo.jsx

```jsx
function LifecycleDemo() {

    console.log("1️⃣ Component được gọi!");

    return (
        <div
            style={{
                padding: "20px",
                border: "2px solid #3498db"
            }}
        >
            <h2>Lifecycle Demo</h2>

            <p>Mở Console (F12) để xem log</p>

            <p>
                Component này chỉ render MỘT lần
            </p>
        </div>
    );
}

export default LifecycleDemo;
```

---

# 🧪 Thử nghiệm

## Bước 1
Mở Console:
- Nhấn `F12`
- Chọn tab `Console`

---

## Bước 2
Refresh trang.

---

## Bước 3
Quan sát log:

```text
1️⃣ Component được gọi!
```

---

# ❓ Câu hỏi

## Tại sao component chỉ render 1 lần?

Vì chưa có gì thay đổi.

React chỉ render lại khi:
- state thay đổi
- props thay đổi
- component cha render lại

---

## Khi nào component render lại?

Khi:
```jsx
setState(...)
```

được gọi.

---

# 📝 Bài 1.2 — Biến bình thường vs useState

# ❌ Vấn đề: Biến thường KHÔNG cập nhật UI

## 📄 File: BadCounter.jsx

```jsx
function BadCounter() {

    let count = 0;

    function handleClick() {

        count = count + 1;

        console.log("Count:", count);

    }

    return (
        <div style={{ padding: "20px" }}>

            <h2>
                ❌ Counter "tệ"
            </h2>

            <p>
                Bộ đếm: {count}
            </p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "red" }}>
                ⚠️ Console tăng nhưng UI không đổi
            </p>

        </div>
    );
}

export default BadCounter;
```

---

# 🧠 Giải thích

Biến:

```jsx
let count = 0;
```

chỉ là biến JavaScript bình thường.

React KHÔNG theo dõi biến này.

Nên:
- console thay đổi
- nhưng React không render lại UI

---

# ✅ Giải pháp: useState

## 📄 File: GoodCounter.jsx

```jsx
import { useState } from "react";

function GoodCounter() {

    const [count, setCount] = useState(0);

    function handleClick() {

        setCount(count + 1);

    }

    return (
        <div style={{ padding: "20px" }}>

            <h2>
                ✅ Counter "tốt"
            </h2>

            <p>
                Bộ đếm: {count}
            </p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "green" }}>
                ✅ UI cập nhật bình thường
            </p>

        </div>
    );
}

export default GoodCounter;
```

---

# 🧠 useState hoạt động như thế nào?

```jsx
const [count, setCount] = useState(0);
```

## React tạo:

| Thành phần | Ý nghĩa |
|---|---|
| count | Giá trị hiện tại |
| setCount | Hàm cập nhật |
| useState(0) | Giá trị ban đầu |

---

# 🔥 Điều quan trọng nhất

```jsx
setCount(count + 1);
```

React hiểu rằng:
- state đã đổi
- cần render lại component

---

# 📊 So sánh

| Biến thường | useState |
|---|---|
| `let count = 0` | `const [count, setCount] = useState(0)` |
| `count = 5` | `setCount(5)` |
| ❌ Không re-render | ✅ Re-render |
| UI không đổi | UI cập nhật |

---

# 🧪 Thử nghiệm

## Chạy BadCounter

Nhấn nút:
- Console tăng
- UI không đổi

---

## Chạy GoodCounter

Nhấn nút:
- UI cập nhật ngay
- Component render lại

---

# 📝 Bài 1.3 — Luồng hoạt động của React

# 🔄 React Flow

```text
1. Component function được gọi
            ↓
2. Return JSX
            ↓
3. React hiển thị UI
            ↓
4. User click / nhập dữ liệu
            ↓
5. setState(newValue)
            ↓
6. Component render lại
            ↓
7. Return JSX mới
            ↓
8. React cập nhật UI
```

---

# 📄 File: FlowDemo.jsx

```jsx
import { useState } from "react";

function FlowDemo() {

    console.log("🔄 Component render!");

    const [step, setStep] = useState(1);

    return (
        <div style={{ padding: "20px" }}>

            <h2>
                Luồng hoạt động
            </h2>

            <p>
                Bước hiện tại: {step}
            </p>

            <button
                onClick={() => setStep(step + 1)}
            >
                Bước tiếp theo →
            </button>

            <button
                onClick={() => setStep(1)}
            >
                Quay lại đầu
            </button>

            <div
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    background: "#f0f0f0"
                }}
            >

                {step === 1 &&
                    <p>👋 Bước 1: Xin chào!</p>
                }

                {step === 2 &&
                    <p>📖 Bước 2: Đang học React</p>
                }

                {step === 3 &&
                    <p>🎯 Bước 3: Hiểu useState</p>
                }

                {step === 4 &&
                    <p>🎉 Bước 4: Hoàn thành!</p>
                }

            </div>

        </div>
    );
}

export default FlowDemo;
```

---

# 🧠 Giải thích FlowDemo

## Khi nhấn button

```jsx
setStep(step + 1)
```

React sẽ:

1. Cập nhật state
2. Gọi lại component
3. Return JSX mới
4. Cập nhật UI

---

# 🚨 Sai lầm người mới hay gặp

## ❌ Thay đổi state trực tiếp

Sai:

```jsx
count = count + 1
```

Đúng:

```jsx
setCount(count + 1)
```

---

## ❌ Nghĩ React tự theo dõi biến thường

React CHỈ theo dõi:
- state
- props

Không theo dõi:
- let
- const bình thường

---

# ✅ Checklist

- [x] Hiểu render lần đầu
- [x] Hiểu re-render
- [x] Phân biệt biến thường và useState
- [x] Hiểu setState làm UI cập nhật
- [x] Hiểu flow hoạt động của React

---

# 🎯 Tổng kết

```text
setState(newValue)
        ↓
Component render lại
        ↓
Return JSX mới
        ↓
React cập nhật UI
```

---

# 🚀 Chuẩn bị cho Tier 2

Tier tiếp theo sẽ học:

- Biến trong JSX
- {}
- Conditional rendering
- Render danh sách với map()