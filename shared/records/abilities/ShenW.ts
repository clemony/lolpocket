// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Spirit's Refuge",
  "affects": "Allies",
  "blurb": "Active:  Shen primes his Spirit Blade, creating an area around it. After a short time, or when Shen or allied champions enter the area, the Spirit Blade briefly erupts a protective zone that  blocks enemy basic attacks that hit Shen or allied champions in the area.",
  "castTime": "none",
  "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
  "cost": "40",
  "effectRadius": "350",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen primes his Spirit Blade, creating an area around it. After 2 seconds, or when Shen or an allied champion enters the area, the Spirit Blade generates a protective zone for 1.75 seconds, blocking all non- turret basic attacks that hit Shen or allied champions in the area.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/w",
  "notes": "Spirit's Refuge's protective zone can be moved while active if Shen uses  Twilight Assault.\nSpirit's Refuge cannot be ranked up at Level 1.\nSpirit's Refuge will also block damage from all abilities that use  basic damage ( Lunge,  Mystic Shot,  Steel Tempest).\nAllied  clones are also considered champions for this ability.",
  "resource": "Energy",
  "targeting": "Auto"
}
export default ability
