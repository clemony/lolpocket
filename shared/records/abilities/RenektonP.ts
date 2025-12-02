// Updated Patch 15.23.1 - 11/30/2025 12:24:01 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Reign of Anger",
  "affects": "Self",
  "blurb": "Innate:  Renekton's  basic attacks  on-hit and  ability hits generate  Fury, which continually expires after a period without fighting. He generates bonus Fury while below half health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Renekton's basic attacks generate 5 Fury on-hit. After 12 seconds of being out of combat and not basic attacking, he loses 1 Fury every 0.25 seconds.Entering combat or using an attack will stop the Fury loss and refresh the timer. Additionally, while Dominus is active, the timer is continuously refreshed.</p>"
    },
    {
      "description": "While Renekton has at least 50 Fury, his next basic ability, excluding Slice, consumes 50 Fury to become empowered with an additional effect. Empowered abilities do not generate Fury."
    },
    {
      "description": "Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/p",
  "notes": "Basic attacks against any enemy that is not a structure will generate the Fury.\nRenekton can generate Fury by collecting  Honeyfruit and Health Relics (interacts with Reign of Anger's bonus generation).\nPENDING FOR TEST: Fury generation with parrying effects ( blind,  dodge,  block)",
  "targeting": "Passive"
}
export default ability
