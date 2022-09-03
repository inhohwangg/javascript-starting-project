//never change
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Game Draw!')
  }
}

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
// function playerAttackHandler() {
//   const damage = dealPlayerDamage(ATTACK_VALUE);
//   currentPlayerHealth -= damage;
// }

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

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

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

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healHandler)