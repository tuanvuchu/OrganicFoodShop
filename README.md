# 🌿 Cửa hàng bán đồ nông sản

<div align="center">

**Một giao diện nền tảng thương mại điện tử hiện đại và tương thích đa thiết bị dành cho các sản phẩm thực phẩm hữu cơ, được xây dựng bằng HTML, CSS và JavaScript thuần.**

</div>

## 📖 Tổng quan

Cửa hàng bán đồ nông sản là một mẫu giao diện (template) front-end cho cửa hàng thực phẩm hữu cơ, được chế tác bằng HTML, CSS và JavaScript thuần. Dự án cung cấp đầy đủ các trang tĩnh để trưng bày sản phẩm, chức năng giỏ hàng, quy trình thanh toán, blog và các trang pháp lý thiết yếu. Đây là lựa chọn lý tưởng cho những ai đang tìm kiếm một nền tảng sạch sẽ, phản hồi tốt và dễ dàng tùy chỉnh cho cửa hàng thực phẩm trực tuyến.

## ✨ Tính năng

- **Trang chủ**: Trang đích thu hút để chào đón khách hàng và làm nổi bật các chương trình khuyến mãi.
- **Danh mục sản phẩm**: Duyệt qua danh sách đa dạng các sản phẩm hữu cơ với thông tin chi tiết.
- **Trang chi tiết sản phẩm**: Xem chuyên sâu từng sản phẩm, bao gồm mô tả và hình ảnh.
- **Giỏ hàng**: Giao diện trực quan để quản lý các mặt hàng đã chọn trước khi thanh toán.
- **Thanh toán**: Trải nghiệm thanh toán đa bước được tối ưu hóa.
- **Mục Blog**: Các trang dành riêng cho bài viết và tin tức liên quan đến thực phẩm hữu cơ.
- **Trang thông tin tĩnh**: Bao gồm Thông báo quyền riêng tư và Điều khoản & Điều kiện.
- **Thiết kế Responsive**: Tối ưu hóa để hiển thị mượt mà trên nhiều thiết bị (máy tính để bàn, máy tính bảng, điện thoại di động).
- **Dữ liệu phía Client**: Dữ liệu sản phẩm được quản lý trực tiếp trong tệp JavaScript (`data.js`).

## 🖥️ Ảnh chụp màn hình

![Product Detail Page Screenshot](https://raw.githubusercontent.com/tuanvuchu/OrganicFoodShop/refs/heads/main/img/Product%20Detail%20Page%20Screenshot.png)
![Cart Page Screenshot](https://raw.githubusercontent.com/tuanvuchu/OrganicFoodShop/refs/heads/main/img/Cart%20Page%20Screenshot.png)

## 🛠️ Công nghệ sử dụng

**Frontend:**

- HTML5
- CSS3
- Bootstrap5
- JavaScript (Vanilla)

## 🚀 Bắt đầu nhanh

Dự án này là một ứng dụng web tĩnh và không yêu cầu bất kỳ công cụ build hay thiết lập máy chủ phía server nào để chạy.

### Điều kiện tiên quyết

- Một trình duyệt web (ví dụ: Chrome, Firefox, Safari, Edge).

### Cài đặt

1. **Sao chép kho lưu trữ (Clone)**

```bash
git clone https://github.com/tuanvuchu/OrganicFoodShop.git
cd OrganicFoodShop
```

2. **Chạy với Live Server**
   Cài đặt tiện ích **Live Server** trong Visual Studio Code, sau đó:

- Mở thư mục dự án bằng VS Code.
- Chuột phải vào tệp `index.html`.
- Chọn **Open with Live Server**.

Trình duyệt sẽ tự động mở và tự làm mới (refresh) khi bạn chỉnh sửa mã nguồn.

## 📁 Cấu trúc dự án

```
OrganicFoodShop/
├── admin/                     # Các mẫu giao diện quản trị (HTML, CSS, JS)
├── blog-detail.html           # Trang chi tiết bài viết blog
├── blog.html                  # Trang danh sách bài viết blog
├── cart.html                  # Trang giỏ hàng
├── checkout.html              # Trang quy trình thanh toán
├── css/                       # Các tệp kiểu dáng (stylesheets)
│   ├── bootstrap.min.css      # Framework Bootstrap cho thiết kế tương thích
│   ├── style.css              # Các kiểu dáng tùy chỉnh chính
├── data.js                    # Tệp JavaScript chứa dữ liệu sản phẩm tĩnh
├── font/                      # Các tài nguyên phông chữ tùy chỉnh
├── img/                       # Tài nguyên hình ảnh (sản phẩm, banner, icon)
├── index.html                 # Trang đích chính của cửa hàng
├── js/                        # Các tệp JavaScript xử lý tương tác
│   ├── main.js                # Logic JavaScript cốt lõi
│   ├── bootstrap.min.js       # JavaScript của Bootstrap
├── privacy-notice.html        # Trang chính sách quyền riêng tư
├── product.html               # Trang chi tiết từng sản phẩm
├── README.md                  # Tài liệu hướng dẫn dự án
├── shop.html                  # Trang danh sách sản phẩm / cửa hàng
└── termsandconditions.html    # Trang Điều khoản và Điều kiện

```

## ⚙️ Cấu hình

### Dữ liệu phía Client

Dự án sử dụng tệp `data.js` để lưu trữ thông tin sản phẩm. Bạn có thể sửa đổi tệp này để cập nhật danh sách sản phẩm, giá cả, mô tả và các chi tiết khác.

## 🔧 Phát triển

Việc phát triển dự án này chủ yếu liên quan đến việc chỉnh sửa trực tiếp các tệp HTML, CSS và JavaScript.

### Quy trình làm việc

1. **Chỉnh sửa các tệp HTML** trong thư mục gốc để thay đổi nội dung và cấu trúc trang.
2. **Sửa đổi các tệp CSS** trong thư mục `css/` để tùy chỉnh phong cách và bố cục.
3. **Cập nhật các tệp JavaScript** trong thư mục `js/` để thêm hoặc thay đổi các tính năng tương tác.
4. **Chỉnh sửa `data.js**` để thay đổi dữ liệu sản phẩm hoặc các cấu trúc dữ liệu tĩnh khác.
