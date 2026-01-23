// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Tempered Fate',
  blurb: 'Active:  Bard sends spirit energy arcing to a location, putting all  champions,  minions,  monsters, and  turrets hit into  stasis for a short time.',
  castTime: '0.5',
  cooldown: '110 / 95 / 80',
  cost: '100',
  effectRadius: '350',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bard sends magical energy arcing to the target location, granting sight of the area during travel. Upon impact, it puts all units within into stasis for 2.5 seconds, as well as stunning all enemy champions, minions, and turrets struck for the same duration. Enemies hit are revealed for the duration.</p>'
    },
    {
      description: 'Epic monsters and turrets are affected by Tempered Fate despite being immune to crowd control.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/r',
  notes: 'Tempered Fate\'s  stun is affected by  Tenacity.\nThe  stasis is unaffected.\nTempered Fate will affect all targetable  champions,  minions,  monsters,  turrets,  wards, and jungle plants.\nTempered Fate has no effect on enemies that have  displacement immunity or  total crowd control immunity, and allies that are immune from using an ability that preloads UnstoppableForceMarker.\nThe only exceptions are the crowd control immunity that  turrets and epic  monsters have.\nAll  champions (including allies) during the  stasis are prohibited from activating  cleansing effects for its duration.\nIt will not disable  Quicksilver and instead put it on a 3-second  cooldown.\nTempered Fate deals 0  proc  true damage, which triggers in-combat effects such as drawing turret and monster aggression,  Sudden Impact or applying  Elixir of Sorcery.\n Elixir of Sorcery deals damage before the target is put into stasis.\nTempered Fate\'s travel time varies between ~0.65 at point blank and ~1.8 at max range, resulting in an overall delay of ~1.15-2.3 seconds including the cast time depending on distance covered.\nStasis is applied to allies as a  buff.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '3400'
}
export default ability
