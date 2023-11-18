const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const numbers = [1, 2, 3]
let counter = 0
let attemptsCounter = 0
const counterCard = document.querySelector('.counter')
counterCard.textContent = counter
let round = false
let target = Math.floor(Math.random() * 3) + 1
let targetCard = document.querySelector('.card' + target)
const choose = function (event) {
  if (!round) {
    round = true
    if (event.target.classList[0][4] != target) {
      numbers.forEach(number => {
        if (number != event.target.classList[0][4] && number !== target) {
          if (number === 1) {
            card1.style.background = 'red'
          } else if (number === 2) {
            card2.style.background = 'red'
          } else if (number === 3) {
            card3.style.background = 'red'
          }
        }
      })
    } else {
      let wrongPair = []
      numbers.forEach(number => {
        if (number !== target) {
          wrongPair.push(number)
        }
      })
      let shownCardNumber = wrongPair[Math.floor(Math.random() * 2)]
      if (shownCardNumber === 1) {
        card1.style.background = 'red'
      } else if (shownCardNumber === 2) {
        card2.style.background = 'red'
      } else if (shownCardNumber === 3) {
        card3.style.background = 'red'
      }
    }
  } else {
    targetCard.textContent = 'car'
    if (event.target.classList[0][4] == target) {
      counter++
    }
    setTimeout(() => {
      card1.style.background = 'tomato'
      card2.style.background = 'tomato'
      card3.style.background = 'tomato'
      card1.textContent = ''
      card2.textContent = ''
      card3.textContent = ''
    }, 1000)
    round = false
    target = Math.floor(Math.random() * 3) + 1
    targetCard = document.querySelector('.card' + target)
    attemptsCounter++
    counterCard.textContent = counter + '/' + attemptsCounter
  }
}

card1.addEventListener('click', (event) => choose(event))
card2.addEventListener('click', (event) => choose(event))
card3.addEventListener('click', (event) => choose(event))
