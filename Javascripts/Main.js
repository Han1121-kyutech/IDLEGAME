// GameSystem.js      → データ定義
// Battle.js          → 戦闘ロジックのみ
// LoseSystem.js      → 勝敗判定のみ
// ShopSystem.js      → 強化のみ
// SummonMonster.js   → 敵生成のみ
// XPSystem.js        → レベル処理のみ
// Main.js            → UIとイベント管理のみ

function initGame() {
  HerosCharactersStatus(Heros, "heros_status");
  summonEnemys();
  setupEventListeners();
  renderAll();
  updateGold();
}

function processTurn() {
  if (currentEnemys.hp <= 0) {
    EnemysLose();
  }

  if (Heros[0].hp <= 0) {
    HerosLose();
  }
}
// shop
const shopBtn = document.getElementById("shop_Btn");
const shopArea = document.getElementById("shop_area");

shopBtn.addEventListener("click", () => {
  shopArea.style.display = shopArea.style.display === "none" ? "block" : "none";
});

const atkUpgradeBtn = document.getElementById("atk_upgrade");
const defUpgradeBtn = document.getElementById("def_upgrade");

atkUpgradeBtn.addEventListener("click", () => {
  if (Heros[0].hp > 0) {
    handleUpgrade("atk");
  } else alert("いや、あんた死んでるやないかい");
});

defUpgradeBtn.addEventListener("click", () => {
  if (Heros[0].hp > 0) {
    handleUpgrade("def");
  } else alert("いや、あんた死んでるやないかい");
});

function handleUpgrade(type) {
  const result = status_upgrade(type);

  alert(result.message);
  if (result.success) {
    renderAll();
  }
}

function setupEventListeners() {
  const attackBtn = document.getElementById("attack_Btn");
  const escapeBtn = document.getElementById("escape_Btn");

  attackBtn.addEventListener("click", handleAttack);
  escapeBtn.addEventListener("click", handleEscape);
}

function handleAttack() {
  if (Heros[0].hp <= 0 || currentEnemys.hp <= 0) {
    alert("死んでるくせに攻撃しようとするな");
    return;
  }

  const result = attack(Heros[0], currentEnemys);
  if (!result) {
    attack(currentEnemys, Heros[0]);
  }
  processTurn();
  renderAll();
}

function handleEscape() {
  if (Heros[0].hp > 0) {
    alert("勇者は無様に逃げた。");
    summonEnemys();
  }
}

class HerosStatus {
  constructor(data) {
    this.name = data.name;
    this.level = data.level;
    this.hp = data.hp;
    this.maxHp = data.hp;
    this.atk = data.atk;
    this.def = data.def;
    this.xp = data.xp * 100;
  }
}

function createInitialHero() {
  return new HerosStatus(initialHeroData);
}

function resetGame() {
  Heros[0] = new CharacterStatus("勇者", 1, 100, 100, 0, 2);
  gameState.gold = 0;
  summonEnemys();
  renderAll();
}

const resetBtn = document.getElementById("reset_Btn");

resetBtn.addEventListener("click", () => {
  if (confirm("本当にリセットしますか？")) {
    resetGame();
  }
});

function updateGold() {
  const goldDiv = document.getElementById("gold_status");
  goldDiv.textContent = "所持金: " + gameState.gold + "G";
}

function renderAll() {
  HerosCharactersStatus(Heros, "heros_status");

  if (currentEnemys) {
    EnemysCharactersStatus([currentEnemys], "enemys_status");
  }

  updateGold();
}

initGame();
