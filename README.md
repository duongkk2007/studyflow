# StudyFlow — Buổi 1

Website giới thiệu **StudyFlow**, app lên lịch phiên tập trung 25 phút cho sinh viên tự ôn thi.

## Chạy dự án

```bash
npm install
npm run dev     # build + watch Tailwind, để nguyên terminal chạy
```

Mở `index.html` bằng Live Server (hoặc trình duyệt trực tiếp).

Bản build production:

```bash
npm run build
```

## Bảng design token (Nhiệm vụ 1)

| Vai trò | Giá trị | Tên token | Class Tailwind |
|---|---|---|---|
| Màu thương hiệu chính | `#2B3A99` (xanh mực bút bi) | `--color-brand-600` | `bg-brand-600` / `text-brand-600` |
| Màu thương hiệu (hover) | `#202B73` | `--color-brand-700` | `bg-brand-700` |
| Màu nhấn | `#FF7A33` (cam highlighter) | `--color-accent-500` | `text-accent-500` / `bg-accent-500` |
| Màu nhấn (đậm) | `#E85F17` | `--color-accent-600` | `text-accent-600` |
| Màu thành công / tiến độ | `#35B78C` | `--color-success-500` | `text-success-500` |
| Chữ chính | `#14181F` | `--color-ink` | `text-ink` |
| Chữ phụ | `#5B6472` | `--color-muted` | `text-muted` |
| Nền trang | `#EDEFF3` | `--color-surface` | `bg-surface` |
| Nền thẻ | `#FFFFFF` | `--color-surface-2` | `bg-surface-2` |
| Viền | `#D7DBE3` | `--color-line` | `border-line` |
| Phông tiêu đề | Space Mono | `--font-display` | `font-display` |
| Phông nội dung | Inter | `--font-body` | `font-body` |
| H1 | 48px / 60px (lg), leading-tight | — | `text-5xl lg:text-6xl` |
| H2 | 30px / 36px (lg) | — | `text-3xl lg:text-4xl` |
| H3 | 20px | — | `text-xl` |
| Padding dọc section | 80px / 112px (lg) | — | `py-20 lg:py-28` (đóng gói trong `.section`) |
| Bo góc thẻ | 14px | `--radius-card` | `rounded-card` |
| Bo góc nút (pill) | 999px | `--radius-pill` | `rounded-pill` |

**Quy tắc làm tròn áp dụng:** không có giá trị `[13px]` tuỳ ý nào trong `index.html`; mọi spacing dùng thang có sẵn của Tailwind (4, 5, 6, 8, 10, 12, 14, 16, 20, 28...).

## Định hướng thiết kế

- **Chủ đề:** StudyFlow — công cụ chia buổi ôn thi thành các phiên tập trung 25 phút, dành cho sinh viên tự học. Nhiệm vụ duy nhất của trang: thuyết phục người đang trì hoãn bắt đầu một phiên học ngay bây giờ.
- **Bảng màu:** "giấy vở lạnh" (`#EDEFF3`) thay vì giấy ngà ấm mặc định, mực bút bi xanh navy làm thương hiệu, cam highlighter làm điểm nhấn hành động/số liệu.
- **Phông chữ:** Space Mono cho tiêu đề và mọi con số (gợi màn hình đồng hồ đếm ngược) + Inter cho nội dung.
- **Điểm nhấn (signature):** vòng tròn đếm ngược SVG trong hero — chính là cơ chế lõi của sản phẩm (phiên 25 phút), có thể bấm tạm dừng/tiếp tục thật (xem `js/main.js`).

## Cấu trúc

```
studyflow/
├── index.html
├── src/input.css       # @theme tokens + component classes
├── dist/output.css     # build ra, không sửa tay
├── js/main.js           # vòng đếm ngược ở hero
├── data/                 # (để trống, dùng ở buổi sau)
└── assets/img/           # (để trống, dùng ở buổi sau)
```
