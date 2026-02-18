const upgrades = {
  atk: { cost: 50, effect: () => Heros[0].atk++ },
  def: { cost: 40, effect: () => Heros[0].def++ },
};

function status_upgrade(type) {
  const upgrade = upgrades[type];

  if (!upgrade) {
    return { success: false, message: "まだ実装してないねん。" };
  }

  if (gameState.gold < upgrade.cost) {
    return { success: false, message: "お金が足りません。出直してこい。" };
  }

  gameState.gold -= upgrade.cost;
  upgrade.effect();

  return { success: true, message: type + "が上昇した。" };
}
