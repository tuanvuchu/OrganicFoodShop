const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const urlParams = new URLSearchParams(location.search);
const accountUserName = urlParams.get("username");
let account = localStorage.getItem("account");
const accountJs = JSON.parse(account);

const accountFind = accountJs.find((i) => i.username == accountUserName);
let i = accountJs.findIndex((i) => i.username == accountUserName);

let form = document.querySelector(".user-update");
function update() {
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }
  if (confirm("Bạn có muốn sửa người dùng này không") == true) {
    accountJs[i] = formData;
    localStorage.setItem("account", JSON.stringify(accountJs));
    alert("Sửa người dùng thành công!");
    clean();
  }
}
document.getElementById("update").addEventListener("click", update);

const input = form.querySelectorAll("input, select");
const inputFt = Array.from(input).filter((i) => i.name !== "pass");
const table = document.querySelector(".table");
const col = document.querySelectorAll("td");

input.forEach((i) => {
  const name = i.name;
  if (name in accountFind) {
    i.value = accountFind[name];
  }
});
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
    if (b.name == "role") {
      b.value = "user";
    } else if (b.name == "pass" || b.name == "username") {
    } else {
      b.value = "";
    }
  });
}
document.getElementById("clean").addEventListener("click", clean);
