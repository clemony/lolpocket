// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Assassin's Path",
  "affects": "Self",
  "blurb": "Active:  Talon  vaults over the target terrain.",
  "castTime": "none",
  "cooldown": "0",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon dashes up to 800 units over the target area of terrain while within proximity of it, during which he gains unobstructed vision.</p>"
    },
    {
      "description": "Talon cannot cast Assassin's Path on the same area of terrain for a set duration."
    },
    {
      "description": "Shadow Assault can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/e",
  "notes": "When Assassin's Path is cast on terrain that is out of range, Talon will walk to the location where he is able to cast the ability and dash over this area of terrain. If he encounters other terrain along the way, however, he will cast Assassin's Path over the obstructive area of terrain instead.\nThis override will fail if his path to the location would be obstructed by terrain that is on cooldown. In this case, the ability will not cast at all.\nAssassin's Path can interact with player-generated terrain.\nTalon will stop dashing upon entering  stasis but will continue to do so afterwards.\nTalon will reveal himself for 0.6 seconds upon casting Assassin's Path if he is visible to an enemy champion or there is a nearby enemy champion or minion within 400 units of the landing position.\nWalls eligible for Assassin's Path display a border indicator that fades over the cooldown. The closer the wall is to becoming traversable, the lighter the indicator becomes.",
  "speed": "100% movement speed",
  "targeting": "Location",
  "targetRange": "725"
}
export default ability
