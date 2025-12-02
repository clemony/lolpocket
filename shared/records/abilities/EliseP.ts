// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Spider Queen",
  "blurb": "Innate: The rank of  Spider Form / Human Form affects the power of Spider Queen.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Human Form:</span> Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing once per cast and up to 2 / 3 / 4 / 5 (based on Human Form's Rank) at a time. She stores the maximum number of Spiderlings when the game starts and upon respawning.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Spider Form:</span> Elise's basic attacks deal 12 / 22 / 32 / 42 (based on Spider Form's Rank) (+ 15% AP) bonus magic damage and heal her for 6 / 8 / 10 / 12 (based on Spider Form's Rank) (+ 8% AP) on-hit.</p>"
    },
    {
      "description": "See Pets for more details about Spiderlings."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/p",
  "notes": "Spider Form's effects do not apply to structures.\nIf an ability hits while Elise is already in Spider Form, a Spiderling will spawn near her rather than being stored.\nThe Spiderlings have a leash range.\nSpider Form's basic attacks will apply other on-hit effects and can  critically strike as normal (the bonus damage does not).\nSpider Form's bonus damage and healing can be  blocked,  dodge and are not applied if Elise is  blind.\nApplies  proc damage on the bonus magic damage on-hit in Spider Form.\nThe Spiderlings apply  area damage.",
  "spellEffects": "Special",
  "targeting": "Passive"
}
export default ability
