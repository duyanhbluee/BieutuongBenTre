const express = require("express");
const app = express();
const cors = require("cors");

let comments = []; // Bộ nhớ tạm (sử dụng database thực tế nếu cần)

app.use(cors());
app.use(express.json());

// API lấy danh sách bình luận
app.get("/comments", (req, res) => {
    res.json(comments);
});

// API lưu bình luận mới
app.post("/comments", (req, res) => {
    const { comment } = req.body;
    if (comment) {
        comments.push(comment);
        res.status(201).json({ message: "Bình luận đã được thêm!" });
    } else {
        res.status(400).json({ message: "Bình luận không hợp lệ!" });
    }
});

app.listen(3000, () => console.log("Server chạy trên cổng 3000"));