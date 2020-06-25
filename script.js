let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Return random number for each round bwn 0-9
const generateTarget = () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1-num2);
}

const checkUserGuess = num => {
  if(num >9 || num < 0)
    alert("Input should be between 0 and 9")
}
const compareGuesses = (userGuess, computerGuess, TargetNumber) => {
  checkUserGuess(userGuess);
  if(userGuess === computerGuess)
    return true;
  else if(getAbsoluteDistance(TargetNumber,computerGuess)> getAbsoluteDistance(TargetNumber,userGuess))
    return true;
  else {
    return false;
  }
}

const updateScore = value => {
    if(value === 'human')
      humanScore++;
    if(value === 'computer')
      computerScore++;
}

const advanceRound = () => currentRoundNumber++;
