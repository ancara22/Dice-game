'use strict'

let dices = {
    0: "./img/Untitled-1-01.png",
    1: "./img/Untitled-1-02.png",
    2: "./img/Untitled-1-03.png",
    3: "./img/Untitled-1-04.png",
    4: "./img/Untitled-1-05.png",
    5: "./img/Untitled-1-06.png"
}


let player_box = document.querySelectorAll(".player_box"),
    players_score = document.querySelectorAll(".score p "),
    temp_score_players = document.querySelectorAll(".temp_score p "),
    dice = document.querySelector(".dice"),
    btn_roll = document.querySelectorAll("button")[1],
    btn_new = document.querySelectorAll("button")[0],
    btn_hold = document.querySelectorAll("button")[2];


function newGame() {
    temp_score_players[0].innerText = 0
    temp_score_players[1].innerText = 0
    players_score[0].innerText = 0
    players_score[1].innerText = 0
}
newGame()

btn_new.addEventListener("click", function() {
    newGame()
})


function calc(dice) {
    if (dice != 0) {
        if (player_box[0].classList.contains("active")) {
            let val = parseInt(temp_score_players[0].innerText)
            temp_score_players[0].innerText = val + dice + 1
        } else {
            let val = parseInt(temp_score_players[1].innerText)
            temp_score_players[1].innerText = val + dice + 1

        }
    }

}


function changePlayer() {
    if (player_box[0].classList.contains("active")) {
        player_box[0].classList.remove("active")
        player_box[0].classList.add("pasive")
        player_box[1].classList.remove("pasive")
        player_box[1].classList.add("active")
        temp_score_players[0].innerText = 0
    } else {
        player_box[1].classList.remove("active")
        player_box[1].classList.add("pasive")
        player_box[0].classList.remove("pasive")
        player_box[0].classList.add("active")
        temp_score_players[1].innerText = 0
    }

}


btn_roll.addEventListener("click", () => {
    let rand = Math.trunc(Math.random() * 6)

    dice.style.backgroundImage = `url( ${dices[rand]} )`
    if (rand == 0) {
        changePlayer()
    }

    calc(rand)


})

btn_hold.addEventListener("click", function() {
    if (player_box[0].classList.contains("active")) {
        players_score[0].innerText = temp_score_players[0].innerText
        changePlayer()

    } else {
        players_score[1].innerText = temp_score_players[1].innerText
        changePlayer()
    }



})