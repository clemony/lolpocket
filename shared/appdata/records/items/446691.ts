const item: Item = {
  name: 'Duskblade of Draktharr',
  id: 446691,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6691_assassin_t4_duskbladeofdraktharr.png',
  passives: [
    {
      name: 'Nightstalker',
      unique: true,
      effects: 'Your abilities deal (<img src="/img/icons/melee.webp" class="inline-icon" />0% – 70% (based on target\'s missing health) /<img src="/img/icons/ranged.webp" class="inline-icon" />0% – 70% (based on target\'s missing health)) hp (based on target\'s <b>missing</b> health) increased damage against enemy champions. Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them renders you <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable for 1.5 seconds, which ends prematurely if you perform an action that <img src="/img/icons/break-stealth.webp" class="tip-icon" />breaks stealth.'
    }
  ],
  stats: {
    attackDamage: 50,
    lethality: 20,
    abilityHaste: 20
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0
    },
    tags: [
      'ASSASSIN'
    ]
  },
  maps: [
    30
  ]
}
export default item