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

attackBtn.addEventListener("click", attackHandler);
