// Updated Patch 15.23.1 - 11/30/2025 12:24:01 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Tunnel",
  "affects": "Self",
  "blurb": "Active:  Rek'Sai  dashes in the target direction and creates a Tunnel in her wake that lasts for a while. Rek'Sai can travel through the Tunnel in either direction, which becomes disabled afterwards for a few seconds.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes. The Tunnel can be traversed again when Rek'Sai targets either entrance, causing her to dash to the selected entrance before travelling through the Tunnel to the opposite side. Once a Tunnel has been traversed, it is shut down for a few seconds during which Rek'Sai cannot enter it again.</p>"
    },
    {
      "description": "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them 5 upon successfully destroying the Tunnel."
    },
    {
      "description": "If Rek'Sai attempts to enter a Tunnel while Un-Burrowed, she will automatically Burrow upon interacting with it, and automatically Unburrow after exiting it. This does not place Burrow on cooldown nor trigger Fury of the Xer'Sai, but does trigger other Burrow effects and Unburrow. If Burrow is on cooldown at the time of interacting with the Tunnel, the cooldown will be reset."
    },
    {
      "description": "Rek'Sai cannot enter a tunnel while immobilized, grounded, or silenced."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/e",
  "notes": "The tunnel cooldown is also incurred for the Tunnel that Rek'Sai leaves behind from casting the ability.\nRek'Sai will dash to the Tunnel's selected entrance before entering it only if she is not close enough to it already. If she is on top of the entrance, she will initiate the dash through the Tunnel instantly after selecting it.\nIf she selects an entrance while  Un-Burrowed, her dash toward it will last a fixed 0.6 seconds instead of the normal dash speed.\nCreating a Tunnel grants  sight of the area at the other end for 2 seconds.\nTunnel entrances can be targeted by allied movement abilities (ex:  Leap Strike,  Shunpo,  Safeguard,  Teleport).\nTunnel entrances are  visible on allied champions' minimaps, while enemies must first gain  sight of one before it becomes visible on theirs (the opposite entrance is not revealed).\nDestroying a Tunnel while Rek'Sai is traversing it will not prevent her from reaching the opposite entrance.\nRek'Sai can Tunnel through terrain if she dashes close to them and the wall is thin enough to allow the opposite entrance to spawn on the other side.\nIf Rek'Sai issues an attack command while the dash passes by an enemy, the target will be knocked up but Rek'Sai will still complete the movement.",
  "speed": "500 + 100% movement speed",
  "targeting": "Direction",
  "targetRange": "850"
}
export default ability
