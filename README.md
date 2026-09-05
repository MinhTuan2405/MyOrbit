# Git và GitHub cơ bản

Repository phục vụ bài giảng “Git và GitHub cơ bản cho sinh viên CNTT”, thuộc học phần “Sử dụng phương tiện kỹ thuật và công nghệ trong dạy học đại học”.

## Nội dung

- `hello.py`: in lời chào.
- `calculator.py`: cộng hai số do người dùng nhập.
- `.gitignore`: bỏ qua thư mục `__pycache__` và tệp `.env` chưa được Git theo dõi.

## Chạy chương trình

Cần Python 3. Mở terminal trong thư mục dự án và chạy:

```bash
python hello.py
python calculator.py
```

Nếu máy dùng lệnh `python3`, thay `python` bằng `python3`.

## Thực hành quản lý phiên bản

1. Khởi tạo repository bằng `git init`.
2. Kiểm tra bằng `git status`.
3. Stage các tệp bằng `git add README.md hello.py calculator.py .gitignore`.
4. Tạo commit bằng `git commit -m "Create Python demo"`.
5. Đặt tên nhánh bằng `git branch -M main`.
6. Tạo repository GitHub trống tên `git-github-basic-demo`. Không thêm README, license hoặc .gitignore trên GitHub.
7. Sao chép và chạy nguyên dòng lệnh kết nối remote do GitHub cung cấp cho repository vừa tạo.
8. Kiểm tra địa chỉ bằng `git remote -v`, rồi chạy `git push -u origin main` sau khi đã xác thực và có quyền ghi.
9. Bổ sung một dòng giới thiệu vào README; stage và tạo commit mới bằng `git commit -m "Describe demo purpose"`, sau đó `git push`.

`git add` chuẩn bị nội dung cho commit tiếp theo. `git commit` ghi vào lịch sử local; `git push` gửi commit lên remote. Nếu sửa tệp sau khi add, cần add lại để đưa phần sửa mới vào commit.
