# StudyFlow — Buổi 1

Website giới thiệu **StudyFlow**, app chia buổi ôn thi thành các phiên tập trung 25 phút và nhắc nghỉ đúng lúc.

Đồ án học phần Thực Hành Thiết Kế Web — Trường Đại Học Mở TP.HCM.

## Chạy dự án

```bash
npm install
npm run dev     # build CSS, tự động cập nhật khi sửa file
```

Mở `index.html` bằng Live Server (VS Code) để xem trực tiếp.

Build bản rút gọn cho production:

```bash
npm run build
```

## Cấu trúc

```
index.html       Khung HTML semantic (10 khối: navbar, hero, ..., footer)
src/input.css    Khai báo token (@theme) và component Tailwind
dist/output.css  CSS đã build, index.html trỏ tới file này
assets/img/      Hình ảnh
```

## Token thiết kế

Xem chi tiết trong `BANG TOKEN BUOI1 STUDYFLOW.pdf`.
