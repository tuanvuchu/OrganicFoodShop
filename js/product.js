document.addEventListener("DOMContentLoaded", function () {
  const navbar1 = document.querySelector(".navbar1");
  const flag = document.getElementById("flag");
  const handleScroll = () => {
    const flagPosition = flag.getBoundingClientRect().bottom;
    if (flagPosition <= 0) {
      navbar1.classList.remove("d-none");
    } else {
      navbar1.classList.add("d-none");
    }
  };
  window.addEventListener("scroll", handleScroll);
});

const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("id");
const productFind = productJs.find((a) => a.id == productId);
const productIndex = productJs.findIndex((a) => a.id == productId);
let product2 = productJs[productIndex - 1];
let product3 = productJs[productIndex + 1];
if (!product2) {
  product2 = productFind;
} else if (!product3) {
  product3 = productFind;
}
if (productFind) {
  getDataProduct(productFind, product2, product3);
  zoom();
} else {
  get404();
}
let alsoLikeProducts = getRandomProduct(productJs, 4);
alsoLike(alsoLikeProducts);
let relatedProducts = getRandomProduct(productJs, 4);
related(relatedProducts);
function getRandomProduct(productJs, itemCount) {
  const shuffled = [...productJs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, itemCount);
}

function alsoLike(alsoLikeProducts) {
  const alsoLikeContainer = document.querySelector(".also-like");
  alsoLikeProducts.forEach((p) => {
    let priceFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(p.price);
    const colElement = document.createElement("div");
    colElement.className = "col";
    colElement.innerHTML = `
            <div class="card zi zi-hover">
                <a href="/product.html?id=${p.id}">
                    <div class="card-img">
                        <img src="${p.img}" class="img-fluid" alt="${p.name}" />
                    </div>
                </a>
                <div class="card-img text-center pt-1">
                    <div class="name fs-0875">${p.name}</div>
                    <div class="price my-3 fs-6">${priceFormat}</div>
                    <hr />
                    <div class="shop mt-3">
                        <button
                  type="button"
                  class="btn add-to-cart liveToastBtn fs-7"
                  onclick="cartAdd(${p.id})"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
                    </div>
                </div>
            </div>
        `;
    alsoLikeContainer.appendChild(colElement);
  });
}

function related(relatedProducts) {
  const relatedContainer = document.querySelector(".related");
  relatedProducts.forEach((p) => {
    let priceFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(p.price);
    const colElement = document.createElement("div");
    colElement.className = "col";
    colElement.innerHTML = `
            <div class="card zi zi-hover">
                <a href="/product.html?id=${p.id}">
                    <div class="card-img">
                        <img src="${p.img}" class="img-fluid" alt="${p.name}" />
                    </div>
                </a>
                <div class="card-img text-center pt-1">
                    <div class="name fs-0875">${p.name}</div>
                    <div class="price my-3 fs-6">${priceFormat}</div>
                    <hr />
                    <div class="shop mt-3">
                        <button
                  type="button"
                  class="btn add-to-cart liveToastBtn fs-7"
                  onclick="cartAdd(${p.id})"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
                    </div>
                </div>
            </div>
        `;
    relatedContainer.appendChild(colElement);
  });
}

function zoom() {
  imageZoom.addEventListener("mousemove", (event) => {
    imageZoom.style.setProperty("--display", "block");
    let pointer = {
      x: (event.offsetX * 100) / imageZoom.offsetWidth,
      y: (event.offsetY * 100) / imageZoom.offsetHeight,
    };
    imageZoom.style.setProperty("--zoom-x", pointer.x + "%");
    imageZoom.style.setProperty("--zoom-y", pointer.y + "%");
  });
  imageZoom.addEventListener("mouseout", () => {
    imageZoom.style.setProperty("--display", "none");
  });
}

function get404() {
  const product = document.getElementById("main");
  product.innerHTML = ``;
  product.innerHTML = `<div class="container text-center pt-5">
      <div class="row">
        <div><img src="/img/404.png" alt="404 not found" /></div>
        <h1>Oops, liên kết này đã bị hỏng.</h1>
        <div>
          <p>Trang bạn đang cố gắng truy cập hiện không khả dụng.</p>
          <p>
            Đừng buồn nhé! Còn rất nhiều điều thú vị đang chờ bạn khám phá trên
            U Food!
          </p>
          <a class="btn btn-primary" href="/" role="button"
            >Quay lại trang chủ</a
          >
        </div>
      </div>
    </div>`;
}
function getDataProduct(p1, p2, p3) {
  const product = document.querySelector(".product");
  const navbar1 = document.querySelector(".navbar1");
  document.getElementById("menu1").innerHTML = `<p>${p1.description}</p>`;
  document.getElementById("weight").innerText = p1.information.weight;
  document.getElementById("dimensions").innerText = p1.information.dimensions;
  document.querySelector(".breadcrumb-active").textContent = p1.name;
  let p1Price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(p1.price);
  let p2Price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(p2.price);
  let p3Price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(p3.price);
  product.innerHTML = `<div class="col-md-6">
  <div
    id="imageZoom"
    style="--url: url('${p1.img}'); --zoom-x: 0%; --zoom-y: 0%; --display: none"
  >
    <img src="${p1.img}" alt="${p1.name}" class="img-fluid" />
  </div>
</div>
<div class="col-md-6">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <span class="badge-in-stock">CÒN HÀNG</span>
    <div class="product-navigation">
      <a
        class="btn btn-pre"
        href="/product.html?id=${p2.id}"
        role="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-html="true"
        data-bs-title='<div class="card" style="max-width: 240px;">
          <div class="row g-0">
            <div class="col-4">
              <img src="${p2.img}" class="img-fluid rounded-start">
            </div>
            <div class="col-8 text-center">
              <p class="card-text product-name">${p2.name}</p>
              <p class="card-text product-price">${p2Price}</p>
            </div>
          </div>
        </div>'
      >
        Trước
      </a>

      <a
        class="btn btn-next"
        href="/product.html?id=${p3.id}"
        role="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-html="true"
        data-bs-title='<div class="card" style="max-width: 240px;">
            <div class="row g-0">
              <div class="col-4">
                <img src="${p3.img}" class="img-fluid rounded-start">
              </div>
              <div class="col-8 text-center">
                <p class="card-text product-name">${p3.name}</p>
                <p class="card-text product-price">${p3Price}</p>
              </div>
            </div>
          </div>'
      >
        Tiếp
      </a>
    </div>
  </div>
  <h2 class="product-name">${p1.name}</h2>
  <p class="product-price fs-4">${p1Price}</p>
  <p class="product-description">${p1.description}</p>
  <p>Số lượng: ${p1.quantity}</p>

  <div class="d-flex align-items-center mb-3">
    <input
      class="form-control me-3"
      style="width: 70px"
      type="number"
      value="1"
      min="1"
      max="${p1.quantity}"
    />
    <button
                  type="button"
                  class="btn add-to-cart liveToastBtn fs-7"
                  onclick="cartAdd(${p1.id})"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
  </div>
  <div class="d-flex mb-3">
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    >
      <i class="bi bi-heart"></i> Thêm vào danh sách yêu thích
    </button>
  </div>
  <p class="product-meta">SKU:</p>
  <p class="product-meta">Danh mục: <a href="#">${p1.type}</a></p>
</div>
`;
  navbar1.innerHTML = `<div class="container-fluid">
          <a class="navbar-brand d-flex">
            <img
              src="${p1.img}"
              class="img-fluid m-1 border"
              alt=""
              style="max-height: 50px"
            />
            <div class="m1 ps-2">
              <p>Bạn đang xem: ${p1.name} <br />${p1Price}</p>
            </div>
          </a>
          <button
                  type="button"
                  class="btn btn-warning add-to-cart liveToastBtn fs-7"
                  onclick="cartAdd(${p1.id})"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
        </div>`;
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

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
