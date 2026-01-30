// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Powder Keg",
  "affects": "Enemies",
  "blurb": "Active:  Gangplank places a Powder Keg at the target location, which can be  attacked or  shot to damage it. If an enemy destroys a Powder Keg, it is safely dismantled.",
  "castTime": "0.25",
  "cooldown": "0",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "345 /  360",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with 3 health and loses 1 every 2 / 1 / 0.5 (based on level) seconds until it is left with 1 health.</p>"
    },
    {
      "description": "Gangplank periodically stocks a Powder Keg charge, up to a maximum.",
      "leveling": [
        {
          "attribute": "Maximum charges",
          "modifiers": [
            {
              "values": "3 / 3 / 4 / 4 / 5"
            }
          ]
        }
      ]
    },
    {
      "description": "Kegs can be attacked by enemies or Gangplank (including his Parrrley), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When Gangplank destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a 0.33 seconds-delay between explosions. The explosions also grant sight of their radiuses for 2 seconds."
    },
    {
      "description": "Enemies caught in an explosion are dealt the triggering attack's damage and slowed for 2 seconds. Against champions, the explosion also deals bonus physical damage. Each enemy can only be hit once per chain and the damage dealt ignores 40% of the target's armor.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60 / 70 / 80"
            }
          ]
        },
        {
          "attribute": "Bonus Champion Damage",
          "modifiers": [
            {
              "values": "75 / 105 / 135 / 165 / 195"
            }
          ]
        }
      ]
    },
    {
      "description": "If the triggering attack was a critical strike, the explosions deal 5% more damage on top of the critical damage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/e",
  "notes": "The  slow, bonus physical damage to champions, and keg health decay speed are determined when the keg is placed.\nThe triggering attack's damage can include  Parrrley's base damage and  Spellblade.\nThe percentage armor penetration stacks multiplicatively with other sources of percentage armor penetration.\nWhen triggered with critical strike, Spellblade and the bonus damage to champions are added after the calculations, meaning that these effects are not increased by 5%.\nDamage modifiers (eg.  Riftmaker's Void Corruption, mode-specific modifiers), with the exception of  Spear of Shojin's Focused Will, are applied to both the damage dealt to and by each keg.(bug)\nFor example, if Gangplank  attacks a chain of kegs with 100 AD and a 10% damage increase, the first keg in the chain will deal 110 damage, the second will deal 121 damage, the third will deal 133 damage, and so on.\nThe total damage can be calculated with this formula:{aDMG * [1.75 ( + 0.40)] * 1.05} + sDMG + cDMGWhere:\naDMG = Triggering attack's damage\nsDMG = Spellblade's damage\ncDMG = Bonus damage to champions\nKegs have special interactions with  Spellblade:\nIf the keg destroying attack was empowered with Spellblade, its damage will be added to the explosions' damage.\nIf the keg was not destroyed, it will consume the effect and the keg will store the damage it would have dealt. If the storing keg is the initial detonation of the chain, it will add its damage to the explosions' damage as if it was triggered with Spellblade.\nIf the storing keg was attacked with a new instance of Spellblade, it will override the previously stored damage (if different).\nDamage can only be stored if Spellblade was consumed by Gangplank.\nThe stored damage is static and will not change if Gangplank's base attack damage or ability power (see below) changes.\nSpecific  Spellblade item interactions:\n Bloodsong: Dealing damage with kegs to champions won't apply Expose Weakness to them.\n Iceborn Gauntlet: The frost field will be created on the location of the keg that is attacked.\n Lich Bane: The magic damage will be added to the explosions' damage, but will be dealt as physical damage.\n Trinity Force: Attacking kegs grants the movespeed from Quicken; dealing damage with the explosion does not since it does not trigger  on-hit effects.\nKegs triggering a chain reaction will show a lit fuse traveling toward other kegs.\nThe lit fuse is only visual and does not affect the time it takes for kegs to explode.\nPlaced kegs do not grant  vision until they explode, but they are revealed to Gangplank.\nIf Gangplank loses allied vision, for instance due to  nearsight, he will also lose vision on his kegs temporarily.\nKegs prematurely grant  sight of their explosion radius (including across terrain and into bushes) if  Parrrley or a lit fuse is traveling towards them.\nThis area reveal happens even if  Parrrley is not going to make it explode.\nAn exploding Powder Keg will splash  Parrrley's bonus damage, and will also be modified if the attack  critically strikes.\nAttacks against Powder Kegs will apply  on-hit effects (such as  Tiamat's Cleave), but  proc damage against the keg itself is reduced to 0.\nDamage from on-hit effects will therefore not increase the damage of the explosion.\n Spellblade is a special-cased exception.\nPowder Kegs will take damage from effects that apply on-hit effects (eg.  Guinsoo's Rageblade's Seething Strike ), but will remain at 1 health if they would be killed by them.\n Dead Man's Plate's Crushing Blow will not trigger from Powder Kegs destroyed from Gangplank, even with  Parrrley.\nThe number of Powder Kegs in stock is visible under Gangplank's health bar for all players.\nGangplank stocks Powder Kegs even if the ability hasn't been learned yet.\nThis is due to the recharge rate at level 1 being set the same as level 0.\nWhile at maximum charges, ranking up the ability to rank 3 or 5 grants the remaining charge immediately regardless of the recharge timer.\nIf a keg is destroyed during the 0.33 seconds-delay between explosions, Gangplank will plunder  gold and  Silver Serpents upon killing enemies as if he had done so using  Parrrley.(bug)\nThis effect persists through  death and will only end upon killing an enemy with  Parrrley.",
  "projectile": "FALSE",
  "rechargeRate": "17 / 16 / 15 / 14 / 13",
  "resource": "Charge",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "1000"
}
  export default ability
