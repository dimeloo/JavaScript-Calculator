// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js

// Intro
// Ask for user name
// Ask what a operation they want to complete
// Ask user for first number
// Ask user for second number
// complete operation / display output
// ask user if they want to run again or exit
// exit statement

// Welcome to the best calculator on the planet

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
  return (subtractResult = firstNumber - secondNumber)
}

function multiply(firstNumber, secondNumber) {
  return (multiplyResult = firstNumber * secondNumber)
}

function divide(firstNumber, secondNumber) {
  return (divideResult = firstNumber / secondNumber)
}

const prompt = require('prompt-sync')()

const name = prompt('.....Who are you? Please give me your name: ')
console.log(`Greetings ${name}! I hope you are ready for something special.`)

let userAnswer = 'No' 

do {


  const operation = prompt('Which mathematical operation do you want to use? ')
  console.log(`This is your operator ${operation}`)

  const num1 = prompt('Give me your first number: ')
  const num2 = prompt('Give me your second number: ')
  console.log(`Your first number is ${num1} and your second number is ${num2}...let's see what we can do with this`)

  const firstNumber = Number(num1)
  const secondNumber = Number(num2)

  if (operation === '+') {
    console.log('Result:', add(firstNumber, secondNumber))
  } else if (operation === '-') {
    console.log('Result:', subtract(firstNumber, secondNumber))
  } else if (operation === '*') {
    console.log('Result:', multiply(firstNumber, secondNumber))
  } else if (operation === '/') {
    console.log('Result:', divide(firstNumber, secondNumber))
  } else {
    console.log(`I'm not sure what you are trying to accomplish... I don't know how to use this: ${operation}`)
  }
 
  userAnswer = prompt('Would you like to go again? Please enter Yes or No: ')

} while (userAnswer != 'No')

