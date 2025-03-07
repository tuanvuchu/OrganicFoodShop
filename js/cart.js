const session1 = localStorage.getItem("session");
const sessionJs1 = JSON.parse(session1);

let productSeesion = [];
if (accountFind) {
  accountFind.cart.forEach((i) => {
    productSeesion.push(productJs.find((p) => p.id == i));
  });
  const productSeesionMap = productSeesion.map((i) => [
    `<button type="button" class="btn" onclick="cartDelete(${i.id})">
    <i class="bi bi-x-circle"></i>
  </button>`,
    `<img src="${i.img}" class="img-fluid" alt="" style="max-width:70px" /><a class="btn" href="/product.html?id=${i.id}" role="button">${i.name}</a>`,
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(i.price),
    `<input
    type="number"
    class="form-control"
    id="quantity"
    min="1"
    max="${i.quantity}"
    value="1"
  />`,
    `<input class="form-control" id="subtotal" type="text" 
    value="${new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(i.price)}" readonly />`,
  ]);
  new DataTable("#example", {
    paging: false,
    searching: false,
    info: false,
    columns: [
      { title: "" },
      { title: "Sản phẩm" },
      { title: "Giá" },
      { title: "Số lượng" },
      { title: "Tạm tính" },
    ],
    data: productSeesionMap,
  });

  let tongtien = 0;
  function total() {
    const rows = document.querySelectorAll("#example tbody tr");
    rows.forEach((row, index) => {
      const quantity = row.cells[3].querySelector("input");
      const subtotal = row.cells[4].querySelector("input");
      const price = row.cells[2];
      const priceFormat = parseInt(price.textContent.replace(".", "").trim());
      quantity.setAttribute("id", "quantity-" + index);
      subtotal.setAttribute("id", "subtotal-" + index);
      quantity.addEventListener("input", function () {
        const quantityValue = parseInt(quantity.value);
        const subtotalValue = priceFormat * quantityValue;
        subtotal.value = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(subtotalValue);
        cTotal();
      });

      const initialQuantity = parseInt(quantity.value);
      const initialSubtotalValue = priceFormat * initialQuantity;
      subtotal.value = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(initialSubtotalValue);
    });
    cTotal();
  }

  function cTotal() {
    tongtien = 0;
    const allSubtotals = document.querySelectorAll(
      "#example tbody tr input[id^='subtotal-']"
    );
    allSubtotals.forEach((input) => {
      tongtien += parseInt(input.value.replace(".", "").trim());
    });
    document.getElementById("subtotal").innerText = new Intl.NumberFormat(
      "vi-VN",
      {
        style: "currency",
        currency: "VND",
      }
    ).format(tongtien);
    document.getElementById("total").innerText = new Intl.NumberFormat(
      "vi-VN",
      {
        style: "currency",
        currency: "VND",
      }
    ).format(tongtien);
  }
  total();
}
function a() {
  const a = [];
  const rows = document.querySelectorAll("#example tbody tr");
  rows.forEach((i) => {
    const quantity = i.cells[3].querySelector("input").value;
    const subtotal = i.cells[4].querySelector("input").value;
    a.push({ quantity, subtotal });
  });
  sessionStorage.setItem("temp", JSON.stringify(a));
}

document.getElementById("checkout").addEventListener("click", a);

const toastTriggers = document.querySelectorAll(".liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTriggers.length > 0 && toastLiveExample) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTriggers.forEach((toastTrigger) => {
    toastTrigger.addEventListener("click", () => {
      toastBootstrap.show();
    });
  });
}
