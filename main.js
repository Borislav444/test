function myFunction() {
  let icon = document.getElementById("myTopnav");
  if (icon.className === "nav_topnav") {
    icon.className += " responsive";
  } else {
    icon.className = "nav_topnav";
  }
}

const newCard = document.getElementById("addCard");
const cardSection = document.getElementById("newCard");

let currentItem = 6;

newCard.onclick = () => {
  let boxes = [...document.querySelectorAll(".main_section .card")];
  for (var i = currentItem; i < currentItem + 2; i++) {
    boxes[i].style.display = "inline-block";
  }
};
