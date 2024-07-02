// common
// const dropdown = document.querySelector(".dropdown");
// const select = dropdown.querySelector(".select");
// const caret = dropdown1.querySelector(".caret");
// const menu = dropdown1.querySelector(".menu");

$.get("../components/sidebar.html", function (header_var) {
  $("#sidebar").html(header_var);
});

$.get("../components/header.html", function (header_var) {
  $("#header").html(header_var);
});

function showDashboard() {
  $("#dashboard").toggleClass("active");
}

// select.addEventListener("click", () => {
//   select.classList.remove("select-clicked");
//   caret.classList.toggle("caret-rotate");
//   menu.classList.toggle("menu-open");
// });
