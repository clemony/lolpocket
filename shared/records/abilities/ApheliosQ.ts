// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Sentry",
  "affects": "Enemies",
  "blurb": "Active: Aphelios deploys a lunar sentry that gains a copy of his off-hand weapon and attacks with it, dealing physical damage.",
  "castTime": "0.25",
  "cooldown": "9",
  "cost": "60",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios deploys a lunar sentry at the target location that arms after 0.35 seconds, lasting for up to 20 seconds, during which it is inactive and untargetable. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have 6 health and take 3 damage per ranged basic attack and 4 damage per hit by abilities. Turret attacks destroy sentries instantly.</p>"
    },
    {
      "description": "The sentry grants sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios' current off-hand weapon, dealing 35 - 125 (based on level) (+ 42% - 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit. The sentry can critically strike for (175% + 40%) damage and benefits from both Aphelios' attack speed and critical strike chance at 100% effectiveness."
    },
    {
      "description": "See Pets for more details about the sentry."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
  "notes": "Sentry's name is modified based on Aphelios' off-hand weapon:\n Precision Sentry\n Resurgent Sentry\n Heals Aphelios for any damage it deals.\nAttacks cannot be intercepted by  Wind Wall and  Unbreakable.\n Binding Sentry\n Incendiary Sentry\nThe Sentry will stop upon colliding with  Wind Wall. It will be deployed in front of the wall.\nThe Sentry's attacks can be  dodged and  blocked, but not missed from being  blinded.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "spell",
  "targeting": "Location",
  "targetRange": "475"
}
export default ability
