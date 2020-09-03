const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl");
var elements = document.querySelectorAll("#list li");
var navlist = document.getElementById("navlist");




function fadeIn(el) {
  el.classList.add("show");
  el.classList.remove("hide");
}

function fadeOut(el) {
  el.classList.add("hide");
  el.classList.remove("show");
}
btn.addEventListener("click", (evt) => {
//   console.log(elements);

  if (menu.className.indexOf("active") === -1) {
    sendfront();
    for (let i = 0; i < elements.length; i++) {
      setTimeout(function () {
        fadeIn(elements[i]);
      }, i * 100);
    }
  } else {
    // navlist.classList.add("back")
    for (let j = 0; j < elements.length; j++) {
      setTimeout(function () {
        fadeOut(elements[j]);
      }, j * 100);
    }
    sendback();
  }
});
function sendfront() {
  menu.classList.add("active");
  navlist.classList.add("front");
}
function sendback() {
  menu.classList.remove("active");
  navlist.classList.remove("front");
}
