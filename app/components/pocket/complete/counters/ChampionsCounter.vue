<script lang="ts" setup>
const props = defineProps<{
  pocket?: Pocket
    class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const championsLength = computed (() => {
  if (!pocket.value.champions.length)
  return 0
  return pocket.value.champions.length
})
</script>

<template>
  <span v-tippy="`${championsLength ? championsLength : 'no'} pocket pick${pocket.champions.length == 1 ? '' : 's'}`" :class="cn('flex gap-1.5 items-center', props.class)">
    <span class="dst font-mono text-1 ">{{ championsLength }}</span>
  </span>
</template>