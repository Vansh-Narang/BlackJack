let firstcard = 11
let secondcard = 12
let hasBlack = false
let isAlive = true
let sum = firstcard + secondcard
let message = ""
//Black jack game if equal to 21
//If more than 21 you lose
//And less than 21 you are nearly correct

//If else conditions
if (sum <= 20) {
    message = "Do you want to draw a new card 😃"
}
else if (sum === 21) {
    hasBlack = true

    message = "You won 🎉"
}
else {
    isAlive = false
    message = "You lose 😭"
}

//Cash out of money
//Whether you lose or win then we will track using a variable
//Boolean variable


