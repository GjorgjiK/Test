var headers = document.querySelectorAll(".accordion-header");
var panels = document.querySelectorAll(".accordion-panel");
var icons = document.querySelectorAll(".accordion-header img");

headers[0].classList.add("active");
panels[0].classList.add("show");
headers[0].querySelector("img").setAttribute("src", "./images/arrow-up.png");

headers.forEach(function (header) {
  header.addEventListener("click", function () {
    if (this.nextElementSibling.classList.contains("show")) {
      this.classList.remove("active");
      this.nextElementSibling.classList.remove("show");
      this.querySelector("img").setAttribute("src", "./images/arrow-down.png");
    } else {
      headers.forEach(function (header) {
        header.classList.remove("active");
        header
          .querySelector("img")
          .setAttribute("src", "./images/arrow-down.png");
      });
      panels.forEach(function (panel) {
        panel.classList.remove("show");
      });
      this.classList.add("active");
      this.nextElementSibling.classList.add("show");
      this.querySelector("img").setAttribute("src", "./images/arrow-up.png");
    }
  });
});

// click big button
function redirectToBoxes() {
  window.location.href = "#boxes";
}
