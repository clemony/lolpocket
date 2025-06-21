<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const champion = computed (() => {
  return pocket.value.champions[0] ?? null
})
</script>

<template>
  <h1 v-if="champion" class="!text-7 font-serif grow  opacity-90 dst font-bold pb-3 ">
    <!--     {{ champion.key }} -->
  </h1>
</template>
