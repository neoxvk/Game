let cardsList = []
let sum = 0
let hasBlackJack = false
let hasAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card")
//let playerName = "Vivek"
//let playerMoney = "125"   So instead of declaring like this we can create an object for this

let player = {
    name : "Vivek",
    cash: 140
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+player.cash



function getRandomCard(){
    //let randomNo = Math.floor(Math.random() * 10 ) + 2   This is one method
    let randomNo = Math.floor(Math.random() * 13 ) + 1
if(randomNo >10){
    return 10
}else if(randomNo===1){
    return 11
}
else{
    return randomNo
}

    
}

function startGame(){
    hasAlive = true
    //We are defining these cards here because initially before the game starts the values should be null
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsList = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
if(sum <= 20){
    message = "Do you want to draw another card?"
    //messageEl.textContent = message
}
else if(sum===21)
{
    message = "Yayy! You got the BlackJack!"
    //messageEl.textContent = message
    

}
else {
    message = "You are out of the game!"
    //messageEl.textContent = message
    hasAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum:"+sum
    //cardsEl.textContent = "Cards: "+ cardsList[0]+" "+cardsList[1]
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cardsList.length; i++){
        cardsEl.textContent += cardsList[i] + " " 
  
  }
}


function newCard(){

    if(hasAlive===true && hasBlackJack===false){
        let thirdNum = getRandomCard()
        sum += thirdNum;
        cardsList.push(thirdNum)
        renderGame()
    }
}



