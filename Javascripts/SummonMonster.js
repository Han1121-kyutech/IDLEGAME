// // 敵のデータをランダムに取得する関数
// function RandomGetEnemys() {
//   const index = Math.floor(Math.random() * Enemys.length);
//   return Enemys[index];
// }

// ランダムで取得した敵を生成する関数
function summonEnemys() {
  const tenmplate = Enemys[Math.floor(Math.random() * Enemys.length)];
  currentEnemys = new EnemyStatus(
    tenmplate.name,
    tenmplate.level,
    tenmplate.maxHp,
    tenmplate.atk,
    tenmplate.def,
    tenmplate.xp / 100,
    tenmplate.rarity,
    tenmplate.gold,
  );
  renderAll();
}

// function summonEnemys() {
//   const index = Math.floor(Math.random() * Enemys.length);
//   const template = Enemys[index];

//   currentEnemys = new EnemysStatus(
//     template.name,
//     template.level,
//     template.maxHp,
//     template.atk,
//     template.def,
//     template.xp / 100,
//     template.rarity,
//     template.gold
//   );

//   renderAll();
// }
