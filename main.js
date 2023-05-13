
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.add("visible");
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("header").classList.remove("visible");
  }
  prevScrollPos = currentScrollPos;
};

 // Get the button and dialog box elements
var btn = document.getElementById("btn");
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
