<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
/* const spellsLength = computed (() => {
  return pocket.value.spells.filter(subArray =>
    Object.values(subArray).some(item => item.name !== null),
  ).length
}) */
</script>

<template>
  <div
    v-tippy="`${pocket.spells.length ?? 'no'} spells`"
    class="flex gap-2 items-center">
    <span class="dst font-mono text-1 opacity-60">{{ pocket.spells.length }}</span>
  </div>
</template>