// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Traveler's Call",
  "affects": "Enemies",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Ancient Chimes:</span> Bard's presence causes sacred Chimes to appear at random locations on the map, lingering for up to 10 minutes. Collecting a Chime restores 12% maximum mana and grants Bard 20 + (1 per minute after 5 minutes) experience, as well as 24% bonus movement speed out of combat for 20 seconds, which stacks up to 10 times. Each Chime collected beyond the first instead grants an additional 14% bonus movement speed, up to a total of 150% bonus movement speed. Bard empowers his Meeps each time he collects 5 Chimes.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Meeps:</span> Bard's presence attracts Meeps, which are small spirits that come to his side. While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 10 per 5 Chimes collected) (+ 40% AP) bonus magic damage.</p>\nAt 5 Chimes, Meeps slow damaged enemies by 25% - 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases."
    },
    {
      "description": "Bard can have up to 1 - 9 (based on number of Chimes) Meeps at a time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/p",
  "notes": "Chime spawns are weighted towards the areas of the map that Bard is currently present in and spawn in pairs, with the only exception being the second and third spawns on  Summoner's Rift, which spawn only one.\nChimes will not spawn in either team's base and will not spawn in the enemy team's jungle before the 5 minute mark.\nThe first Chime pair spawns at:\n0:15 in all  Summoner's Rift modes.\n0:50 in all  Howling Abyss modes.\nThe damage from Meeps:\nApplies as  spell damage on the primary target.\nApplies as  area damage on secondary target(s).\nMeeps grant additional stacks of  Electrocute,  Phase Rush and  Conqueror.\nOnly Bard can see a Chime that is in the fog of war. All other players must have  sight of a chime for it to be visible to them.\nOnly Bard can see a minimap icon for an uncollected Chime, regardless of whether other players have vision on it or not. The minimap icon will turn red when the chime is one minute away from expiration.\nBard cannot see Chimes while  nearsighted.\nOnly Meep cone attacks are absorbed by  spell shields. Those that deal damage together with the basic attack don't.\nIf a Meep empowered auto attack is  dodged,  blocked or when Bard is  blinded, the basic attack itself will deal no damage, but the Meep damage will still be applied.\nThe empowered attack will not trigger against structures and wards.\n\n\nMinimum Time\n\nChimes\n\nEffects\n\nBase Damage\n\n\n3:20\n5\n Meeps now  Slow by 25%.\n45\n\n\n5:00\n10\nMeep limit increased to 2.\n55\n\n\n7:30\n15\n Meeps now deal splash damage.\n65\n\n\n9:10\n20\nRecharge time reduced to 7 seconds.\n75\n\n\n11:40\n25\n Slow increased to 35%.\n85\n\n\n13:20\n30\nMeep limit increased to 3.\n95\n\n\n15:50\n35\nSplash damage area increased.\n105\n\n\n17:30\n40\nRecharge time reduced to 6 seconds.\n115\n\n\n20:00\n45\n Slow increased to 45%.\n125\n\n\n21:40\n50\nMeep limit increased to 4.\n135\n\n\n24:10\n55\nRecharge time reduced to 5 seconds.\n145\n\n\n25:50\n60\n Slow increased to 55%.\n155\n\n\n28:20\n65\nMeep limit increased to 5.\n165\n\n\n30:00\n70\nRecharge time reduced to 4 seconds.\n175\n\n\n32:30\n75\n Slow increased to 65%.\n185\n\n\n34:10\n80\nMeep limit increased to 6.\n195\n\n\n36:40\n85\n Slow increased to 75%.\n205\n\n\n38:20\n90\nMeep limit increased to 7.\n215\n\n\n40:50\n95\nMeep limit increased to 8.\n225\n\n\n42:30\n100\nMeep limit increased to 9.\n235\n\n\nEvery 5 thereafter only grants 10 bonus damage.",
  "projectile": "TRUE",
  "spellEffects": "mixed",
  "spellshieldable": "Special",
  "targeting": "Passive"
}
export default ability
