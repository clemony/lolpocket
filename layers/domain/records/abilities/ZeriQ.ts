// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Burst Fire",
  "width": "80",
  "affects": "Self, Enemies",
  "angle": "5° / 2°",
  "blurb": "Active:  Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit. This is treated as a  basic attack, can  critically strike, and applies  on-hit and  on-attack effects to the first enemy hit.",
  "castTime": "100% of Zeri's windup time (0.237 at base attack speed)",
  "cooldown": "0",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.</p>",
      "leveling": [
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "15 / 17 / 19 / 21 / 23"
            },
            {
              "tooltip": "Scaling per rank:\n104 / 108 / 112 / 116 / 120% AD",
              "unit": "% AD",
              "values": "104 - 120"
            }
          ]
        },
        {
          "attribute": "Physical Damage per Hit",
          "modifiers": [
            {
              "values": "2.14 / 2.43 / 2.71 / 3 / 3.29"
            },
            {
              "tooltip": "Scaling per rank:\n14.86 / 15.43 / 16 / 16.57 / 17.14% AD",
              "unit": "% AD",
              "values": "14.86 - 17.14"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Burst Fire's projectile is treated as a basic attack:</span> it hits any enemy unit a typical basic attack can; deals basic damage; can critically strike for (175% + 40%) damage; applies on-hit effects to the first enemy hit; and triggers on-attack effects once. Burst Fire's cooldown and cast time are reduced with attack speed, with the maximum of 1.5 attacks per second. 70% of attack speed in excess of the cap is converted into bonus attack damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/q",
  "notes": "Burst Fire is automatically learned with her first skill point upon spawning.\nAny of Burst Fire's rounds hitting a champion will draw minion aggro, regardless of whether or not other targets were hit first by Burst Fire's rounds.\nA lightning chain from a  Lightning Crash empowered Burst Fire will not draw minion aggro.\nCasting Burst Fire does not cancel previous attack ( Living Battery) and movement orders.\nBurst Fire does not trigger  Tear of the Goddess' Mana Charge.\nBurst Fire's cooldown is not reduced by  Navori Flickerblade's Transcendence.\n Amumu's  Tantrum's,  Fizz's  Nimble Fighter's, and  Leona's  Eclipse's flat damage reduction apply to each of the 7 instances of damage from Burst Fire.\n Warden's Mail's flat damage reduction and cap only apply to the first instance of damage.\n Guardian's Horn's flat damage reduction only applies to the first instance of damage, but handles it as damage-over-time (reduced to 25% effectiveness).\nBurst Fire still counts as an ability activation for the purposes of on-cast effects such as triggering  Force Pulse's passive.\nIt does not count as an ability activation for  Spellblade.\nBurst Fire can hit all enemy units that a basic attack would be able to target. This does include jungle plants, structures, and wards.\nWards will only be hit once by Burst Fire. Stealthed wards and traps will not be hit.\nChampion-summoned units behave differently depending on the unit.\nGangplank's  Powder Keg and Yorick’s  Dark Procession are hit only once by Burst Fire, and any subsequent rounds not empowered by  Spark Surge will stop upon reaching the same object.\nKalista's  Sentinel is hit only once by Burst Fire, but any subsequent rounds will continue to travel through the Sentinel.\nIf Burst Fire hits an enemy while Zeri is not visible to enemies, the area around her (400 units) will be revealed for 4.5 seconds.\nBurst Fire rolls  critical strike for all rounds as well as the additional physical damage dealt when Zeri is  Overcharged.\nBurst Fire is parried by  dodge and  block.\n Blind causes Burst Fire to cast in a random direction. The rounds will still deal damage to enemies hit.\nBurst Fire's rounds are each fired in the target direction from where Zeri is at the time.\nOnly attack speed granted by being  Overcharged can exceed the cap of 1.5.\n Hail of Blades does not allow Zeri to exceed her attack speed cap.\nItems and runes that trigger off of attacking [eg  Fleet Footwork,  Kraken Slayer] will only trigger if Burst Fire hits a unit.\nIf Zeri would get full Energized stacks from a Burst Fire, the rest of the rounds will trigger Energized.\nBurst Fire's cast-indicator does not show  range increases; modified range VFX are still visible around the champion model.\nBurst Fire can apply the effect of  Horizon Focus when the enemy hit is within the last 50 units of this ability.(note)\nBurst Fire uses a modified icon when empowered by  Spark Surge () and  Lightning Crash () as well as both ().\nDestroying a ward that is targetable but not visible to Zeri's team (e.g. a  Control Ward in Fog of War) via Burst Fire uniquely allows her to remove its accompanying ward timer (if it exists) without seeing the ward being destroyed.",
  "projectile": "TRUE",
  "speed": "2600 / 3400",
  "spellEffects": "basic",
  "spellshieldable": "false",
  "targeting": "Direction"
}
export default ability
