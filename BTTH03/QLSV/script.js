// Khởi tạo mảng dữ liệu sinh viên bằng cách đọc từ localStorage [cite: 74, 75]
let students = JSON.parse(localStorage.getItem('students')) || [];

// 1. Lấy các phần tử DOM cần thiết [cite: 57]
const studentTableBody = document.getElementById('studentTableBody');
const modal = document.getElementById('studentModal');
const btnOpenAddForm = document.getElementById('btnOpenAddForm');
const btnCloseForm = document.getElementById('btnCloseForm');
const studentForm = document.getElementById('studentForm');
const modalTitle = document.getElementById('modalTitle');

// Các ô input trong form [cite: 61]
const inputId = document.getElementById('studentId');
const inputName = document.getElementById('fullName');
const inputDob = document.getElementById('dob');
const inputClass = document.getElementById('className');
const inputGpa = document.getElementById('gpa');
const inputEmail = document.getElementById('email');
const editIndex = document.getElementById('editIndex');

// 2. Hàm lưu dữ liệu xuống localStorage [cite: 84]
function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}

// 3. Hàm cập nhật khu vực thống kê [cite: 86]
function updateStatistics() {
    document.getElementById('totalStudents').innerText = students.length;
    
    if (students.length === 0) {
        document.getElementById('averageScore').innerText = "0.0";
        return;
    }

    let totalGpa = students.reduce((sum, student) => sum + parseFloat(student.gpa), 0);
    let avg = totalGpa / students.length;
    document.getElementById('averageScore').innerText = avg.toFixed(2);
}

// 4. Hàm hiển thị dữ liệu ra bảng [cite: 76]
function renderStudents() {
    studentTableBody.innerHTML = ""; // Xóa dữ liệu cũ
    
    if (students.length === 0) {
        studentTableBody.innerHTML = "<tr><td colspan='7' style='text-align:center;'>Chưa có dữ liệu sinh viên</td></tr>";
    } else {
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>${student.className}</td>
                <td>${student.gpa}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button style="background-color: #dc3545;" onclick="deleteStudent(${index})">Xóa</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });
    }
    updateStatistics(); // Cập nhật thống kê mỗi khi render lại bảng [cite: 96, 103]
}

// 5. Xử lý sự kiện mở form thêm sinh viên [cite: 66]
btnOpenAddForm.addEventListener('click', () => {
    studentForm.reset(); // Xóa dữ liệu cũ trong form [cite: 87]
    editIndex.value = "-1"; // Đặt lại trạng thái là "Thêm mới"
    modalTitle.innerText = "Thêm sinh viên mới";
    modal.style.display = 'flex'; // Hiển thị popup [cite: 79]
});

// 6. Xử lý sự kiện đóng form [cite: 67]
btnCloseForm.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 7. Xử lý sự kiện Submit form (Cho cả Thêm và Sửa) [cite: 68, 70]
studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn trang bị tải lại

    // Lấy dữ liệu từ input [cite: 81]
    const studentData = {
        id: inputId.value,
        name: inputName.value,
        dob: inputDob.value,
        className: inputClass.value,
        gpa: inputGpa.value,
        email: inputEmail.value
    };

    const index = parseInt(editIndex.value);

    if (index === -1) {
        // Thêm mới sinh viên [cite: 82, 83]
        students.push(studentData);
        alert("Thêm sinh viên thành công!");
    } else {
        // Cập nhật sinh viên đã có [cite: 93]
        students[index] = studentData;
        alert("Cập nhật thông tin thành công!");
    }

    saveStudents(); // Lưu mảng xuống localStorage [cite: 94]
    renderStudents(); // Render lại bảng [cite: 95]
    modal.style.display = 'none'; // Đóng form
});

// 8. Hàm nạp dữ liệu lên form để Sửa [cite: 91]
function editStudent(index) {
    const student = students[index];
    
    // Đưa dữ liệu hiện tại lên form
    inputId.value = student.id;
    inputName.value = student.name;
    inputDob.value = student.dob;
    inputClass.value = student.className;
    inputGpa.value = student.gpa;
    inputEmail.value = student.email;
    
    editIndex.value = index; // Lưu lại vị trí đang sửa
    modalTitle.innerText = "Cập nhật sinh viên"; // Đổi tiêu đề form [cite: 92]
    
    modal.style.display = 'flex'; // Mở form
}

// 9. Hàm xóa sinh viên [cite: 98]
function deleteStudent(index) {
    // Hiển thị thông báo xác nhận trước khi xóa [cite: 99]
    const isConfirm = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    
    if (isConfirm) {
        students.splice(index, 1); // Xóa phần tử khỏi mảng [cite: 100]
        saveStudents(); // Lưu lại localStorage [cite: 101]
        renderStudents(); // Render lại bảng [cite: 102]
        alert("Đã xóa sinh viên!");
    }
}

// Gọi hàm render lần đầu khi tải trang [cite: 75, 76]
renderStudents();