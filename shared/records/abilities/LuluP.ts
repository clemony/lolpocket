// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Pix, Faerie Companion",
  "width": "60",
  "affects": "Self",
  "blurb": "Innate:  Lulu is assisted by Pix, whom follows her around. Whenever Lulu basic attacks, Pix fires 3 bolts that deal magic damage to the first enemy hit.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Lulu is assisted by Pix, an untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack. Each bolt deals 5 - 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 - 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts.</p>"
    },
    {
      "description": "Casting Help, Pix! on an ally champion transfers Pix's help to them, causing him to fire the bolts dependent on their basic attacks."
    },
    {
      "description": "Pix snaps back to Lulu if she is too far away."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/p",
  "notes": "Pix's bolts do not fire alongside abilities that apply  on-hit effects (e.g.  Runaan's Hurricane).\nPix does not fire if the target dies.\nPix fires from his own location and not from the unit he is following.\nWhen on an ally champion, Pix's damage respects  enchantment redirection.\nThe empowered attack does not trigger against structures nor wards.\nNeither of them will intercept Pix's bolts.",
  "projectile": "TRUE",
  "speed": "900 - 2600",
  "spellEffects": "default",
  "targeting": "Passive"
}
export default ability
