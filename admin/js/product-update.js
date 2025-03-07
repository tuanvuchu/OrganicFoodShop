const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("id");

let product = localStorage.getItem("product");
const productJs = JSON.parse(product);
const productFind = productJs.find((i) => i.id == productId);
let i = productJs.findIndex((a) => a.id == productId);

let typeList = [];
productJs.forEach((a) => {
  typeList.push(a.type);
});
newType = [...new Set(typeList)];
const type = document.querySelector(".type");
for (let i = 0; i < newType.length; i++) {
  const option = document.createElement("option");
  option.value = newType[i];
  option.textContent = newType[i];
  type.appendChild(option);
}
if (productFind) {
  document.querySelector(".tbody-data-old").innerHTML = `<tr>
  <td scope="row" id="id">${productFind.id}</td>
  <td id="name">${productFind.name}</td>
  <td id="type">${productFind.type}</td>
  <td id="quantity">${productFind.quantity}</td>
  <td id="description">${productFind.description}</td>
  <td id="price">${productFind.price}</td>
  <td id="img">
    <img src="${productFind.img}" class="img-fluid" alt="" />
  </td>
  <td id="weight">${productFind.information.weight}</td>
  <td id="dimensions">${productFind.information.dimensions}</td>
</tr>
`;
}

const tableNew = document.querySelector(".table-new");
const col = tableNew.querySelectorAll("td");
const input = document
  .querySelector(".products-update")
  .querySelectorAll("input, textarea, select");
const inputFt = Array.from(input).filter((i) => i.type !== "file");
const inputFt1 = Array.from(input).filter((i) => i.name !== "id");

inputFt.forEach((i) => {
  const name = i.name;
  if (name in productFind) {
    i.value = productFind[name];
  } else if (productFind.information && name in productFind.information) {
    i.value = productFind.information[name];
  }
});

function preview() {
  tableNew.classList.remove("d-none");
  input.forEach((p, i) => {
    const fileInput = p.type === "file" && p.files[0];
    if (fileInput) {
      const reader = new FileReader();
      reader.onload = function (e) {
        col[
          i
        ].innerHTML = `<img src="${e.target.result}" class="img-fluid" alt="" style="max-width: 100px" />`;
      };
      reader.readAsDataURL(fileInput);
    } else {
      col[i].innerText = p.value || "";
    }
  });
}
document.getElementById("preview").addEventListener("click", preview);

function clean() {
  tableNew.classList.add("d-none");
  inputFt1.forEach((b) => {
    if (b.name == "type") {
      b.value = "default";
    } else if (b.name == "tag") {
      b.value = "new";
    } else {
      b.value = "";
    }
  });
}
document.getElementById("clean").addEventListener("click", clean);

function update() {
  let form = document.querySelector(".products-update");
  let formData = {
    information: {},
  };

  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit" && element.name) {
      if (element.name == "weight" || element.name == "dimensions") {
        formData.information[element.name] = element.value;
      } else if (element.type == "file") {
        formData[element.name] = element.files[0]
          ? `/img/${element.files[0].name}`
          : "";
      } else {
        formData[element.name] = element.value;
      }
    }
  }
  if (confirm("Bạn có chắc muốn cập nhật sản phẩm này không") == true) {
    productJs[i] = formData;
    localStorage.setItem("product", JSON.stringify(productJs));
    window.location.reload();
    alert("Sửa sản phẩm thành công!");
  }
}
document.getElementById("update").addEventListener("click", update);
