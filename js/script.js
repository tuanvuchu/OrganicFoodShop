const newProducts = productJs.filter((p) => p.tag.includes("new"));
const saleProducts = productJs.filter((p) => p.tag.includes("sale"));
const popularProduct = productJs.filter((p) => p.tag.includes("popular"));
const ratedProduct = productJs.filter((p) => p.tag.includes("top-rated"));
carousel(newProducts, "news");
carousel(saleProducts, "sales");
carousel(popularProduct, "populars");
carousel(ratedProduct, "top-rateds");
multiItemCarousel();

function carousel(product, carouselId) {
  const carouselInner = document.getElementById(carouselId);
  product.forEach((p, i) => {
    let priceFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(p.price);
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item" + (i == 0 ? " active" : "");
    carouselItem.innerHTML = `
        <div class="col me-3">
          <div class="card zi zi-hover">
            <a href="/product.html?id=${p.id}">
                <img class="card-img-top" src="${p.img}"  alt="${p.name}" />
            </a>
            <div class="card-img text-center pt-1">
              <div class="fs-7">${p.name}</div>
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
        </div>
      `;
    carouselInner.appendChild(carouselItem);
  });
}

function multiItemCarousel() {
  let mainSection = document.querySelector("main");
  let items = mainSection.querySelectorAll(".carousel .carousel-item");
  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
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
