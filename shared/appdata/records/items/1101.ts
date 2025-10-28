<<<<<<< HEAD
const item: Item =  {
  "name": "Scorchclaw Pup",
  "id": 1101,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1101_jungle_t1_scorchclawpup.png",
  "nicknames": [
    "jungle"
  ],
  "passives": [
    {
      "name": "Jungle Companions",
      "effects": "Summon a <i>Scorchclaw Pup</i> companion to assist you in combat against monsters.",
      "unique": true
    },
    {
      "name": "Scorchclaw's Slash",
      "effects": "Feed your companion enough treats to evolve it and upgrade your <img src=\"/img/icons/smite.webp\" class=\"tip-icon\" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Scorchclaw&#039;s Slash|Scorchclaw&#039;s Slash}} buff.",
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 450,
      "combined": 450,
      "sell": 180
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN",
      "MAGE",
      "TANK",
      "LIFESTEAL_VAMP"
    ]
  },
  "maps": [
    11,
    21
  ]
}
export default item
=======
const item: Item = {
  id: 1101,
  name: 'Scorchclaw Pup',
  nicknames: ['jungle'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1101_jungle_t1_scorchclawpup.png',
  maps: [11, 21],
  noEffects: false,
  passives: [
    {
      name: 'Jungle Companions',
      effects:
        'Summon a <i>Scorchclaw Pup</i> companion to assist you in combat against monsters.',
      unique: true,
    },
    {
      name: 'Scorchclaw\'s Slash',
      effects:
        'Feed your companion enough treats to evolve it and upgrade your <img src="/img/icons/smite.webp" class="tip-icon" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Scorchclaw&#039;s Slash|Scorchclaw&#039;s Slash}} buff.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 180,
      total: 450,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN', 'MAGE', 'TANK', 'LIFESTEAL_VAMP'],
  },
  specialRecipe: 0,
  stats: {},
}
export default item
>>>>>>> refs/remotes/origin/main
