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

// 1. create a let called cards and use a querySelectorAll to save all of the dom elements with the class name 'card-container'

// 2. create a let called 'cardList' that selects the ul with the class of card-list

function removePlaceholderCards() {
  // 3. using a for loop loop through each of the loadingCards and remove them from the page.
}

function displayLoadedData() {
  // 4. Using a for loop, loop through all of the items in the data array console.log each item
  // taking a look inside of each object we can see the data we will be using.



    // STAY INSIDE THE FOR LOOP We need to create a few elements to build the boiler plate for our styling

    // 5. create a five new divs called and save each to a let
    // div name should be cardContainer, card, filterDiv, cardHeader, and cardBody

    // 6. using appendChild append cardContainer to the cardList let defined above
    // if this works you will be able to inspect the page amd see that the cardList has a number of empty divs

    // 7. using appendChild append the div card to cardContainer

    // 8. using appendChild append the filterDiv to the card div

    // we can now start to add details to our cards

    // 9. set the inner text of cardHeader to the current data[i].title


    // 10.using appendChild append cardHeader and cardBody to the filterDiv

    // At this point we should have a bunch of divs with no styling and not a lot of detail.

    // 11. using classList add the class 'card-container' to the let cardContainer

    // 12. using classList add the class 'card' to the let card

    // 13. using classList add the class 'filter' to the let filterDiv

    // 14. using classList add the class 'header' to the let cardHeader

    // 15. using classList add the class 'card-body' to the let cardBody

    // 15. using the style property add the add a background image to the card

    // BONUS SECTION //

    /// UNCOMMENT TO ATTEMPT THE BONUS
    // cardBody.classList.add("details");
    // card.addEventListener("mouseenter", showDetails);
    // card.addEventListener("mouseleave", removeDetails);

    // try to display the rest of the details in the card body these are set to only display on hover. try to add some classes and style it how you would like

    // bonus 2. Add your favorite albums to the data.js file. you can hard code your data there

  // FOR LOOP SHOULD CLOSE HERE!
}

// Functions for bonus
function showDetails() {
  this.children[0].children[1].classList.remove("details");
}

function removeDetails() {
  this.children[0].children[1].classList.add("details");
}
