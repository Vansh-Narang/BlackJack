let firstcard = 11
let secondcard = 12
let hasBlack = false
let isAlive = true
let sum = firstcard + secondcard
let message = ""
// let sumEL = document.getElementById('Sumel')
//Black jack game if equal to 21
//If more than 21 you lose
//And less than 21 you are nearly correct
let messageEL = document.getElementById('message-el')

//Use query selector instead of getELementById
// let sumEL = document.querySelector('#Sumel')//Using when sumel is a id
let sumEL = document.querySelector('.Sumel')//Using when sumel is class

//If else conditions
function StartGame() {
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
    messageEL.textContent = "Want to draw a Card ?"
}
//Cash out of money
//Whether you lose or win then we will track using a variable
//Boolean variable



