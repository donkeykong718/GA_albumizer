// Do not modify
// We will be mimicking a slow-loading web site. To enhance user experience, we will
// provide the user with some placeholder cards and animations while we mimic the
// page loading.
const loadingTime = setTimeout(() => {
  removePlaceholderCards();
  displayLoadedData();
}, 3000);
// Do not modify the above ^^^^^^

// BEGIN YOUR WORK BELOW!
// In order to complete this assignment you will have access to an array called data.
console.log(data);

// 1. Using const, create a variable called loadingCards and use querySelectorAll to save all of the DOM elements with the class name 'card-container'

const loadingCards = document.querySelectorAll(`.card-container`);

// console.log(loadingCards);
// 2. Using const, create a variable called 'cardList' that selects the ul with the class of 'card-list'

const cardList = document.querySelectorAll(`ul.card-list`)[0];
// console.log(cardList);

function removePlaceholderCards() {
  // 3. Using a for loop, loop through each of the loadingCards and remove it from the page.
  for (let i = 0; i < loadingCards.length; i++) {
    loadingCards[i].remove();
  }
}

function displayLoadedData() {
  // 4. Using a for loop, loop through all of the items in the data array.
  // console.log each item -- taking a look inside of each object, we can see the data we will be using.
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    // STAY INSIDE THE FOR LOOP. We need to create a few elements to build the boilerplate for our styling.

    // 5. Create five new divs and save each to a const variable.
    // The div names should be: cardContainer, card, filterDiv, cardHeader, and cardBody

    const cardContainer = document.createElement(`div`);
    const card = document.createElement(`div`);
    const filterDiv = document.createElement(`div`);
    const cardHeader = document.createElement(`div`);
    const cardBody = document.createElement(`div`);

    // 6. Using appendChild, append cardContainer to the cardList defined above.

    cardList.appendChild(cardContainer);

    // If this works, you will be able to inspect the page and see that the cardList has a number of empty divs.

    // 7. Using appendChild, append the div called card to cardContainer.

    cardContainer.appendChild(card);

    // 8. Using appendChild, append the filterDiv to the card div.

    card.appendChild(filterDiv);

    // We can now start to add details to our cards.

    // 9. Set the inner text of cardHeader to the current data[i].title

    cardHeader.innerText = data[i].title;

    // 10.Using appendChild, append cardHeader and cardBody to the filterDiv.

    filterDiv.appendChild(cardHeader);
    filterDiv.appendChild(cardBody);

    // At this point we should have a bunch of divs with no styling and not a lot of detail.

    // 11. Using classList, add the class 'card-container' to the const cardContainer.

    cardContainer.classList.add(`card-container`);

    // 12. Using classList, add the class 'card' to the const card.

    card.classList.add(`card`);

    // 13. Using classList, add the class 'filter' to the const filterDiv.

    filterDiv.classList.add(`filter`);

    // 14. Using classList, add the class 'header' to the const cardHeader.

    // 15. Using classList, add the class 'card-body' to the const cardBody.

    // 16. Using the style property, add a background image to the card using data[i].img_url
  
    // BONUS SECTION //

    /// UNCOMMENT TO ATTEMPT THE BONUS
    // cardBody.classList.add("details");
    // card.addEventListener("mouseenter", showDetails);
    // card.addEventListener("mouseleave", removeDetails);

    // BONUS 1:
    // Try to display the rest of the details in the card body. These are set to only display on hover. Try to add some classes and style it how you would like!

    // BONUS 2:
    // Add your favorite albums to the data.js file. You can hard-code your data there.

    // FOR LOOP SHOULD CLOSE HERE!
  
    cardHeader.classList.add(`header`);
  
    // 15. Using classList, add the class 'card-body' to the const cardBody.

    cardBody.classList.add(`card-body`);

    // 16. Using the style property, add a background image to the card using data[i].img_url

    card.style.backgroundImage = `url(${data[i].img_url})`;

    // BONUS SECTION //

    /// UNCOMMENT TO ATTEMPT THE BONUS
    cardBody.classList.add("details");
    card.addEventListener("mouseenter", showDetails);
    card.addEventListener("mouseleave", removeDetails);

    // BONUS 1:
    // Try to display the rest of the details in the card body. These are set to only display on hover. Try to add some classes and style it how you would like!
    
    cardBody.innerText = `${data[i].artist} \n Released on ${data[i].releaseDate}`;

    // BONUS 2:
    // Add your favorite albums to the data.js file. You can hard-code your data there.

  // FOR LOOP SHOULD CLOSE HERE!
  
  }
}

// Functions for bonus
function showDetails() {
  this.children[0].children[1].classList.remove("details");
}

function removeDetails() {
  this.children[0].children[1].classList.add("details");
}
