let account = localStorage.getItem("account");
const accountJs = JSON.parse(account);
const a = accountJs.map((i) => [
  i.username,
  i.email,
  i.phone,
  i.role,
  `
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Hành động
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="./user-update.html?username=${i.username}">Sửa <i class="bi bi-pencil"></i></a></li>
    <li><a class="dropdown-item" href="#" onclick="deleteUser('${i.username}')">Xóa <i class="bi bi-trash"></i></a></li>
  </ul>
</div>
      `,
]);
new DataTable("#example", {
  columns: [
    { title: "Tên người dùng" },
    { title: "Email" },
    { title: "Số điện thoại" },
    { title: "Quyền" },
    { title: "Hành động", orderable: false },
  ],
  data: a,
});

function deleteUser(username) {
  if (
    confirm("Bạn có chắc muốn xóa người " + username + " dùng này không") ==
    true
  )
    if (username == "admin") {
      alert("Hành động bị từ chối");
    } else {
      {
        let index = accountJs.findIndex(
          (account) => account.username == username
        );
        if (index !== -1) {
          accountJs.splice(index, 1);
          localStorage.setItem("account", JSON.stringify(accountJs));
          alert("Xóa người dùng " + username + " thành công");
          location.reload();
        }
      }
    }
}
