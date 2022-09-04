//never change
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBounsLife = true

adjustHealthBars(chosenMaxLife);

function reset() {
currentMonsterHealth = chosenMaxLife;
currentPlayerHealth = chosenMaxLife;
resetGame()
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage

  if (currentPlayerHealth <= 0 && hasBounsLife) {
    hasBounsLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerHealth
    alert('You would be dead but the bouns life saved you')
    setPlayerHealth(initialPlayerHealth)
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win!')
    reset()
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!')
    reset()
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Game Draw!')
    reset()
  }
}

// 공격 핸들러 
// 승패 조건 추가
function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  console.info(currentMonsterHealth, "MonsterHealth");
  console.info(damage, "PlayerAttack");
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Player Win!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Player Lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
}

// 내가 만들어본 플레이어 공격 이벤트 함수
// 작동은 된다
// 하지만 이런식으로 함수를 늘려나가면
// 가독성도 않좋고 불필요하게 코드의 길이가 늘어난다.
// function playerAttackHandler() {
//   const damage = dealPlayerDamage(ATTACK_VALUE);
//   currentPlayerHealth -= damage;
// }

// 일반공격 , 강공격 구분
function attackMonster(mode) {
  let maxDamage
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound()
}

// 일반 공격
function attackHandler() {
  attackMonster('ATTACK')
}

// 강 공격
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

// 플레이어 체력회복
function healHandler() {
  let healValue
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.")
    healValue = chosenMaxLife - currentPlayerHealth
  } else {
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(HEAL_VALUE)
  currentPlayerHealth += HEAL_VALUE
  endRound()
}

// 이벤트 핸들러
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healHandler)