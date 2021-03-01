// Do not modify
function displayLoaded() {}
// Do not modify
const loadingTime = setTimeout(() => {
  removePlaceholderCards();
  displayLoadedData();
}, 3000);

// In order to complete this assignment you will have access to an array called data.
// We will be mimicking a slow loading web site. To enhance use experience we will
// provide the user with some place holder cards and animations while we mimic the
// page loading
console.log(data);

// 1. create a var called cards and use a querySelectorAll to save all of the dom elements with the class name 'card'
let loadingCards = document.querySelectorAll(".card");

// 2. create a var called 'cardList' that selects the ul with the class of card-list
let cardList = document.querySelector(".card-list");

function removePlaceholderCards() {
  // 3. using a for loop loop through each of the loadingCards and remove them from the page.
  for (let i = 0; i < loadingCards.length; i++) {
    loadingCards[i].remove();
  }
}

function displayLoadedData() {
  data.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let header = document.createElement("div");
    header.classList.add("header");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);
    header.innerText = item.title;
    card.appendChild(header);
    card.appendChild(img);
    cardList.appendChild(card);
  });
}
