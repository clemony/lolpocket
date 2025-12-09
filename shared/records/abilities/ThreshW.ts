// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Dark Passage",
  "affects": "Allies",
  "blurb": "Active:  Thresh throws his lantern to the target location that remains for a few seconds while he remains nearby. He and the first allied champion to come near the lantern are granted a  shield for a few seconds, with the amount based on  Souls.",
  "castTime": "none",
  "cooldown": "21 / 20 / 19 / 18 / 17",
  "cost": "50 / 55 / 60 / 65 / 70",
  "effectRadius": "350 / 150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Thresh throws his lantern to the target location over 0.5 seconds, lasting for 6 seconds while he remains nearby and granting sight of its surroundings. If Thresh moves too far away from the lantern, it returns back to him immediately.</p>"
    },
    {
      "description": "Thresh and the first allied champion to come near the lantern are granted a shield for 4 seconds. An ally can select the lantern while in proximity of it, dashing to Thresh and gaining the shield.",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "50 / 70 / 90 / 110 / 130"
            },
            {
              "unit": " per Soul collected",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "An ally cannot select the lantern while immobilized, grounded, or silenced. The lantern will not expire from Thresh moving too far away if he is dashing with Deathly Leap."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/w",
  "notes": "The dashing ally will track Thresh if he changes locations.\nThey will dash to Thresh's previous location if he is too far away or moves beyond 2200 units.\nThe lantern is considered a unit and can be targeted by an allied  Teleport,  Leap Strike,  Shunpo, and  Safeguard.\nIt is  untargetable to enemies.\nThe lantern's duration and maximum leash range are each displayed as a circle on the ground.\nThresh will gain Dark Passage's shield from moving out of leash range of the lantern.\nDark Passage is special cased to trigger  Guardian.",
  "projectile": "TRUE",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "950",
  "tetherRadius": "1500"
}
export default ability
