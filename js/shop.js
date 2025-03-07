const list = document.querySelector(".btn-list");
const grid = document.querySelector(".btn-grid");
const gridCont = document.querySelector(".grid-container");

const itemsPerPage = 12;
let currentPage = 1;
const productsContainer = document.querySelector(".products");
const paginationContainer = document.querySelector(".pagination");

displayProducts(productJs);
createPagination(productJs);
sort(productJs);
function productsCount(p1, p2, p3) {
  const label = document.getElementById("count");
  label.innerHTML = `Hiển thị ${p1} - ${p2} trong tổng số ${p3} kết quả`;
}

function displayProducts(p) {
  productsContainer.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProducts = p.slice(start, end);
  currentProducts.forEach((p) => {
    let priceFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(p.price);
    productsContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 pb-5">
          <div class="card zi zi-hover">
            <a class="overflow-hidden" href="/product.html?id=${p.id}">
                <img class="card-img-top" src="${p.img}" alt="${p.name}"  />
            </a>
            <div class="card-body text-center">
              <h3 class="card-title fs-7">${p.name}</h3>
              <p class="card-text price my-3 fs-6">${priceFormat}</p>
              <p class="card-text d-none product-description">
              ${p.description}
            </p>
            <hr />
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
  });
}

grid.addEventListener("click", () => {
  gridCont.classList.remove("list-view");
});

list.addEventListener("click", () => {
  gridCont.classList.add("list-view");
});

function createPagination(p) {
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(p.length / itemsPerPage);
  const liPre = document.createElement("li");
  liPre.classList.add("page-item");
  const aPre = document.createElement("a");
  aPre.classList.add("page-link");
  aPre.href = "#";
  aPre.textContent = "Quay lại";
  aPre.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts(p);
      createPagination(p);
    }
    const toastTriggers = document.querySelectorAll(".liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTriggers.length > 0 && toastLiveExample) {
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTriggers.forEach((toastTrigger) => {
        toastTrigger.addEventListener("click", () => {
          toastBootstrap.show();
        });
      });
    }
  });
  if (currentPage === 1) {
    aPre.classList.add("d-none");
  }
  liPre.appendChild(aPre);
  paginationContainer.appendChild(liPre);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    if (i === currentPage) li.classList.add("active");
    const a = document.createElement("a");
    a.classList.add("page-link");
    a.href = "#";
    a.textContent = i;
    a.addEventListener("click", () => {
      currentPage = i;
      displayProducts(p);
      createPagination(p);
      const toastTriggers = document.querySelectorAll(".liveToastBtn");
      const toastLiveExample = document.getElementById("liveToast");
      if (toastTriggers.length > 0 && toastLiveExample) {
        const toastBootstrap =
          bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTriggers.forEach((toastTrigger) => {
          toastTrigger.addEventListener("click", () => {
            toastBootstrap.show();
          });
        });
      }
    });
    li.appendChild(a);
    paginationContainer.appendChild(li);
  }

  const liNext = document.createElement("li");
  liNext.classList.add("page-item");
  const aNext = document.createElement("a");
  aNext.classList.add("page-link");
  aNext.href = "#";
  aNext.textContent = "Tiếp theo";
  aNext.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(p);
      createPagination(p);
    }
    const toastTriggers = document.querySelectorAll(".liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTriggers.length > 0 && toastLiveExample) {
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTriggers.forEach((toastTrigger) => {
        toastTrigger.addEventListener("click", () => {
          toastBootstrap.show();
        });
      });
    }
  });
  if (currentPage === totalPages) {
    aNext.classList.add("d-none");
  }
  liNext.appendChild(aNext);
  paginationContainer.appendChild(liNext);
}

function sort(p) {
  document.getElementById("sortSelect").addEventListener("change", function () {
    if (this.value === "lowToHigh") {
      const lowToHighProduct = p.sort((a, b) => a.price - b.price);
      displayProducts(lowToHighProduct);
    } else if (this.value === "highToLow") {
      const highToLowProduct = p.sort((a, b) => b.price - a.price);
      displayProducts(highToLowProduct);
    } else if (this.value === "default") {
      displayProducts(p);
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
