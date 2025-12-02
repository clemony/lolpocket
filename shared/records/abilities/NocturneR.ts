// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Paranoia",
  "affects": "Enemies",
  "blurb": "Active:  Nocturne terrorizes all enemy champions,  nearsighting them for a few seconds. He can recast Paranoia during this time.",
  "castTime": "none",
  "cooldown": "140 / 115 / 90",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nocturne terrorizes all enemy champions, nearsighting them for 6 seconds. He can recast Paranoia for the same duration after 0.25 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Nocturne dashes with displacement immunity to the target enemy champion, dealing physical damage upon arrival.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 275 / 400"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "Nocturne can cast any of his abilities and item actives during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/r",
  "notes": "Nocturne will track the target if they change locations.\nHe will not stop tracking the target until he reaches them, as there is no maximum tracking distance.\nEnemy players affected by Paranoia's  nearsight cannot interact with the allied portrait icons on the HUD.\nParanoia's  nearsight will apply to enemy champions that are  untargetable or are dead, and will persist through  death.\nNocturne can cast any of his abilities, summoner spells (excluding  Hexflash), or item actives during flight.\nUsing a  dash or  blink ability will interrupt the flight.\nThe flight will also be interrupted if Nocturne is affected by a  Blast Cone triggered by an allied champion.(bug)\nParanoia cannot be recast while  grounded or  rooted.\nParanoia's  nearsight does not apply to  clones.\nPlayers' screens will turn a different color when Paranoia is cast, based on their perspective: blue for allies and red for enemies.\nA spell indicator telegraphed to Nocturne and his allies will be placed on all enemy  champions within range of Paranoia's recast while the ability is active. The following images display the indicator for the default skin:\nA glowing red silhouette of Nocturne's blades indicates an enemy champion can be targeted by Paranoia's recast.\nA glowing green silhouette of Nocturne's blades signifies an enemy champion has been targeted by Paranoia's recast.",
  "resource": "Mana",
  "speed": "1800",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Auto / Unit",
  "targetRange": "2500 / 3250 / 4000"
}
export default ability
