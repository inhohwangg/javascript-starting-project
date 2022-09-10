const startGameBtn = document.getElementById('start-game-btn')

function startGame() {
  console.log('Game is start...')
}

const person = {
  name: 'Max',
  greet : function greet() {
    console.log('Hello there!')
  }
}

person.greet()

startGameBtn.addEventListener('click', startGame)