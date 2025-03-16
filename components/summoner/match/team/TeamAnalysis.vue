<script lang="ts" setup>
const props = defineProps<{
  match: any
  team: any
  enemy: any
}>()

const match = computed (() => {
  return props.match
})

const team = computed (() => {
  return props.team
})

const enemy = computed (() => {
  return props.enemy
})
</script>

<template>
  <div class="grid w-full grid-cols-[0.7fr_repeat(3,2fr)]  place-items-center gap-6 h-14 mb-3">
  </div>
</template>