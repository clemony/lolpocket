// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Stage Presence",
  "affects": "Self, Allies, Enemies",
  "blurb": "Innate - Echo:  Seraphine's  basic ability casts generate  stacks of Echo. At max stacks, her next basic ability consumes them all to cast twice in quick succession.",
  "damageType": "Magic damage",
  "effectRadius": "800",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Echo:</span> Seraphine's basic ability casts each generate a stack of Echo, stacking up to 2 times. At 2 stacks, Seraphine's next basic ability casts an additional time for 1 mana after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Harmony:</span> Seraphine's ability casts grant a Note to herself and nearby allied champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.</p>"
    },
    {
      "description": "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an uncancellable windup, gain 25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 - 25 (based on level) (+ 4% AP) magic damage, reduced by 75% for Notes from allies."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/p",
  "notes": "Echo Details:\n\nEcho's current stacks are represented by a counter under Seraphine's health bar, visible to all players. The last stack is highlighted to indicate that an Echo cast is ready.\nSeraphine's basic abilities alternate their icons between 3 different ones each, depending on the current amount of stacks she has.\nThe additional cast must complete for Echo stacks to be consumed; if the cast time does not finish or does not begin at all, or if the ability fails to cast when there is not enough  mana, Seraphine will keep her stacks.\nThe additional cast does not affect the  cooldown of the mimicked ability.\nThe additional cast counts as a separate cast instance for the purpose of e.g.  Electrocute or  Conqueror.\nHarmony Details:\n\nNotes orbit at a radius of 100 from the center of their holder and they fire from this location.\nThe empowered attack can  critically strike.\nThe empowered attack will not trigger and Notes will not be consumed against  wards or jungle plants.\nNotes are fired one after another with a short delay.\nSeraphine can grant Notes to more than 4 allied champions.\nHarmony does not grant Notes to  clones.\nHarmony grants Notes even if the ally is  untargetable.\nThe Notes will fire from allies regardless of how far they are away from Seraphine.\nSeraphine gains a faint blue attack range indicator when there are Notes present.\nOther Details:\n\nSeraphine, while alive, will play music if there is at least one ally champion nearby.\nThis is audible to Seraphine and all allied champions that are in range of Harmony, indicative of if they can receive a Note or not.",
  "projectile": "TRUE",
  "speed": "3000",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Passive"
}
export default ability
