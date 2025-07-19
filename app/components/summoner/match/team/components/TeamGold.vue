<script lang="ts" setup>
const { team, enemy, class: className } = defineProps<{
  team: any
  enemy: any
  class?: HTMLAttributes['class']
}>()
  console.log("💠 - team:", team)

/*
const math = computed (() => {
  return Math.round((kills.value + assists.value) / deaths.value * 100)
}) */
</script>

<template>
  <tippy class="" :offset="[2, -2]" :class="cn('flex gap-2 justify-end ', className)">
    <i-ui-gold-icon class="size-4 text-[#C2A76E]  " />

    <p v-if="team.gold" class="flex font-semibold  items-center tracking-wide">
      {{ team.gold.toLocaleString() }}
    </p>

    <template #content>
      <p>
        * Spent / Total Gold
      </p>

      <p>
        <!-- total gold spent ${spent.ally.toLocaleString()}/ {{`${} gold  ${adv} enemy team.`}} -->
      </p>

      <p>
        less gold per player spent
      </p>
    </template>
  </tippy>
</template>