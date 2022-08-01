let outputAnswer = document.getElementById('screen-display')

function displayInput(buttonPressed) {
  if (outputAnswer.innerHTML === '0') {
    outputAnswer.innerHTML = buttonPressed
  } else {
    outputAnswer.innerHTML += buttonPressed
  }
}

function calculatingAnswer(outputAnswer) {
  let calculation = outputAnswer.innerHTML
  outputAnswer.innerHTML = stringMath(calculation)
}

function clearScreen() {
  outputAnswer.innerHTML = '0'
}
