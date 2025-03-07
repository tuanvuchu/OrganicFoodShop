const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
paymentMethods.forEach(function (radio) {
  radio.addEventListener("change", function () {
    showPaymentDetails(this.id);
  });
});
function showPaymentDetails(method) {
  const forms = document.querySelectorAll(".payment-form");
  forms.forEach((form) => form.classList.add("d-none"));
  if (method == "credit-debit") {
    document.getElementById("credit-form").classList.remove("d-none");
  } else if (method == "paypal") {
  }
}
showPaymentDetails("credit-debit");

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert("Thanh toán thành công");
          window.location.reload();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let productSeesion = [];
if (accountFind) {
  accountFind.cart.forEach((i) => {
    productSeesion.push(productJs.find((p) => p.id == i));
  });
}
const cart1 = document.querySelector(".cart1");
productSeesion.forEach((i) => {
  cart1.innerHTML += `<li class="list-group-item d-flex justify-content-between lh-sm">
  <div>
    <h6 class="my-0 d-flex">
      <p id="name">${i.name} <i class="bi bi-x"></i></p>
      
      <p class="quantity111"></p>
    </h6>
  </div>
  <span class="text-body-secondary subtotal"></span>
</li>`;
});
cart1.innerHTML += `              <li
              class="list-group-item d-flex justify-content-between bg-body-tertiary"
            >
              <div class="text-success">
                <h6 class="my-0">Mã khuyến mại</h6>
                <small id="code"></small>
              </div>
              <span class="text-success" id="discount"></span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Tổng (VND)</span>
              <strong id="subtotal"></strong>
            </li>`;
document.getElementById("cart-length").innerText = cart1.children.length - 2;

const quantity = JSON.parse(sessionStorage.getItem("temp"));

let data = [];
if (quantity) {
  quantity.forEach((p) => {
    data.push(p);
  });
}

const a1 = document.querySelectorAll(".quantity111");
a1.forEach((e, i) => {
  if (data[i]) {
    e.innerText = data[i].quantity;
  }
});

let sum = 0;
document.querySelectorAll(".subtotal").forEach((e, i) => {
  if (data[i]) {
    e.innerText = data[i].subtotal;
    const a = parseFloat(
      e.innerText.replace(/[^0-9.]/g, "").replace(/\./g, "")
    );
    sum += a;
  }
});
document.getElementById("subtotal").innerText = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
}).format(sum);
document
  .getElementById("check-code")
  .addEventListener("click", function name() {
    let code = document.getElementById("code-input").value;
    if (code == "vu") {
      document.getElementById("code").innerText = "vu";
      document.getElementById("discount").innerText = "-100%";
      document.getElementById("subtotal").innerText = "0";
    } else {
      document.getElementById("code").innerText = "Không hợp lệ";
      document.getElementById("discount").innerText = "";
      document.getElementById("subtotal").innerText = new Intl.NumberFormat(
        "vi-VN",
        {
          style: "currency",
          currency: "VND",
        }
      ).format(sum);
    }
  });
