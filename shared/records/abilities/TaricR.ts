// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Cosmic Radiance",
  "affects": "Allies",
  "blurb": "Active:  Taric calls down a star that descends to him over a short time. Afterwards, he and nearby allied champions become  invulnerable for a short time.",
  "castTime": "0.25",
  "cooldown": "180 / 150 / 120",
  "cost": "100",
  "effectRadius": "400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric calls down a star from above that descends to him over 2.5 seconds. Afterwards, he and nearby allied champions become invulnerable for 2.5 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/r",
  "notes": "Cosmic Radiance has no effect on  untargetable allies.\nIt will affect the primary unit (the one the star is falling down on) even if they are untargetable.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
