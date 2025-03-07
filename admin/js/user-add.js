const account = localStorage.getItem("account");
const accountJs = JSON.parse(account);
const session = localStorage.getItem("session");
const sessionJs = JSON.parse(session);
let form = document.querySelector(".user-add");
function add() {
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }
  let cartData = {
    username: formData.username,
    cart: [],
  };
  if (confirm("Bạn có muốn thêm người dùng mới không") == true) {
    accountJs.push(formData);
    localStorage.setItem("account", JSON.stringify(accountJs));
    sessionJs.push(cartData);
    localStorage.setItem("session", JSON.stringify(sessionJs));
    alert("Thêm người dùng mới thành công!");
    clean();
  }
}
document.getElementById("add").addEventListener("click", add);

const input = form.querySelectorAll("input, select");
const inputFt = Array.from(input).filter((i) => i.name !== "pass");
const table = document.querySelector(".table");
const col = document.querySelectorAll("td");

function preview() {
  table.classList.remove("d-none");
  inputFt.forEach((input, index) => {
    col[index].innerText = input.value || "";
  });
}
document.getElementById("preview").addEventListener("click", preview);

function clean() {
  table.classList.add("d-none");
  input.forEach((b) => {
    if (b.name == "type") {
      b.value = "default";
    } else {
      b.value = "";
    }
  });
}
document.getElementById("clean").addEventListener("click", clean);
