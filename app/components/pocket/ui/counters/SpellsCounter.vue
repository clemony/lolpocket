<script lang="ts" setup>
import type { Pocket } from '#shared/schema'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
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
    class="flex items-center gap-2">
    <span class="font-mono text-1 opacity-60 dst">
      {{ pocket.spells.length }}
    </span>
  </div>
</template>
