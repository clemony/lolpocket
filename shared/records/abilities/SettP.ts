// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Pit Grit",
  "affects": "Self, Enemies",
  "blurb": "Innate - Heart of the Half-Beast:  Sett  regenerates additional health based on his missing health.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Heart of the Half-Beast:</span> Sett regenerates[ an additional 0.075 / 0.25 / 0.5 / 1 (based on level) health every 0.5 seconds per 5% of his missing health. ][ up-to an additional 1.425 / 4.75 / 9.5 / 19 (based on level) health per 0.5 seconds, with the maximum reached at the threshold of 95% missing health. ]</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Heavy Hands:</span> Sett's basic attacks alternate between his Left Punch and a Right Punch on-attack. Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.</p>"
    },
    {
      "description": "Sett's Right Punch is empowered to gain 50 bonus range (unless Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 - 90 (based on level) (+ 55% bonus AD) bonus physical damage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/p",
  "notes": "Alternatively, Pit Grit grants Sett 0.75 / 2.5 / 5 / 10 (based on level) bonus health regeneration for every 5% missing health, up to 14.25 / 47.5 / 95 / 190 (based on level) at the cap of 95% missing health.\nThe Right Punch does not grant  bonus attack speed, rather its windup is sped up and fixed at [ 12.5% of a Left Punch's windup time. ][ 800% of a Left Punch's windup speed. ]\nThe windup is still affected by  cripples and attack speed buffs that were not already active for the previous Left Punch's.\nThe bonus physical damage from the Right Punch benefits from  life steal.",
  "spellEffects": "Proc",
  "targeting": "Passive"
}
export default ability
