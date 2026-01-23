// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Going Rogue',
  affects: 'Self, Enemies',
  blurb: 'Passive: Enemy  champions that kill allied champions are marked as a Scoundrel for a long time. When  Akshan scores a  takedown on a Scoundrel, he gains  bonus gold, all allies killed by the Scoundrel are resurrected, and Scoundrel status is removed from all other enemies.',
  castTime: '0.5',
  cooldown: '18 / 14 / 10 / 6 / 2',
  cost: '40 / 30 / 20 / 10 / 0',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Akshan marks enemy champions that kill allied champions as Scoundrels for 60 seconds. If Akshan scores a takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional 100 and resurrects all dead allied champions that they have slain after 1 second.</p>'
    },
    {
      description: 'When Akshan claims a Scoundrel\'s bounty he removes the marks of all other enemies. Scoundrels refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. Akshan cannot mark enemies as Scoundrels while they are dead. Allies are resurrected at their summoning platform.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan enters camouflage, which lasts indefinitely while he is near terrain or inside brush, and for 2 seconds otherwise. During this time. he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains bonus mana regeneration equal to 12% of his missing mana as well as bonus movement speed.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              values: '80 / 90 / 100 / 110 / 120'
            }
          ]
        }
      ]
    },
    {
      description: 'Going Rogue can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends Going Rogue immediately.'
    },
    {
      description: 'Akshan can move during Going Rogue\'s cast time.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Akshan ends Going Rogue.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/w',
  notes: 'The mark displays the duration and slay count.\nEnemy champions that kill Akshan will not be marked as Scoundrels nor increase their slay count.\n Clones do not count for triggering Going Rogue\'s passive.\nGoing Rogue\'s buff refreshes to last indefinitely upon moving near terrain or into brush, and will refresh to 2 seconds after leaving near terrain or brush.\nAllied champions within a  zombie state are resurrected only after the state ends.\nAkshan can still trigger Going Rogue\'s passive while he is within a  zombie state.\nUsing a basic attack breaks the stealth at the start of the attack windup.',
  resource: 'Mana',
  targeting: 'Auto'
}
export default ability
