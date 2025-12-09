// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Realm Warp",
  "affects": "Allies",
  "castTime": "none",
  "cooldown": "180 / 160 / 140",
  "cost": "100",
  "effectRadius": "250 : 350 : 465 /  515",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Overload's Flux empowered damage is increased.</p>",
      "leveling": [
        {
          "attribute": "Bonus Overload Damage",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 75 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze channels for 2 seconds to open a portal beneath him, marking the target location as its destination and granting sight of its area. Ryze is able to act while channeling, but the portal will cancel if he is interrupted.</p>"
    },
    {
      "description": "Upon completion, Ryze and allied units within will blink to the location and become rooted, disarmed, silenced and untargetable for 0.75 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/r",
  "notes": "Realm Warp's portal may try to predict allied players' intention via their movement. For this purpose, it uses three different radiuses around its center for registering units: a definitive radius of 250 units, an inner radius of 365 units and an outer radius of 465 units.\nRyze himself will always be teleported so long as he is within the inner radius, regardless of movement.\nNon-champion units within the outer radius will always be teleported, regardless of movement.\nChampions within the definitive radius will always be teleported, regardless of movement.\nChampions within the inner radius but outside of the definitive radius must not be currently moving in order to be teleported.\nChampions within the inner radius but outside of the definitive radius that are currently moving will not be teleported if their destination is outside the inner radius.\nChampions within the outer radius but outside of the inner radius that are currently moving will only be teleported if their destination is within the inner radius or their movement pathing otherwise intersects the inner radius' circle at two points.\nThis detection may occasionally fail when pathing around terrain.(bug)\nBlinked units retain the same relative positions to one another upon arrival.\nRealm Warp will teleport allies even if they are in a  zombie state, are  untargetable, or are affected by  crowd control.\nRealm Warp will not teleport allies that are using an ability that preloads UnstoppableForceMarker or are being affected by another ally's Realm Warp first.\nRealm Warp will still teleport an allied  Rift Herald that is winding up its leap.\nRealm Warp has various interactions with  channeled abilities that are being performed by an ally. Some channels will prevent their caster from being teleported and others will not.\nFor channels that do not prevent the teleport, Realm Warp will specifically not apply its  silence to the caster.\nCast times will not prevent the teleport.\nThe following channels will prevent the teleport:\n Caitlyn's  Ace in the Hole\n Galio's  Hero's Entrance\n Kayn's  Umbral Trespass\n Jhin's  Curtain Call\n Warwick's  Jaws of the Beast\n Xerath's  Rite of the Arcane\n Recall /  Empowered Recall\n Teleport /  Unleashed Teleport\nThe following table refers for interactions while Ryze is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nAllowed\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection Grounding effects Immobilizing effects Cast-inhibiting effects",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "3000 / 1000"
}
export default ability
