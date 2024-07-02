// filter one
const dropdown1 = document.querySelector(".dropdown1");
const select1 = dropdown1.querySelector(".select1");
const caret1 = dropdown1.querySelector(".caret1");
const menu1 = dropdown1.querySelector(".menu1");
const options1 = dropdown1.querySelectorAll(".menu1 li");
const selected1 = dropdown1.querySelector(".selected1");

// filter two
const dropdown2 = document.querySelector(".dropdown2");
const select2 = dropdown2.querySelector(".select2");
const caret2 = dropdown2.querySelector(".caret2");
const menu2 = dropdown2.querySelector(".menu2");
const options2 = dropdown2.querySelectorAll(".menu2 li");
const selected2 = dropdown2.querySelector(".selected2");

// filter three
const dropdown3 = document.querySelector(".dropdown3");
const select3 = document.querySelector(".select3");
const caret3 = document.querySelector(".caret3");
const menu3 = document.querySelector(".menu3");
const options3 = document.querySelectorAll(".menu3 li");
const selected3 = document.querySelector(".selected3");

select1.addEventListener("click", () => {
  select1.classList.toggle("select-clicked");
  caret1.classList.toggle("caret-rotate");
  menu1.classList.toggle("menu-open");
  menu2.classList.remove("menu-open");
});
options1.forEach((option) => {
  option.addEventListener("click", () => {
    selected1.innerHTML = option.innerHTML;
    select1.classList.remove("select-clicked");
    caret1.classList.remove("caret-rotate");
    menu1.classList.remove("menu-open");
    options1.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});

select2.addEventListener("click", () => {
  select2.classList.toggle("select-clicked");
  caret2.classList.toggle("caret-rotate");
  menu2.classList.toggle("menu-open");
  menu1.classList.remove("menu-open");
});
options2.forEach((option) => {
  option.addEventListener("click", () => {
    selected2.innerHTML = option.innerHTML;
    select2.classList.remove("select-clicked");
    caret2.classList.remove("caret-rotate");
    menu2.classList.remove("menu-open");
    options2.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});

select3.addEventListener("click", () => {
  select3.classList.toggle("select-clicked");
  caret3.classList.toggle("caret-rotate");
  menu3.classList.toggle("menu-open");
  menu1.classList.remove("menu-open");
});
options3.forEach((option) => {
  option.addEventListener("click", () => {
    selected3.innerHTML = option.innerHTML;
    select3.classList.remove("select-clicked");
    caret3.classList.remove("caret-rotate");
    menu3.classList.remove("menu-open");
    options3.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});



// Select all elements with the class openModel
let openModels = document.querySelectorAll(".openModel");

// Select all elements with the class icon
let icons = document.querySelectorAll(".icon");

// Add click event listeners to each element with the class openModel
openModels.forEach(function(openModel) {
    openModel.addEventListener("click", function() {
        // Show all elements with the class modals
        let modals = document.querySelectorAll(".modal");
        modals.forEach(function(modal) {
          console.log("hello")
            modal.style.display = "block";
        });
    });
});

// Add click event listeners to each element with the class icon
icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        // Hide all elements with the class modals
        let modals = document.querySelectorAll(".modal");
        modals.forEach(function(modal) {
            modal.style.display = "none";
            console.log("why")
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  // Select the button with class "okay"
  let okayButton = document.querySelector(".okay");

  // Select both modals
  let modal1 = document.querySelector(".model-1");
  let modal2 = document.querySelector(".model-2");

  // Add click event listener to the "okay" button
  okayButton.addEventListener("click", function() {
    // Hide modal-1 and show modal-2
    modal1.style.display = "none";
    modal2.style.display = "block";
  });

  // Optionally, add functionality to close modal-2
  let closeModel2Button = document.querySelector(".model-2 .close-model");
  if (closeModel2Button) {
    closeModel2Button.addEventListener("click", function() {
      modal2.style.display = "none";
      // You may want to reset modal-1 to be visible again
      // modal1.style.display = "block";
    });
  }
});

// for tooltip
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const tooltipElements = document.querySelectorAll('.tooltip');

  tooltipElements.forEach(el => {
      const title = el.getAttribute('data-title');
      if (title) {
          const tooltipBox = document.createElement('div');
          tooltipBox.classList.add('tooltip-box');
          tooltipBox.innerHTML = title.split('|').join('<br>'); // Replace | with <br>
          el.appendChild(tooltipBox);

          el.addEventListener('mouseenter', function () {
              tooltipBox.style.opacity = '1';
          });

          el.addEventListener('mouseleave', function () {
              tooltipBox.style.opacity = '0';
          });
      }
  });
});




