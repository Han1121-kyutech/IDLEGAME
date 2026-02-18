// ゲーム全体の要素
let gameState = {
  gold: 0,
};

class CharacterStatus {
  constructor(name, level, hp, atk, def, xp) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.maxHp = hp;
    this.atk = atk;
    this.def = def;
    this.xp = xp * 100;
  }
}

class EnemyStatus extends CharacterStatus {
  constructor(name, level, hp, atk, def, xp, rarity, gold) {
    super(name, level, hp, atk, def, xp);
    this.rarity = rarity;
    this.gold = gold;
  }
}
// class HerosStatus {
//   //生まれた瞬間に持つステータス.これがないと「this.」ができない
//   constructor(name, level, hp, atk, def, xp) {
//     this.name = name;
//     this.level = level;
//     this.hp = hp;
//     this.maxHp = hp;
//     this.atk = atk;
//     this.def = def;
//     this.xp = xp * 100;
//   }
// }

const initialHeroData = new CharacterStatus("勇者", 1, 100, 100, 0, 2);

// class EnemysStatus {
//   constructor(name, level, hp, atk, def, xp, rarity, gold) {
//     this.name = name;
//     this.level = level;
//     this.hp = hp;
//     this.maxHp = hp;
//     this.atk = atk;
//     this.def = def;
//     this.xp = xp * 100;
//     this.rarity = rarity;
//     this.gold = gold;
//   }
// }

//ゲーム開始時に存在するキャラクターとステータス
// 名前、レベル、HP、攻撃、防御、XP
const Heros = [initialHeroData];

// 名前、レベル、HP、攻撃、防御、XP、レア度、お金
const Enemys = [
  new EnemyStatus("スライム", 1, 50, 5, 2, 1, 1, 1),
  new EnemyStatus("ゴブリン", 2, 80, 10, 10, 1.5, 2, 10),
  new EnemyStatus("ドラゴン", 3, 150, 20, 20, 25, 3, 50),
  new EnemyStatus("ゴールデンスライム", 4, 500, 50, 30, 20, 4, 200),
];

let currentEnemys = null;
// HTMLに勇者たちのステータスを自動表示する関数(引数大事！)
function HerosCharactersStatus(characters, containerId) {
  // HTMLのidを取得する(基本divの中に入ってる)
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  // characters(引数)の配列を1つずつ処理。charは1人分
  characters.forEach((char) => {
    // charのdivを作成する
    const div = document.createElement("div");
    // divの中にcharのステータスを表示する。<br>は改行
    // .innerHTMlと${~.~}はセットで使う。
    div.innerHTML = `
    名前: ${char.name}<br>
    レベル: ${char.level}<br>
    HP: ${char.hp}<br>
    攻撃力: ${char.atk}<br>
    防御力: ${char.def}<br>
    次のレベルまで: ${char.xp / 100} XP<br>
    `;
    // 作った<divをHTMLのcontainer(containerはHTMLの表示場所・入れ物)に追加する>
    container.appendChild(div);
  });
}

function EnemysCharactersStatus(characters, containerId) {
  // HTMLのidを取得する(基本divの中に入ってる)
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  // characters(引数)の配列を1つずつ処理。charは1人分
  characters.forEach((char) => {
    // charのdivを作成する
    const div = document.createElement("div");
    // divの中にcharのステータスを表示する。<br>は改行
    // .innerHTMlと${~.~}はセットで使う。
    div.innerHTML = `
    名前: ${char.name}<br>
    レベル: ${char.level}<br>
    HP: ${char.hp}<br>
    攻撃力: ${char.atk}<br>
    防御力: ${char.def}<br>
    レア度: ☆${char.rarity}<br>
    `;
    // 作った<divをHTMLのcontainer(containerはHTMLの表示場所・入れ物)に追加する>
    container.appendChild(div);
  });
}
