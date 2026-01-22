// Updated Patch 15.24.1 - 12/26/2025 07:04:04 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Double Strike",
  "affects": "Enemies",
  "blurb": "Innate:  Master Yi's  basic attacks generate a  stack of Double Strike for a few seconds. At 3 stacks, his next basic attack will consume them all to strike a second time for reduced physical damage.",
  "damageType": "Physical damage",
  "effectRadius": "300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Master Yi's basic attacks on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks on-hit and strike twice, the second strike dealing 50% AD physical damage.</p>"
    },
    {
      "description": "The second strike applies on-hit effects, triggers on-attack effects, and is affected by critical strike modifiers."
    },
    {
      "description": "If Master Yi's primary target is killed before the second strike, he will automatically target another nearby enemy."
    },
    {
      "description": "The second strike can critically strike against structures."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/p",
  "notes": "The second strike separately rolls a  critical strike.\nDouble Strike does not cause Master Yi to attack twice. Effects that trigger on completing the attack windup will only trigger once and thus do not interact with Double Strike. (e.g.  Hail of Blades).\nSince Double Strike resets the counter with the first strike, and the second strike applies on-hit effects, the second strike is able to add a stack for the next Double Strike activation.\nIf Double Strike's target becomes  untargetable shortly after the triggering attack, it will still occur and deal its effects as usual.\nBasic attacks that are  dodged,  blocked, or missed while Master Yi is  blinded will not generate any stacks of Double Strike nor refresh the duration of active stacks.\nDouble Strike's interaction with parry effects at 3 stacks (the damage of the strikes is negated in all cases):\nIf the triggering basic attack is  dodged, Master Yi will not perform the second strike nor consume the stacks.\nIf the triggering basic attack is  blocked, Master Yi will perform the second strike but not consume the stacks.\nIf the triggering basic attack misses while Master Yi is  blinded, he will consume the stacks.\nThe second strike will fail to hit the target at all if the triggering attack misses.  On-attack effects do not occur, despite the attack animation playing.(bug)",
  "spellEffects": "attack",
  "targeting": "Passive"
}
export default ability
