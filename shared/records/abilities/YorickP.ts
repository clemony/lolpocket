// Updated Patch 15.23.1 - 11/30/2025 12:24:12 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Shepherd of Souls",
  "affects": "Self",
  "blurb": "Innate- Final Service: Enemies that die near  Yorick will leave a grave, as well as those he kills or damages with  Last Rites. Yorick can use  Awakening and  Mourning Mist to turn all graves into Mist Walkers that assist him in combat.",
  "effectRadius": "1000 / 2500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Final Service:</span> Whenever Yorick uses Last Rites to score the killing blow on any enemy or damage an enemy champion or large monster, he raises a grave at their location. Additionally, a grave is passively raised for every 8th : 2nd (based on level) enemy that dies otherwise near him. Up to 4 graves can exist at once, lasting until Yorick exits the general area or dies, with the furthest one always being replaced by the newest upon raising one over the limit.</p>"
    },
    {
      "description": "Yorick can use Awakening and Mourning Mist's mark to raise 1 Mist Walker from each grave after a 1-second delay, consuming the graves in the process."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - The Cursed Horde:</span> Up to 4 Mist Walkers can be active at once near Yorick or near The Maiden, with the nearest one always being replaced by the newest upon raising one over the limit.</p>"
    },
    {
      "description": "See Pets for more details about Mist Walkers."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/p",
  "notes": "Damaging a large monster or champion with  Last Rites will only spawn 1 grave, even if it kills them.",
  "targeting": "Passive"
}
export default ability
