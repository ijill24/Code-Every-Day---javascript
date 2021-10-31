//User selects paper, rock, scissors
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
  } else {
    console.log('This is not a valid response.');
  }
  }
  
  //computer selects paper, rock, scissors
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'paper';
        break;
      case 1:
        return 'rock';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie.'; 
    }
    //User chooses rock
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer wins!';
      } else {
        return 'The human wins!';
      } 
    }
    //User chooses paper
    if (userChoice === 'paper') {
      if (computerChoice ==='scissors'){
        return 'The computer wins!';
      } else {
        return 'The human wins!';
      }
    }
    //User chooses scissors
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer wins!';
      } else {
        return 'The human wins!';
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice);
    console.log('The computer chose ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();