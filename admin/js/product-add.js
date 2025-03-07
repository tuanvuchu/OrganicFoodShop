const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("id");

let product = localStorage.getItem("product");
const productJs = JSON.parse(product);
const productFind = productJs.find((i) => i.id == productId);

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

const table = document.querySelector(".table");
const previewCt = document.getElementById("preview-ct");
const input = document
  .querySelector(".products-add")
  .querySelectorAll("input, textarea, select");
const col = document.querySelectorAll("td");
function productAdd() {
  let form = document.querySelector(".products-add");
  let formData = {
    information: {},
  };

  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];

    if (element.type !== "submit" && element.name) {
      if (element.name === "weight" || element.name === "dimensions") {
        formData.information[element.name] = element.value;
      } else if (element.type === "file") {
        formData[element.name] = element.files[0]
          ? `/img/${element.files[0].name}`
          : "";
      } else {
        formData[element.name] = element.value;
      }
    }
  }
  if (confirm("Bạn có muốn thêm sản phẩm này không") == true) {
    productJs.push(formData);
    localStorage.setItem("product", JSON.stringify(productJs));
    alert("Thêm sản phẩm mới thành công");
    clean();
  }
}
document.getElementById("add").addEventListener("click", productAdd);

function preview() {
  previewCt.classList.remove("d-none");
  input.forEach((p, i) => {
    const fileInput = p.type === "file" && p.files[0];
    if (fileInput) {
      const reader = new FileReader();
      reader.onload = function (e) {
        col[
          i
        ].innerHTML = `<img src="${e.target.result}" class="img-fluid" alt="" style="max-width: 50px" />`;
      };
      reader.readAsDataURL(fileInput);
    } else {
      col[i].innerText = p.value || "";
    }
  });
}

document.getElementById("preview").addEventListener("click", preview);

function clean() {
  previewCt.classList.add("d-none");
  input.forEach((b) => {
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
