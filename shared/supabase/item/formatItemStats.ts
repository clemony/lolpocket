const statNames = {
  hp: 'Health',
  ap: 'Ability Power',
  ad: 'Attack Damage',
  as: 'Attack Speed',
  armor: 'Armor',
  msflat: 'Base Movespeed',
  ms: 'Movespeed',
  mr: 'Magic Resist',
  ah: 'Ability Haste',
  hsp: 'Heal & Shield Power',
  mp5: 'Mana Regen / 5',
  hp5: 'Health Regen / 5',
  hp5flat: 'Base Health Regen',
  gp10: 'Gold / 10',
  lethality: 'Lethality',
  mana: 'Mana',
  tenacity: 'Tenacity',
  lifesteal: 'Lifesteal',
  armpen: 'Armor Penetration',
  mpen: 'Magic Penetration',
  mpenflat: 'Flat Magic Pen',
  crit: 'Crit Chance',
  critdamage: 'Crit Damage',
};

export function formatItemStats(stats) {
  if (!stats) {
    return;
  }

  const replacedStats = Object.entries(stats).map(([key, value]) => {
    const isPercentStat = key === 'ms' || key === 'as' || key === 'hp5' || key === 'mp5' || key === 'tenacity' || key === 'mpen' || key === 'lifesteal' || key === 'hsp' || key === 'crit';

    return {
      key: statNames[key] || key, // Use the formatted name or fallback to the key
      value: isPercentStat ? `${value}%` : value, // Append '%' for specific keys
    };
  });

  replacedStats.sort(function (a, b) {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });
  return replacedStats; // Add this return statement
}
