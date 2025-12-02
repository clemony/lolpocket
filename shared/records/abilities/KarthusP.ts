// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Death Defied",
  "affects": "Self",
  "blurb": "Innate: Upon  dying,  Karthus enters an  untargetable  spirit form for a few seconds that allows him to continue casting spells at no cost but without being able to move.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Upon taking fatal damage, Karthus enters a zombie state for 7 seconds, during which he can cast his abilities at no cost. If Defile has been learned, it will remain toggled on for Death Defied's entire duration. Requiem becomes disabled after 4 seconds of the duration have elapsed.</p>"
    },
    {
      "description": "While under this state, Karthus becomes untargetable and immune to crowd control as well as prevents all incoming damage, but is also rendered unable to move, declare basic attacks, use summoner spells, and activate items."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/p",
  "notes": "Death Defied's  untargetability does not  destroy in-flight  projectiles.\nKarthus cannot be  executed by the  Aspect of the Dragon during Death Defied.\nAt the start of Death Defied, Karthus is set to  1 health.\nKarthus can still regenerate his health over the duration, but he will always die at the end of it.\nAfter Death Defied ends, the corpse of Karthus will retain unit collision despite being dead on the ground.\nKarthus'  mana bar drains over the duration of Death Defied as an indicator of his time remaining in this state.\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand's  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar's  Event Horizon and  Viktor's  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or  gates.\nInitate the  Rift Herald Rodeo.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death's chain missile\n Test of Spirit's initial missile\n Lamb's Respite\n Realm of Death\nFountain health restore",
  "targeting": "Passive"
}
export default ability
