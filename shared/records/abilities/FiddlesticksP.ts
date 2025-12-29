// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "A Harmless Scarecrow",
  "affects": "Self",
  "blurb": "Innate:  Fiddlesticks has a  Scarecrow Effigy in place of a trinket, which will imitate Fiddlesticks. Fiddlesticks can impersonate an effigy by remaining idle out of combat.",
  "effectRadius": "900",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Scarecrow Effigy:</span> Fiddlesticks begins the game with an exclusive Scarecrow Effigy, which permanently occupies the trinket slot. Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - A Harmless Scarecrow:</span> From level 6 onward, placing an Effigy also summons a Sweeper Drone at the location for 6 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/p",
  "notes": "Scarecrow Effigies are unavailable on  Howling Abyss until Fiddlesticks uses or sells its  Poro-Snax.\nThe process of or the act of pretending to be an Effigy will be interrupted if Fiddlesticks:\nMoves.\nTakes damage.\nDeclares an attack.\nCasts any ability or spell.\nStarts  channeling.\nIs hit by an ability.\nIs affected by a  crowd control effect.\nEffigies will mimic Fiddlesticks'  idle animations and their health bars are hidden until they fake an action.\nIf Fiddlesticks pretends to be an Effigy, its health bar stays hidden until the pose is interrupted.\nEffigies are considered  clones.\nThey are not valid targets to  direction,  ground, and  auto-targeted effects for first 1.5 seconds of their lifespan.\nThe trinket slot can still be temporarily replaced by  Eye of the Herald.\nFiddlesticks can still purchase Support Quest items, as they do not affect the trinket slot.\n -  Surprise Party Fiddlesticks has a special icon for this ability.",
  "targeting": "Vector"
}
export default ability
