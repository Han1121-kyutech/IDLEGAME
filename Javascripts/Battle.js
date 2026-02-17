// 攻撃関数(敵・味方併用可)
function attack(attacker, target) {
  if (attacker.atk - target.def <= 0) {
    alert(attacker.name + "の攻撃は" + target.name + "の防御力に弾かれた!");
    return false;
  } else {
    target.hp -= attacker.atk - target.def;
    if (target.hp < 0) {
      target.hp = 0;
    }
  }

  // 表示更新関数
  gameState.gold += currentEnemys.gold;
  renderAll();
}

// // 攻撃ボタン設定
// const attack_btn = document.getElementById("attack_Btn");
// // addEventListenerは、btnがクリックされたときに() => {~}の中の処理を実行する、という意味
// attack_btn.addEventListener("click", () => {
//   if (Heros[0].hp > 0 && currentEnemys.hp > 0) {
//     attack(Heros[0], currentEnemys);
//     attack(currentEnemys, Heros[0]);
//   } else {
//     HerosLose(Heros);
//     EnemysLose();
//   }
// });

// // 逃げるボタン設定
// const escape_btn = document.getElementById("escape_Btn");
// escape_btn.addEventListener("click", () => {
//   summonEnemys();
// });
