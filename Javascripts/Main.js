function initGame() {
  HerosCharactersStatus(Heros, "heros_status");
  summonEnemys();
  setupEventListeners();
  renderAll();
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
  handleUpgrade("atk");
});

defUpgradeBtn.addEventListener("click", () => {
  handleUpgrade("def");
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
  if (Heros[0].hp > 0 && currentEnemys.hp > 0) {
    const result = attack(Heros[0], currentEnemys);
    if (result) {
      attack(currentEnemys, Heros[0]);
      renderAll();
      EnemysLose();
      HerosLose();
    }
  }
}

function handleEscape() {
  summonEnemys();
}

function createInitialHero() {
  return new HerosStatus(
    initialHeroData.name,
    initialHeroData.level,
    initialHeroData.hp,
    initialHeroData.atk,
    initialHeroData.def,
    initialHeroData.xp,
  );
}
function resetGame() {
  Heros[0] = createInitialHero();
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
  EnemysCharactersStatus([currentEnemys], "enemys_status");
  updateGold();
}

initGame();
