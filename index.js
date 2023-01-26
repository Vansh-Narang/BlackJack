let firstcard = getRandomCard()
let secondcard = getRandomCard()
let hasBlack = false
let isAlive = true
let sum = firstcard + secondcard
let message = ""

/*******************
 * Array
 * 
 */
let cards = [firstcard, secondcard]//Array

//Array can push
//Array can pop


// let sumEL = document.getElementById('Sumel')
//Black jack game if equal to 21
//If more than 21 you lose
//And less than 21 you are nearly correct
let messageEL = document.getElementById('message-el')
let Cardsel = document.getElementById('Cards-el')
//Use query selector instead of getELementById
// let sumEL = document.querySelector('#Sumel')//Using when sumel is a id
// let sumEL = document.querySelector('.Sumel')//Using when sumel is class
let sumEL = document.querySelector('.Sumel')//new page

//If else conditions
function getRandomCard() {
    return 5
}
function startGame() {
    rendergame()
}
function rendergame() {
    //only tells two cards so we need array
    // Cardsel.textContent = "Cards :" + " " + cards[0] + " " + cards[1]
    //For loops
    Cardsel.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        Cardsel.textContent += " " + cards[i]
    }

    sumEL.textContent = "Sum :" + " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card "
    }
    else if (sum === 21) {
        hasBlack = true

        message = "You won "
    }
    else {
        isAlive = false
        message = "You lose "
    }
    messageEL.textContent = message
}
function NewCard() {
    let thirdcard = getRandomCard()
    sum += thirdcard
    cards.push(thirdcard)
    rendergame();
}

//Cash out of money
//Whether you lose or win then we will track using a variable
//Boolean variable


// //For loop
// for (let count = 1; count < 11; count++) {
//     console.log(count)
// }



