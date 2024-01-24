const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// array added to keep track of cards flipped
let flippedCards = [];


// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

// set variables for the clicked element and the color of its class
  let clickedDiv = event.target;
  let color = clickedDiv.classList.value

  // add the flipped cards to an array
  // flippedCards.push(clickedDiv);


  // change color to class
  clickedDiv.style.backgroundColor = color


  flippedCards.push(clickedDiv);

  if(flippedCards[0] === flippedCards[1]){
    console.log("don't click the same card twice in a row");
    flippedCards[0].style.backgroundColor = 'white';
    flippedCards = [];
  }

  console.log(flippedCards);
  // okay so I have an array saving each of the flipped cards, now I want them to flip back over unless they match

  if(flippedCards.length > 1){
    if (flippedCards.length > 2){
      console.log("only click 2 cards at a time");
      flippedCards[0].style.backgroundColor = 'white';
      flippedCards[1].style.backgroundColor = 'white';
      flippedCards[2].style.backgroundColor = 'white';
      flippedCards = [];
    }
    if(flippedCards[0].classList.value === flippedCards[1].classList.value){
        // do something to make sure the same card can't be clicked twice
        // make 

        // reset flipped cards
      flippedCards = [];

    } else {
        // if the cards do not match, change them back to white after one second
      setTimeout(function(){
        flippedCards[0].style.backgroundColor = "white";
        flippedCards[1].style.backgroundColor = "white";
        flippedCards = [];
      },1000)
    } 
  }
};
  // alert when all divs have been clicked

  // define divs so I can look through them all to make sure none are white at the end
// const divs = document.querySelectorAll("div");

// function gameOver() {
//   let allColored = true;

//   for(let div of divs){
//     if(divs[x].style.backgroundColor === 'white'){
//       allColored = false;
//     } 
//   }
  
//   if(allColored){
//     console.log('you made it to all color')
//     alert("You won the game");
//   } 
// }




// when the DOM loads
createDivsForColors(shuffledColors);
