let hand = ["Rock","Paper","Scissors"]
let winnerEl = document.getElementById("winner-el")
let result1 = document.getElementById("result1-el")
let result2 = document.getElementById("result2-el")
let player = {
    name: "Bulongo",
    hand: "",
    myHand: function() {
        this.hand = hand[Math.floor(Math.random() * hand.length)]
    }
}

let player2 = {
    name: "Mooka",
    hand: "",
    myHand: function(){
        this.hand = hand[Math.floor(Math.random() * hand.length)]
    }
}

// make it that there are 2 buttons with the names of the players and when they click
// the results come out with accurate information to wheover clicked. Eg if you click
// Mooka and Mooka loses, it should say Mooka has lost and what she chose
// plus later give them something to choose so that it is more interactive

function playHand(){
    player.myHand()
    player2.myHand()
    winnerEl.textContent = "WINNER: "

    if(player.hand === player2.hand){
        result1.textContent = "Tie, you both chose " + player.hand + ". Try again"
        result2.textContent = null
        // no need to put winnerEl, only when you have a winner
        //Otherwise being written up there wouldnt be a big deal.
    }else if(player.hand === "Rock" && player2.hand === "Paper"){
        //so I gave each item something to print on its own line
        //winner,player1,player2 with their individual results
        result1.textContent = player.name + ":" + player.hand
        result2.textContent = player2.name + ":" + player2.hand
        winnerEl.textContent += player2.name
    }else if(player.hand === "Paper" && player2.hand === "Scissors"){
        result1.textContent = player.name + ":" + player.hand
        result2.textContent = player2.name + ":" + player2.hand 
         winnerEl.textContent += player2.name
    }else if(player.hand === "Scissors" && player2.hand ==="Rock"){
        result1.textContent = player.name + ":" + player.hand 
        result2.textContent = player2.name + ":" + player2.hand
        winnerEl.textContent += player2.name
    }else if(player2.hand === "Rock" && player.hand === "Paper"){
        result1.textContent = player.name + ":" + player.hand 
        result2.textContent = player2.name + ":" + player2.hand
        winnerEl.textContent += player.name
    }else if(player2.hand === "Paper" && player.hand === "Scissors"){
        result1.textContent = player.name + ":" + player.hand
        result2.textContent = player2.name + ":" + player2.hand
        winnerEl.textContent += player.name
    }else if(player2.hand === "Scissors" && player.hand ==="Rock"){
        result1.textContent = player.name + ":" + player.hand
        result2.textContent = player2.name + ":" + player2.hand
        winnerEl.textContent += player.name
    }


    // resultsEl.textContent += player.name + ": " +player.hand
    // resultsEl.textContent += player2.name + ": " + player2.hand

}