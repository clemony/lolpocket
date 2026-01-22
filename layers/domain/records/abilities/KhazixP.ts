// Updated Patch 15.24.1 - 12/26/2025 07:03:52 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Unseen Threat",
  "affects": "Enemies",
  "blurb": "Innate:  Kha'Zix gains Unseen Threat whenever the enemy loses  sight of him causing his next basic attack against an enemy Champion to deal bonus magic damage and slow.",
  "damageType": "Magic damage",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kha'Zix gains Unseen Threat whenever the enemy loses sight of him or he activates Void Assault.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Unseen Threat:</span> Kha'Zix empowers his next basic attack against an enemy champion to deal 17 - 136 (based on level) (+ 50% bonus AD) bonus magic damage and slow them by 25% for 2 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kha'Zix considers any enemy unit to be Isolated if they are not nearby to one of their allies. Taste Their Fear, Evolved Reaper Claws, and Evolved Spike Racks have special interactions against Isolated targets.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/p",
  "notes": "Any form of vision loss may trigger Unseen Threat, such as  Curse of the Black Mist,  nearsight and  Brushmaker.\n Void Assault grants Unseen Threat even if Kha'Zix never becomes unseen (e.g. affected by  true sight).\nOther  stealth such as  Senna's  Curse of the Black Mist does not do this.\nBoth the attack's damage and bonus spell damage are grouped under the same Spell ID.\nBecause of this, a single Unseen Threat attack does not trigger two  Electrocute stacks.\nA team's allies are  champions,  pets,  minions and outer  turrets.\n Monsters are considered allies for other monsters.\n Wards do not prevent Isolation.\nA number of targetable champion summoned units are specifically tagged to not be a valid ally of a potentially Isolated target. These units are:\n Gangplank's  Powder Keg\n Illaoi's  Prophet of an Elder God\n Jhin's  Captive Audience\n Nidalee's  Bushwhack\n Rek'Sai's  Tunnel\n Senna's  Absolution's Mist Wraiths\n Teemo's  Noxious Trap\n Viego's  Sovereign's Domination's Mist Wraiths\n Yorick's  Dark Procession\nIsolation effects are registered at the following timings for each ability:\nFor  Evolved Reaper Claws, the start of cast.\nFor  Evolved Spike Racks, when the enemy is hit.\nFor  Taste Their Fear, the end of cast.(bug) This means that if the target is no longer Isolated when the ability hits them, it will not apply the respective bonuses.",
  "spellEffects": "spell",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
