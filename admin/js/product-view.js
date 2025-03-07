let product = localStorage.getItem("product");
const productJs = JSON.parse(product);
const productTable = productJs.map((i) => [
  i.id,
  i.name,
  i.type,
  i.quantity,
  (priceFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(i.price)),
  `<img src="${i.img}" class="img-fluid" alt="" />`,
  i.description,
  `
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Hành động
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="./product-update.html?id=${i.id}">Sửa <i class="bi bi-pencil"></i></a></li>
    <li><a class="dropdown-item" href="#" onclick="productDelete('${i.id}')">Xóa <i class="bi bi-trash"></i></a></li>
  </ul>
</div>
      `,
]);
new DataTable("#example", {
  columns: [
    { title: "Mã sản phẩm" },
    { title: "Tên sản phẩm" },
    { title: "Loại sản phẩm" },
    { title: "Số lượng" },
    { title: "Giá" },
    { title: "Ảnh" },
    { title: "Thông tin" },
    { title: "Hành động", orderable: false },
  ],
  data: productTable,
});

function productDelete(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không") == true) {
    let index = productJs.findIndex((a) => a.id == id);
    if (index !== -1) {
      productJs.splice(index, 1);
      localStorage.setItem("product", JSON.stringify(productJs));
      alert("Đã xóa sản phẩm thành công");
      location.reload();
    }
  }
}
