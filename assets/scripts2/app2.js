const startGameBtn = document.getElementById('start-game-btn')

function startGame() {
  console.log('Game is start...')
}

// const person = {
//   name: 'Max',
//   greet : function greet() {
//     console.log('Hello there!')
//   }
// }

// person.greet()
// 객체에 대한 함수를 메서드라고 부른다

console.dir(startGame)

startGameBtn.addEventListener('click', startGame)