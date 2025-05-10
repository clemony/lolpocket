<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const championsLength = computed (() => {
  return pocket.value.champions.children.length
})
</script>

<template>
  <span v-tippy="`${championsLength ? championsLength : 'no'} pocket pick${pocket.champions.children.length == 1 ? '' : 's'}`" class="flex gap-1.5 items-center">
    <span class="dst font-mono text-1 opacity-60">{{ championsLength }}</span>
  </span>
</template>