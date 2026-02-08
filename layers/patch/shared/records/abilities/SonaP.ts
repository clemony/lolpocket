// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Power Chord',
  affects: 'Self',
  blurb: 'Innate - Accelerando:  Sona gains a permanent  stack of Accelerando each time she hits an enemy champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance. If she has max stacks, she instead  reduces the cooldown of  Crescendo each time.',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/p',
  notes: 'Power Chord stacks are represented by a counter under Sona\'s health bar, visible to the player only. It will light up when the empowered effect is available.\nWhen Power Chord is ready, Sona gains a ring around her. This ring will have a different color depending on the last ability used ( blue,  green or  purple).\nThe effect does not change if abilities are used while the projectile is in motion.\nThe triggering attack will apply other  on-hit effects and can  critically strike as normal.\nSona retains Power Chord\'s stacks when entering  resurrection.\nThe empowered attack will trigger but not be consumed nor apply its effects against  wards and jungle plants.',
  spellEffects: 'proc',
  spellshieldable: 'True',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate - Accelerando:</span> Sona generates a stack of Accelerando each time she hits an enemy champion with Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with Aria of Perseverance, stacking up to 120 times. At maximum stacks, she instead reduces the current cooldown of Crescendo by 1.5 seconds each time.</p>\n<p class="ability-effect"><span class="ability-header"> Accelerando:</span> For each stack, Sona gains 0.5 basic ability haste, up to 60 at maximum stacks.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate - Melody:</span> Whenever Sona casts a basic ability, her other basic abilities incur a 0.5-second global cooldown and she generates a unique aura for 3 seconds that empowers herself and nearby allied champions.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate - Power Chord:</span> Sona\'s basic abilities generate a stack of Power Chord, stacking up to 3 times. At 3 stacks, her next basic attack is empowered to consume them all to have an uncancellable windup, deal 20 - 240 (based on level) (+ 20% AP) bonus magic damage, and apply an additional effect based on the last basic ability she cast.</p>\n<p class="ability-effect"><span class="ability-header"> Hymn of Valor - Staccato:</span> Bonus damage is modified to 30 - 360 (based on level) (+ 30% AP).</p>\n<p class="ability-effect"><span class="ability-header"> Aria of Perseverance - Diminuendo:</span> Reduces the target\'s size by 8% and damage dealt by 25% (+ 4% per 100 AP) for 3 seconds.</p>\n<p class="ability-effect"><span class="ability-header"> Song of Celerity - Tempo:</span> Slows the target by 50% (+ 4% per 100 AP) for 2 seconds, capped at 99%.</p>'
    },
    {
      description: 'Gaining Power Chord\'s empowered attack resets Sona\'s basic attack timer.'
    }
  ]
}
export default ability
