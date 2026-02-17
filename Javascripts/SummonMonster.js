// // 敵のデータをランダムに取得する関数
// function RandomGetEnemys() {
//   const index = Math.floor(Math.random() * Enemys.length);
//   return Enemys[index];
// }

// ランダムで取得した敵を生成する関数
function summonEnemys() {
  const index = Math.floor(Math.random() * Enemys.length);
  const tenmplate = Enemys[index];

  currentEnemys = new EnemysStatus(
    tenmplate.name,
    tenmplate.level,
    tenmplate.hp,
    tenmplate.atk,
    tenmplate.def,
    tenmplate.xp / 100,
    tenmplate.rarity,
    tenmplate.gold,
  );
  EnemysCharactersStatus([currentEnemys], "enemys_status");
}
