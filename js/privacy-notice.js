const navItems = document.querySelectorAll('[id^="navsection"]');
navItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    const deactive = document.querySelectorAll('[id^="navsection"]');
    deactive.forEach((id) => {
      id.classList.remove("active");
    });
    this.classList.add("active");
    const targetSection = document.getElementById(`section${index + 1}`);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document
  .getElementById("content-button")
  .addEventListener("click", function () {
    const deactive = document.querySelectorAll('[id^="navsection"]');
    deactive.forEach((id) => {
      id.classList.remove("active");
    });
  });
