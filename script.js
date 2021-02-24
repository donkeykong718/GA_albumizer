// Do not modify
function displayLoaded() {}
// Do not modify
const loadingTime = setTimeout(() => {
  displayLoaded();
}, 3000);

// In order to complete this assignment you will have access to an array called data.
// We will be mimicking a slow loading web site. To enhance use experience will will
// provide the user with some place holder cards and animations while we mimic the
// page loading
console.log(data);

// 1. Save all of the cards as an array of dom elements
let cards = document.querySelectorAll(".card");

// 2. using a for loop for each card in the cards array give the card the css class .loading-animation
for (let i = 0; i < cards.length; i++) {
  // cards[i].classList.add("loader");
}
