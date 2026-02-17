function HerosLose() {
  if (Heros[0].hp <= 0) {
    alert("勇者は敗北した...");
    renderAll();
  }
}

function EnemysLose() {
  if (currentEnemys.hp <= 0) {
    alert("勇者は" + currentEnemys.name + "に勝利した!");
    alert("勇者は" + currentEnemys.xp / 100 + "XPを獲得した!");
    gameState.gold += currentEnemys.gold;
    alert("勇者は" + currentEnemys.gold + "Gを獲得した!");
    XPSystem();
    summonEnemys();
    renderAll();
  }
}
