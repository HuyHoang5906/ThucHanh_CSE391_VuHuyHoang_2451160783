function StudentCard() {
    return (
        <div className="card">         {/* class → className */}
            <img src="avatar.jpg" alt="Avatar" />  {/* Đóng thẻ */}
            <h2>Nguyễn Văn Minh</h2>
            <p>Sinh viên năm 3</p>
            <label htmlFor="email">Email:</label>   {/* for → htmlFor */}
            <input type="email" id="email" />       {/* Đóng thẻ */}
        </div>
    );
}

export default StudentCard;