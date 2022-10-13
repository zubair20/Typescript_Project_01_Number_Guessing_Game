import inquirer from 'inquirer';

const numValidator = (num: number) => isNaN(num) ? "Please Enter a number" : true
let randNum = Math.round(Math.random() * 10)
const questions = [
  {
    type:'number',
    name: 'guess',
    message: 'Please guess a Number between 0 and 1: ',
    validate: numValidator
  }
]
const questionAgain = [
  {
    type:'confirm',
    name: 'qAgain',
    message: 'Would you like to guess again? '
  }
]
function askAgain(){
  inquirer
  .prompt(questionAgain)
  .then((answers) => {
    //console.log(answers)
    if(answers.qAgain){
      ask();
    }

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      console.log('Something went wrong')
    }
  });
}
function ask(){
  inquirer
  .prompt(questions)
  .then((answers) => {
    //console.log(answers)
    if(answers.guess === randNum){
      console.log('Congratulation!!! You won the game')
      return;
    }else if(answers.guess > randNum){
      console.log('OOOps!!! You guess is high')
    }else if(answers.guess < randNum){
      console.log('OOOps!!! You guess is low')
    }
    askAgain();

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      console.log('Something went wrong')
    }
  });
}

ask();