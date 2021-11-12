let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
 return Math.floor(Math.random() * 10)
}
target = generateTarget()
let compareGuesses = (human, computer, target) =>{
  let humScore = Math.abs(human - target)
  let compScore = Math.abs(computer - target)
  if (humScore <= compScore) {
    return true
  } else {
    return false
  }
}

const updateScore = string => {
  if ('computer') {
    computerScore ++
  }
  if ('human') {
    humanScore ++
  }
}

const advanceRound = () => {
  currentRoundNumber ++
}