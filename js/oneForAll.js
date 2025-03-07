const product = localStorage.getItem("product");
const productJs = JSON.parse(product);
const account = localStorage.getItem("account");
const accountJs = JSON.parse(account);
const sessionAccount = sessionStorage.getItem("account");
const sessionAccountJs = JSON.parse(sessionAccount);

let session;
let sessionJs;
let accountFind;
let accountFindIndex;

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }
  lastScrollTop = scrollTop;
});

let authenticator;
const username = document.getElementById("username");
const pass = document.getElementById("pass");
const feedback = document.querySelector(".invalid-feedback");
const avatar = document.getElementById("avatar");
const avatarUsername = document.getElementById("avatarUsername");
const control = document.getElementById("control");
const cart = document.querySelector(".cart");
const cartlength = document.getElementById("cart-length");

if (sessionAccountJs) {
  authenticator = accountJs.find((i) => i.username == sessionAccountJs);
  avatarUsername.innerText = authenticator.username;
  if (document.getElementById("toast-body")) {
    document.getElementById("toast-body").innerText =
      "Sản phẩm đã được thêm vào giỏ hàng.";
  }
  if (cartlength) {
    cartlength.classList.remove("d-none");
  }
  avatar.classList.remove("d-none");
  control.classList.add("d-none");
  cartLoad(authenticator);
}

username.addEventListener("input", function name() {
  feedback.classList.remove("d-block");
});
pass.addEventListener("input", function name() {
  feedback.classList.remove("d-block");
});

function login() {
  authenticator = accountJs.find((i) => i.username == username.value);
  if (authenticator) {
    if (authenticator.pass == pass.value) {
      if (authenticator.username == "admin") {
        window.location.href = "/admin/index.html";
      } else {
        sessionStorage.setItem(
          "account",
          JSON.stringify(authenticator.username)
        );
        window.location.reload();
      }
    } else {
      feedback.classList.add("d-block");
    }
  } else {
    feedback.classList.add("d-block");
  }
}
document.querySelector(".btn-login").addEventListener("click", login);

document.querySelector(".logout").addEventListener("click", function logout() {
  sessionStorage.clear();
  window.location.reload();
});

function cartLoad() {
  session = localStorage.getItem("session");
  sessionJs = JSON.parse(session);
  accountFind = sessionJs.find((i) => i.username == sessionAccountJs);
  accountFindIndex = sessionJs.findIndex((i) => i.username == sessionAccountJs);
  let productSeesion = [];
  accountFind.cart.forEach((i) => {
    productSeesion.push(productJs.find((p) => p.id == i));
  });
  if (cart) {
    cart.innerHTML = "";
    productSeesion.forEach((i) => {
      let priceFormat = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(i.price);
      cart.innerHTML += `<div class="row border-bottom">
        <div class="col d-flex align-items-center justify-content-between">
          <button
            type="button"
            class="btn-close p-2 me-1 cartRemove"
            aria-label="Close"
            onclick="cartDelete(${i.id})"
          ></button>
          <img
            src="${i.img}"
            class="img-fluid rounded-top"
            alt=""
            style="max-width: 70px"
          />
          <div>
            <a href="/product.html?id=${i.id}">${i.name}</a>
            <div class="d-flex">
              <p class="quantity">1<i class="bi bi-x"></i></p>
              <p class="price">${priceFormat}</p>
            </div>
          </div>
        </div>
      </div>`;
    });
    cartlength.innerText = cart.children.length;
  }
}

function cartDelete(id) {
  let index = accountFind.cart.findIndex((i) => i == id);
  if (index !== -1) {
    accountFind.cart.splice(index, 1);
    localStorage.setItem("session", JSON.stringify(sessionJs));
    if (cart) {
      cartLoad();
    } else {
      window.location.reload();
    }
  }
}

function cartAdd(id) {
  if (accountFind) {
    const match = accountFind.cart.some((i) => i == id);
    if (!match) {
      sessionJs[accountFindIndex].cart.push(id);
      localStorage.setItem("session", JSON.stringify(sessionJs));
      cartLoad();
    }
  }
}
