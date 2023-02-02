// function myFunction() {
//   alert("Hello from a static file!");
// }

// myFunction();

// trying to select all the elements who have empty inner html(no info
// in django DB and hide them)

// you know what, for now I am leaving this challenge. I will make it
// so that majority of the fiedls would be mandatory, so the site will
// look clean and finished and all the info about the animals will be
// there.

// var fieldDiv = document.getElementsByClassName("zdarova");

// for (var i = 0; i < fieldDiv.length; i++) {
//   // fieldDiv[i].innerHTML = "oplia";
//   // console.log("zdrf");
//   if (fieldDiv[i].innerHTML.length == 0) {
//     fieldDiv[i].innerHTML = "Some sample content";
//   } else {
//     console.log("nepavyko");
//   }
// }

// var laukelis = document.("testukas");
// var laukelio_laukelis = document.getElementsByTagName("p");

// if (laukelio_laukelis.innerHTML.length == 0) {
//   laukelio_laukelis.innerHTML = "AAA";
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// added click event listened to EVERY element that has class
// active(mostly hamburger stuff)
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});



// scroll to the top button

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
