// Lấy các bình luận từ localStorage khi trang được tải lại
window.onload = function() {
    loadComments();
}

// Xử lý sự kiện gửi bình luận
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form

    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();  // Lấy giá trị bình luận

    if (commentText) {
        // Tạo phần tử div mới để hiển thị bình luận
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = commentText;

        // Thêm bình luận vào phần hiển thị
        const commentsSection = document.getElementById("comments");
        commentsSection.appendChild(commentDiv);

        // Lưu bình luận vào localStorage
        saveComment(commentText);

        // Làm sạch textarea sau khi đăng
        commentInput.value = "";
    }
});

// Hàm lưu bình luận vào localStorage
function saveComment(commentText) {
    let comments = localStorage.getItem('comments'); // Lấy danh sách bình luận từ localStorage
    comments = comments ? JSON.parse(comments) : [];  // Nếu chưa có, khởi tạo mảng rỗng

    comments.push(commentText); // Thêm bình luận mới vào mảng

    // Lưu lại mảng bình luận vào localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Hàm tải các bình luận từ localStorage và hiển thị chúng
function loadComments() {
    const comments = localStorage.getItem('comments'); // Lấy danh sách bình luận từ localStorage

    if (comments) {
        const commentsArray = JSON.parse(comments); // Chuyển đổi dữ liệu từ JSON

        // Duyệt qua các bình luận và thêm vào phần hiển thị
        const commentsSection = document.getElementById("comments");
        commentsArray.forEach(function(comment) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.textContent = comment;
            commentsSection.appendChild(commentDiv);
        });
    }
}