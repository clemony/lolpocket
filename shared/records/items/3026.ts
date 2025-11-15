const item: Item = {
  id: 3026,
  name: 'Guardian Angel',
  nicknames: ['ga'],
  buildsFrom: [
    {
      id: 2019,
      name: 'Steel Sigil',
      gold: 1100,
    },
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3026_fighter_t3_guardianangel.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Rebirth',
      effects:
        'Upon taking lethal damage, enter <img src="/img/icons/resurrection.webp" class="tip-icon" />resurrection for 4 seconds, during which you are <img src="/img/icons/invulnerable.webp" class="tip-icon" />invulnerable, <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable, and unable to act, and afterwards <img src="/img/icons/heal.webp" class="tip-icon" />heal for 50% of <b>base</b> health and restore 100% of <b>maximum</b> mana (300 second cooldown, starts after resurrection ends).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 1280,
      total: 3200,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Periodically revives champion upon death',
  specialRecipe: 0,
  stats: {
    armor: 45,
    attackDamage: 55,
  },
}
export default item
