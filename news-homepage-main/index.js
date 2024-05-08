const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar ul");
const nav_list = document.querySelector(".nav_list");
const close_menu = document.querySelector(".menu_close");
console.log(close_menu);

console.log(navbar);

menu.addEventListener("click", function () {
  this.style.display = "none";
  close_menu.style.display = "inline-block";
  nav_list.style.display = "block";
});

close_menu.addEventListener("click", function () {
  this.style.display = "none";
  nav_list.style.display = "none";
  menu.style.display = "inline-block";
});
