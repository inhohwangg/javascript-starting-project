//never change
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  console.info(currentMonsterHealth, "MonsterHealth");
  console.info(damage, "PlayerAttack");
  if (damage) {
    playerAttackHandler();
  }
  if (currentMonsterHealth <= 0) {
    alert("Player Win!");
  }
}

// 내가 만들어본 플레이어 공격 이벤트 함수
// function playerAttackHandler() {
//   const damage = dealPlayerDamage(ATTACK_VALUE);
//   currentPlayerHealth -= damage;
// }

attackBtn.addEventListener("click", attackHandler);
