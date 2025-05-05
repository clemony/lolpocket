<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const champion = computed (() => {
  return pocket.value.champions.default ? pocket.value.champions.default : pocket.value.champions.children[0] ? pocket.value.champions.children[0] : null
})
</script>

<template>
  <h1 v-if="champion" class="!text-7 font-serif grow  opacity-90 dst font-bold pb-3 ">
    {{ champion.name }}
  </h1>
</template>
