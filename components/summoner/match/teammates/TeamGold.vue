<script lang="ts" setup>
const props = defineProps<{
  team: any
  enemy: any
  class?: HTMLAttributes['class']
}>()

const team = computed (() => {
  return props.team
})
const totalGold = computed (() => {
  const a = team.value.map(p => p.goldEarned)
    const b = props.enemy.map(p => p.goldEarned)
  return {
    ally: a.reduce((partialSum, a) => partialSum + a, 0),
    enemey: b.reduce((partialSum, b) => partialSum + b, 0)
  }
})

const spent = computed (() => {
  const a = team.value.map(p => p.goldSpent)
  const b = props.enemy.map(p => p.goldSpent)
  return {
    ally: a.reduce((partialSum, a) => partialSum + a, 0),
    enemy: b.reduce((partialSum, b) => partialSum + b, 0)
  }
})

const adv = computed (() => {
return totalGold.value.ally > totalGold.value.enemey ? 'advantage over' : 'disadvantage compared to'
})

/*
const math = computed (() => {
  return Math.round((kills.value + assists.value) / deaths.value * 100)
}) */
</script>

<template>
  <tippy class="" :offset="[2,-2]" :class="cn('flex gap-1 pb-3.75 h-full justify-items-start items-center', props.class)">
    <i-ui-gold-icon class="size-4 text-[#C2A76E] dst " />
    <p class="flex font-medium dst items-center tracking-wide">

      {{`${spent.ally.toLocaleString()}/${totalGold.ally.toLocaleString()}` }}
    </p>

    <template #content>
      <p>
        * Spent / Total Gold
      </p>
      <p>
<!-- {{`${} gold  ${adv} enemy team.`}} -->
      </p>

      <p>
        less gold per player spent
      </p>
    </template>
  </tippy>
</template>