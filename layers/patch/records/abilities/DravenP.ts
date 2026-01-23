// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'League of Draven',
  affects: 'Self',
  blurb: 'Innate:  Draven gains an Adoration  stack when he catches a  Spinning Axe or kills a  minion,  monster, or  turret. He loses Adoration stacks when he  dies.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> When Draven catches a Spinning Axe, kills a non-champion, or destroys a turret, he gains a stack of Adoration.</p>'
    },
    {
      description: 'When Draven kills an enemy champion, he consumes all of his Adoration stacks and gains 25 + (2 × stacks) bonus gold.'
    },
    {
      description: 'Draven loses 50% of his Adoration stacks upon death.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/p',
  notes: 'Upon reaching 150 Adoration stacks, and every 100 stacks thereafter, as well as when he cashes at least 150 stacks in, Draven automatically sends a chat message notifying all players.\nA chat message will display to all players whenever:\nLeague of Draven grants over  300 gold.\nLeague of Draven gets reduced.\nNone of the parts of League of Draven require actually using a  Spinning Axe for a kill to get Adoration stacks, as well as to cash Adoration stacks.\nLeague of Draven will trigger upon receiving an assist on an enemy  executed by  Pyke\'s  Death from Below.[2]\nWhen receiving  gold from an ally  executing a minion through Shared Riches ( World Atlas,  Runic Compass), Draven is also awarded a  Strike stack.(bug)\nA Strike stack lasts up to 10 seconds or until Draven fails to catch an  axe or a nearby  minion dies without him killing it. Upon reacing 6 stacks, Draven consumes the stacks to gain 2 stacks of Adoration.\nOther sources of gaining Strike stacks were removed in patch V25.06.',
  targeting: 'Passive'
}
export default ability
