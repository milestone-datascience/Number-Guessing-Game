let output = document.querySelector('.output')
let input = document.querySelector('.numberContainer')
let hint = document.querySelector('.hint')
let currentScore = document.querySelector('.cs')
let bestScore = document.querySelector('.bs')

let cs = 20
let bs = 0

currentScore.innerHTML = `Current Score ${cs}`
bestScore.innerHTML = `Best Score ${bs}`

let compNumber = Math.round(Math.random() * 50) + 1

let incorrect = new Audio("sounds/incorrect.mp3")
let correct = new Audio("sounds/correct.mp3")
let gameOver = new Audio("sounds/game-over.mp3")




function guess() {
    let userNumber = Number(input.value)

    if (!userNumber) {
        hint.innerHTML = "Enter Valid Number"
        return
    }
    if (userNumber === compNumber) {
        handleCorrectUI(compNumber)
    }
    else {
        if (userNumber > compNumber) {
            handleIncorrectUI("Use Small Number")
        }
        else {
            handleIncorrectUI("Use Big Number")
        }
    }
    input.value = ""
}

function tryAgain() {
    compNumber = Math.round(Math.random() * 50) + 1
    output.innerHTML = "?"
    hint.innerHTML = "Please Guess the Number Again"
    cs = 20
}

function handleIncorrectUI(text) {
    hint.innerHTML = text
    cs = cs - 1
    currentScore.innerHTML = `Current Score ${cs}`
    document.querySelector("main").style.backgroundColor = "red"
    setTimeout(() => {
        document.querySelector("main").style.backgroundColor = "black"
    }, 1000)
    incorrect.play()

    if (cs === 0) {
        gameOver.play()
        setTimeout(() => {
            tryAgain()
        }, 2000)

    }
}

function handleCorrectUI(compNumber) {
    hint.innerHTML = `Correct Guess the number was ${compNumber}`
    bs = cs
    bestScore.innerHTML = `Best Score ${bs}`
    output.innerHTML = compNumber
    document.querySelector("main").style.backgroundColor = "green"
    correct.play()
}