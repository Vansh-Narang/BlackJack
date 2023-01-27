// let randomnumber = Math.floor(Math.random() * 6) + 1
//it can give zero so 0 gives 1
//1 gives 2 
//so add +1
// random between 0 And 1 but not 1
//if muitliplied by 6 it will give 0.0000 to 5.9999(almost)
// let floatrandonumber = Math.floor(randomnumber)
// console.log(randomnumber)
let hasBlack = false
let isAlive = false
let sum = 0
let message = ""

/*******************
 * Array
 * 
 */
//CREATTING OBJECTS
let player = {
    Name: "Vansh",
    Chips: 145

}
let playerEl = document.getElementById("PlayerEl")
playerEl.textContent = player.Name + " " + player.Chips//Acessing using objects
let cards = []//Array

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



function startGame() {
    let firstcard = getRandomCard()//Generate Cards when Start game
    let secondcard = getRandomCard()
    isAlive = true
    cards = [firstcard, secondcard]
    sum += firstcard + secondcard
    rendergame()
}
//If else conditions
function getRandomCard() {
    //treat A as 11

    let randomnumber = Math.floor(Math.random() * 13) + 1
    if (randomnumber === 1)
        return 11
    else if (randomnumber === 11 || randomnumber === 12 || randomnumber === 13)
        return 10
    else
        return randomnumber
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
    if (isAlive && hasBlack === false) {
        let thirdcard = getRandomCard()
        sum += thirdcard
        cards.push(thirdcard)
        rendergame();
    }
    else {
        messageEL.textContent = "You Can't draw more Cards"
    }
}

//Cash out of money
//Whether you lose or win then we will track using a variable
//Boolean variable


// //For loop
// for (let count = 1; count < 11; count++) {
//     console.log(count)
// }


//Generate random numbers for cards

//When lose dont draw an new Card

