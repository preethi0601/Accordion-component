const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const hidden = document.querySelectorAll(".hidden");
const para = document.querySelectorAll(".content");

function toggle (i) {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    toggle(i);
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    toggle(i);
  });
}