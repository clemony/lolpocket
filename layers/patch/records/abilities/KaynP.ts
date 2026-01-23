// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'P',
  name: 'The Darkin Scythe',
  affects: 'Self',
  blurb: 'Innate: Whenever  Kayn scores champion  takedowns or deals damage against champions, he earns orbs that unlocks his  Darkin and  Shadow Assassin forms. Kayn can return to the summoning platform to transform, permanently empowering his abilities.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kayn has a secondary experience bar that tracks progress toward his Darkin and Shadow Assassin forms. He gathers orbs from champion takedowns and each instance of damage (excluding damage over time) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from melee or ranged champions (for Darkin and Shadow Assassin, respectively), with the other form unlocked later.</p>'
    },
    {
      description: 'While near his team\'s summoning platform, Kayn can choose a form to enter transformation over 6 seconds, becoming invulnerable, untargetable, and unable to act for the duration. At the end of the transformation he is restored to full health and mana. The transformation will grant a passive bonus and permanently empower some of Kayn\'s abilities based on the form chosen. He gains a one-time Homeguard once the transformation is complete.Kayn cannot activate the transformation while he is affected by cast-inhibiting crowd control or a lockout that disables abilities.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Shadow Assassin Bonus:</span> Upon entering combat with enemy champions, Kayn becomes empowered for 3 seconds to deal 25% - 45% (based on level) of post-mitigation physical and magic damage dealt against enemy champions as bonus magic damage. This effect cannot trigger again until Kayn has been out of combat with champions for over 8 seconds, with the timer being reset if he recasts Umbral Trespass.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Rhaast heals for 25% (+ 0.5% per 100 bonus health) of the post-mitigation physical damage that he deals to enemy champions with his abilities.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/p',
  notes: 'The Shadow Assassin Bonus will not be triggered nor have its out-of-combat timer be refreshed if Kayn deals  true damage.\nIf the Shadow Assassin Bonus is granted by Kayn dealing damage, the triggering instance of damage will benefit from the bonus.\nEntering transformation will not  destroy in-flight  projectiles.\nThe Orb System\nThe experience is depicted as orbs that drop upon the ground.  Melee champions drop red orbs that grant progress towards  Darkin, while  ranged champions drop blue orbs that grant progress for  Shadow Assassin. Orbs will remain on the ground until automatically collected by Kayn regardless of range once he leaves combat. The orbs will be collected even if Kayn  dies.\nThe experience bar above his portrait gauges his current progression, the color reflects the form with greater progress. Kayn can transform by interacting with his portrait, and can wait 4 minutes until the other form becomes available, reduced by 5 seconds for each collected orb of their type after that.\n\nMelee orbs grant 2 points per hit and 6 points per takedown.\nRanged orbs grant 3 points per hit and 7 points per takedown.\nThe amount of points received per orb is multiplied by 3 : 10.39 (based on minutes).\nThe bar gets filled up completely at 500 points.\nIf the two forms are within 8% of each other, the last champion range type hit will determine the winner. If both types are hit at the same time, the trasformation will default to  Darkin.\nEach side\'s bar has a bucket system, starting at 60 points.\nEach time an orb is taken the system checks if there\'s an amount of points in the bucket equal to or higher than the amount received from the orb.If there is, Kayn is given an additional orb of the same type he received, while also subtracting that amount of points from the bucket.\nThe bucket fills by 0.8 points per second if out of champion combat for 70 seconds.\nDamage dealt by  damage over time effects and specifically  First Strike and  Summon Aery will not grant orbs.\nThe following table refers for interactions while Kayn is transforming:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A',
  targeting: 'Passive'
}
export default ability
