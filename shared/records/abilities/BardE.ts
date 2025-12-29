// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Magical Journey",
  "affects": "Self, Allies, Enemies",
  "blurb": "Active:  Bard opens a one-way portal through nearby terrain. Champions can enter by moving into the portal, however allies will be faster.",
  "castTime": "0.25",
  "cooldown": "22 / 20.5 / 19 / 17.5 / 16",
  "cost": "30",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.</p>"
    },
    {
      "description": "A champion can pass through the corridor by selecting it while within proximity of it, becoming revealed during the travel. Bard and allies travel through the portal at 33% increased speed."
    },
    {
      "description": "A valid piece of terrain within the target range is required to cast this ability. Magical Journey cannot be taken while immobilized or grounded."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/e",
  "notes": "Terrain also includes structures.\nMagical Journey's tunnel has a max range of 2600 units (about two screens long)[3].\nMagical Journey will score assists for Bard if an ally that uses it scores a kill or assist shortly after.\nBard can cast Magical Journey while  grounded or  rooted.\nThere is no limit to how many times a given instance of Magical Journey may be used.\nMagical Journey cannot interact with player-created terrain due to its short lifespan.[4]\nAny abilities that continue during normal movement, such as point blank area of effects and various forms of  stealth, will continue during the travel within Magical Journey.\nIf a champion's  dash is  interrupted while inside terrain using Magical Journey, they will be immediately displaced out to the nearest open space, but are not rendered  airborne.\nTaking Magical Journey is considered a  dash, and so will interact with effects such as  Sudden Impact and  knockdown.",
  "projectile": "FALSE",
  "resource": "Mana",
  "speed": "900 / 1197",
  "targeting": "Direction",
  "targetRange": "900"
}
export default ability
