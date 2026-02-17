function XPSystem() {
  Heros[0].xp -= currentEnemys.xp;
  LevelUp();
}
//   レベルアップ条件
function LevelUp() {
  if (Heros[0].xp <= 0) {
    Heros[0].hp = 100 * Heros[0].level + 20;
    Heros[0].xp = Heros[0].level * 120;
    Heros[0].level += 1;
    Heros[0].atk += 1;
    alert("勇者はレベルアップした!");
    renderAll();
  }
}
